import { z } from "zod";
import { desc } from "drizzle-orm";
import { base } from "../__core/app";
import { db } from "../database";
import * as schema from "../database/schema";

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

export const contact = {
  submit: base.input(contactInput).handler(async ({ input }) => {
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
