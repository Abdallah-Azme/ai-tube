import dotenv from "dotenv";
import { defineConfig } from "drizzle-kit";

// to make drizzle access the env local since its default to env
dotenv.config({ path: ".env.local" });

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
