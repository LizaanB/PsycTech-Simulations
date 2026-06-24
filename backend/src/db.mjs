import { Pool } from "pg";

const connectionString =
  process.env.DATABASE_URL || "postgresql://<username>:<password>@<host>:5432/psyctech";

const pool = new Pool({ connectionString });

export async function query(text, params = []) {
  return pool.query(text, params);
}

export { pool };
