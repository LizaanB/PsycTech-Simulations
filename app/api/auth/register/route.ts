import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  if (!body?.email || !body?.password) {
    return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
  }

  return NextResponse.json({ message: "User registration scaffold ready" }, { status: 201 });
}
