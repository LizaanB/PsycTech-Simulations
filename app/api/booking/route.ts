import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = await request.formData();
  return NextResponse.json({
    message: "Booking request received",
    date: payload.get("eventDate"),
  });
}
