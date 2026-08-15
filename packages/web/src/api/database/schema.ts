import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

/**
 * Define your database schema here, then apply it with `bun run db:push`
 * (from packages/web). Re-export any generated schema from this file
 * (e.g. Better Auth's auth-schema.ts) so drizzle generates complete migrations.
 * Table patterns and conventions: skills/app/references/api.md
 */

/** Sales / technical enquiries from the contact page. */
export const contactSubmissions = sqliteTable("contact_submissions", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company"),
  country: text("country"),
  phone: text("phone"),
  enquiryType: text("enquiry_type").notNull(),
  productInterest: text("product_interest"),
  message: text("message").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .$defaultFn(() => new Date()),
});

/** Distributor / reseller applications from the partners page. */
export const partnerApplications = sqliteTable("partner_applications", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  company: text("company").notNull(),
  contactName: text("contact_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  website: text("website"),
  region: text("region").notNull(),
  country: text("country").notNull(),
  sectors: text("sectors"),
  currentBrands: text("current_brands"),
  message: text("message"),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .$defaultFn(() => new Date()),
});
