import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify } from 'hono/jwt'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string,
  }
}>()

// TODO: Middleware
app.use('/api/v1/blog/*', async (c, next) => {
  const header = c.req.header('Authorization') || "";

  // Bearer token
  const token = header.split(" ")[1];
  
  const response = await verify(token, c.env.JWT_SECRET);
  
  if (response.id) {
    next();
  }
  else {
    c.status(403);
    return c.json({
      error: "unauthorized user",
    });
  }
})

// TODO: signup route
app.post('/api/v1/signup', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
      },
    });

    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({
      jwt: token,
    });

  } catch(e) {
    c.status(403);
    return c.json({
      error: "error while signup up",
    });
  }
})

// TODO: signin route
app.post('/api/v1/signin', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

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
  
    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({
      jwt: token,
    });

  } catch(e) {
    c.status(403);
    return c.json({
      error: "error while signing up",
    });
  }
})

export default app
