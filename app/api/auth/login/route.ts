import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "local-dev-secret";

export async function POST(request: Request) {
  const body = await request.json();
  if (!body?.email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const token = jwt.sign({ email: body.email, role: "client" }, JWT_SECRET, {
    expiresIn: "1d",
  });

  return NextResponse.json({ token });
}
