import { z } from "zod";
import { desc } from "drizzle-orm";
import { base } from "../__core/app";
import { db } from "../database";
import * as schema from "../database/schema";
import nodemailer from "nodemailer";

const contactInput = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(200),
  company: z.string().max(160).optional(),
  country: z.string().max(120).optional(),
  phone: z.string().max(60).optional(),
  enquiryType: z.string().min(1).max(80),
  productInterest: z.string().max(160).optional(),
  message: z.string().min(10).max(4000),
});

// Configure Nodemailer transporter for Zoho
const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.ZOHO_EMAIL,
    pass: process.env.ZOHO_PASSWORD,
  },
});

// Email recipient – change this to your Zoho email
const RECIPIENT_EMAIL = process.env.CONTACT_EMAIL || "beamvox@zoho.com";

export const contact = {
  submit: base.input(contactInput).handler(async ({ input }) => {
    // 1. Save to database
    const [row] = await db
      .insert(schema.contactSubmissions)
      .values({
        ...input,
        company: input.company || null,
        country: input.country || null,
        phone: input.phone || null,
        productInterest: input.productInterest || null,
      })
      .returning();

    // 2. Send email notification
    try {
      const emailBody = `
New Contact Form Submission

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name:           ${input.name}
Email:          ${input.email}
Company:        ${input.company || "Not provided"}
Country:        ${input.country || "Not provided"}
Phone:          ${input.phone || "Not provided"}
Enquiry Type:   ${input.enquiryType}
Product:        ${input.productInterest || "Not specified"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Message:
${input.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Reply to: ${input.email}
      `;

      await transporter.sendMail({
        from: `"Beamvox Contact" <${process.env.ZOHO_EMAIL || "beamvox@zoho.com"}>`,
        to: RECIPIENT_EMAIL,
        subject: `New contact enquiry: ${input.enquiryType}`,
        text: emailBody,
        replyTo: input.email,
      });

      console.log("Email sent successfully to:", RECIPIENT_EMAIL);
    } catch (error) {
      console.error("Failed to send email:", error);
      // Don't fail the request if email fails – still return success
      // but you might want to log the error.
    }

    return { id: row?.id ?? null, received: true };
  }),

  list: base.handler(() =>
    db
      .select()
      .from(schema.contactSubmissions)
      .orderBy(desc(schema.contactSubmissions.createdAt))
      .limit(100),
  ),
};
