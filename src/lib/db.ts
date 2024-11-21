// lib/db.ts
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
// import { type NeonHttpDatabase } from 'drizzle-orm/neon-http';
// import * as schema from '@/db/schema';  // 确保导入你的 schema
import { config } from "dotenv";

config({ path: ".env.local" }); // or .env.local


const sql = neon(process.env.DATABASE_URL!);
export const NeonDb = drizzle({ client: sql });