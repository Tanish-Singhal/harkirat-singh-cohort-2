import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import { signupInputSchema, signinInputSchema } from "@tanish-singhal/medium-blog-common";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string,
  }
}>();

// TODO: signup route
userRouter.post('/signup', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const { success } = signupInputSchema.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({
      error: "Inputs are not correct",
    });
  }

  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if (existingUser) {
      c.status(409);
      return c.json({
        error: "User already exists",
      });
    }

    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
      },
    });

    const token = await sign({
      id: user.id
    }, c.env.JWT_SECRET);
    
    return c.json({
      jwt: token,
    });

  } catch(e) {
    c.status(403);
    return c.json({
      error: "error while signup up",
    });
  }
});

// TODO: signin route
userRouter.post('/signin', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = signinInputSchema.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({
      error: "Inputs are not correct",
    });
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
        password: body.password,
      },
    });
  
    if (!user) {
      c.status(403);
      return c.json({
        error: "user not found",
      });
    }
  
    const token = await sign({
      id: user.id
    }, c.env.JWT_SECRET);
    
    return c.json({
      jwt: token,
    });

  } catch(e) {
    c.status(403);
    return c.json({
      error: "error while signing up",
    });
  }
});