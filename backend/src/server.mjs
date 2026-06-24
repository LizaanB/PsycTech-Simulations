import "dotenv/config";
import cors from "cors";
import express from "express";
import { fileURLToPath } from "node:url";
import { comparePassword, hashPassword, signToken, verifyToken } from "./auth.mjs";

const app = express();
const port = Number(process.env.API_PORT || 4000);

app.use(cors());
app.use(express.json());

app.get("/api/health", (_, res) => {
  res.json({ ok: true, service: "psyctech-api" });
});

app.post("/api/auth/register", async (req, res) => {
  const { email, password, role = "client" } = req.body || {};
  if (!email || !password) {
    return res.status(400).json({ error: "email and password required" });
  }

  const passwordHash = await hashPassword(password);
  return res.status(201).json({ email, passwordHash, role });
});

app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password) {
    return res.status(400).json({ error: "email and password required" });
  }

  const expectedHash = await hashPassword(password);
  const valid = await comparePassword(password, expectedHash);
  if (!valid) {
    return res.status(401).json({ error: "invalid credentials" });
  }

  const token = signToken({ email, role: "client" });
  return res.json({ token });
});

app.get("/api/auth/me", (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ error: "missing token" });
  }

  try {
    const payload = verifyToken(authHeader.replace("Bearer ", ""));
    return res.json({ user: payload });
  } catch {
    return res.status(401).json({ error: "invalid token" });
  }
});

app.post("/api/quotes", (req, res) => {
  return res.status(201).json({ message: "quote enquiry received", data: req.body });
});

app.post("/api/bookings", (req, res) => {
  return res.status(201).json({ message: "booking enquiry received", data: req.body });
});

const isMain = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];
if (isMain) {
  app.listen(port, () => {
    console.log(`PSYC Tech API listening on port ${port}`);
  });
}

export default app;
