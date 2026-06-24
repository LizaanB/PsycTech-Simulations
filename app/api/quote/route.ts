import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = await request.formData();
  const simulatorType = payload.get("simulatorType")?.toString() || "General";

  return NextResponse.json({
    message: "Quote request submitted to sales team",
    simulatorType,
  });
}
