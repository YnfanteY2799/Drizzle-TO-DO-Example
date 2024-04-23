import type { Config } from "drizzle-kit";

import "dotenv/config";

export default {
  schema: "./db/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.NEON_DATABASE_URL!,
  },
} satisfies Config;
