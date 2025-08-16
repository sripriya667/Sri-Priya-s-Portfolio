import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { sendContactNotification } from "./email";
import { z } from "zod";
import path from "path";
import express from "express";
import { fileURLToPath } from "url";

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve all static files from public/
  app.use(express.static(path.join(__dirname, "../public")));

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      
      // Send email notifications
      const emailSent = await sendContactNotification(validatedData);
      
      if (emailSent) {
        res.json({ 
          success: true, 
          message: "Message sent successfully! I'll get back to you soon.", 
          data: submission 
        });
      } else {
        res.json({ 
          success: true, 
          message: "Message saved successfully! There was an issue with email delivery, but I'll still receive your message.", 
          data: submission 
        });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Invalid form data",
          errors: error.errors
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({
          success: false,
          message: "Failed to send message"
        });
      }
    }
  });

  // Get all contact submissions (for admin purposes)
  app.get("/api/contact", async (_req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to retrieve submissions"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}