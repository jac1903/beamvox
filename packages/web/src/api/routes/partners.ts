import { z } from "zod";
import { desc } from "drizzle-orm";
import { base } from "../__core/app";
import { db } from "../database";
import * as schema from "../database/schema";

const partnerInput = z.object({
  company: z.string().min(2).max(160),
  contactName: z.string().min(2).max(120),
  email: z.string().email().max(200),
  phone: z.string().max(60).optional(),
  website: z.string().max(200).optional(),
  region: z.string().min(1).max(80),
  country: z.string().min(2).max(120),
  sectors: z.string().max(400).optional(),
  currentBrands: z.string().max(400).optional(),
  message: z.string().max(4000).optional(),
});

export const partners = {
  apply: base.input(partnerInput).handler(async ({ input }) => {
    const [row] = await db
      .insert(schema.partnerApplications)
      .values({
        ...input,
        phone: input.phone || null,
        website: input.website || null,
        sectors: input.sectors || null,
        currentBrands: input.currentBrands || null,
        message: input.message || null,
      })
      .returning();
    return { id: row?.id ?? null, received: true };
  }),

  listApplications: base.handler(() =>
    db
      .select()
      .from(schema.partnerApplications)
      .orderBy(desc(schema.partnerApplications.createdAt))
      .limit(100),
  ),
};
