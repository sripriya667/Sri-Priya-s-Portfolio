import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: ""
      });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "sripriya.dev@gmail.com",
      color: "primary"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      color: "secondary"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "San Francisco, CA",
      color: "accent"
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", color: "primary" },
    { icon: Github, href: "#", color: "secondary" },
    { icon: Twitter, href: "#", color: "accent" }
  ];

  return (
    <section id="contact" className="py-20 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it and help bring your ideas to life.
            Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    info.color === 'primary' ? 'bg-primary/10' :
                    info.color === 'secondary' ? 'bg-secondary/10' :
                    'bg-accent/10'
                  }`}>
                    <info.icon className={`${
                      info.color === 'primary' ? 'text-primary' :
                      info.color === 'secondary' ? 'text-secondary' :
                      'text-accent'
                    }`} size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{info.title}</div>
                    <div className="text-gray-600">{info.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="mt-8"
            >
              <h4 className="font-semibold text-gray-900 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 ${
                      social.color === 'primary' ? 'bg-primary/10 text-primary hover:bg-primary hover:text-white' :
                      social.color === 'secondary' ? 'bg-secondary/10 text-secondary hover:bg-secondary hover:text-white' :
                      'bg-accent/10 text-accent hover:bg-accent hover:text-white'
                    }`}
                  >
                    <social.icon size={18} />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                      placeholder="Project Discussion"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="mt-2 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    <Send className="mr-2" size={18} />
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
