import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import client from "@/db";

// const client = new PrismaClient();        // you should not write the prisma client like this in next during developemnt mode as it will create a new connection everytime you save the file
// TODO: That's why always add db.ts file in the code as it is

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
