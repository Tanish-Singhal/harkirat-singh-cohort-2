import { NextRequest, NextResponse } from "next/server";

export function GET() {
  // database logic
  return Response.json({
    email: "random@gmail.com",
    name: "random",
  })
}
export async function POST(req: NextRequest) {
  // body
  const body = await req.json();

  // header
  // req.headers.get("authorization");

  // query parameter
  // req.nextUrl.query.get("name");

  return NextResponse.json({
    message: "You are signed up"
  });
}
