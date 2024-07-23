import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export async function GET() {
  // database logic
  const user = await client.user.findFirst();

  return NextResponse.json({
    email: user?.email,
    name: "ramdonName",
  });
}

export async function POST(req: NextRequest) {
  // body
  const body = await req.json();

  // header
  // req.headers.get("authorization");

  // query parameter
  // req.nextUrl.query.get("name");

  try {
    await client.user.create({
      data: {
        email: body.email,
        password: body.password,
      },
    });

    // store the body in the database
    console.log(body);

    return NextResponse.json({
      message: "User created",
    });

  } catch (e) {
    console.log(e);
    return NextResponse.json({
        message: "Error while signing up",
      }, {
        status: 411,
      }
    );
  }
}
