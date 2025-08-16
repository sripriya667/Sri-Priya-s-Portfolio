import sgMail from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

interface ContactEmailData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactNotification(data: ContactEmailData): Promise<boolean> {
  try {
    // Email to you (notification)
    await sgMail.send({
       to: "sripriya123@gmail.com",
  from: "sripriya123@gmail.com",
  replyTo: data.email,   // <-- user’s email
  subject: "New Contact Form Submission",
  text: `Message from ${data.firstName} (${data.email}): ${data.message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Subject:</strong> ${data.subject}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
              ${data.message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="margin-top: 20px; color: #666; font-size: 14px;">
            This email was sent from your portfolio contact form.
          </p>
        </div>
      `,
    });

    // Confirmation email to the sender
    await sgMail.send({
      to: data.email,
      from: 'sripriyaofficial2004@gmail.com', // must match verified sender
      subject: 'Thank you for contacting me!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank you for reaching out!</h2>
          <p>Hi ${data.firstName},</p>
          <p>Thank you for contacting me through my portfolio. I've received your message and will get back to you as soon as possible.</p>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Your Message:</h3>
            <p><strong>Subject:</strong> ${data.subject}</p>
            <div style="background: white; padding: 15px; border-radius: 4px;">
              ${data.message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <p>Best regards,<br>Sri Priya</p>
          
          <p style="margin-top: 30px; color: #666; font-size: 14px;">
            This is an automated confirmation email from sripriya.dev
          </p>
        </div>
      `,
    });

    return true;
  } catch (error: any) {
    console.error('SendGrid email error:', error.response?.body || error.message || error);
    return false;
  }
}