import { NEXT_AUTH } from "@/app/lib/auth";
import NextAuth from "next-auth/next";
import { NextRequest, NextResponse } from "next/server";

// export function GET(req: NextRequest, arg: any) {
//   console.log(arg.params.authRoute);
//   return NextResponse.json({
//     message: "asd"
//   })
// }

const handler = NextAuth(NEXT_AUTH);

export const GET = handler;
export const POST = handler;
