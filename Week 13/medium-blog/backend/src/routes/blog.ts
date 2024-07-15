import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from 'hono/jwt'
import { createBlogInputSchema, updateBlogInputSchema } from "@tanish-singhal/medium-blog-common";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string,
  },
  Variables: {
    userId: string,
  }
}>();

// TODO: Middleware
blogRouter.use('/*', async (c, next) => {
  const header = c.req.header('authorization') || "";

  // Bearer token
  const token = header.split(" ")[1];
  
  try {
    const user = await verify(token, c.env.JWT_SECRET);
  
    if (user) {
      // @ts-ignore
      c.set("userId", user.id);
      await next();
    }
    else {
      c.status(403);
      return c.json({
        error: "unauthorized user",
      });
    }

  } catch(e) {
    c.status(403);
    return c.json({
      error: "unauthorized user",
    });
  }
});

// TODO: Create post route
blogRouter.post('/new', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = createBlogInputSchema.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({
      error: "Inputs are not correct",
    });
  }

  const userId = c.get("userId");

  if (!body.title || !body.content) {
    c.status(400);
    return c.json({
      error: "Title and content are required"
    });
  }

  try {
    const blog = await prisma.blog.create({
      data: {
        title: body.title,
        content: body.content,
        published: body.published,
        authorId: userId,      // this will get fron the middleware, when you take the token from the user, then you extract the id from the token and then pass that token to here
      },
    });
  
    return c.json({
      id: blog.id,
    });

  } catch(e) {
    c.status(403);
    return c.json({
      error: "error while creating post",
    });
  }
});

// TODO: Update post route
blogRouter.put('/update', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = updateBlogInputSchema.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({
      error: "Inputs are not correct",
    });
  }

  try {
    const blog = await prisma.blog.update({
      where: {
        id: body.id,
      },
      data: {
        title: body.title,
        content: body.content,
        published: body.published,
      },
    });
  
    return c.json({
      id: blog.id,
    });

  } catch(e) {
    c.status(403);
    return c.json({
      error: "error while updating post",
    });
  }
});

// TODO: Get all post route
blogRouter.get('/bulk', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blogs = await prisma.blog.findMany({
      select: {
        id: true,
        title: true,
        content: true,
        author: {
          select: {
            name: true
          }
        }
      }
    });

    return c.json({
      blogs: blogs,
    });

  } catch(e) {
    c.status(403);
    return c.json({
      error: "error while fetching the post",
    });
  }
})

// TODO: Get single post
blogRouter.get('/:id', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const id = c.req.param('id');

  try {
    const blog = await prisma.blog.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        title: true,
        content: true,
        author: {
          select: {
            name: true
          }
        }
      }
    });

    if (blog) {
      return c.json({
        blog: blog
      });
    } 
    else {
      c.status(404);
      return c.json({
        error: 'Post not found'
      });
    }

  } catch(e) {
    c.status(403);
    return c.json({
      error: "error while fetching the post",
    });
  }
});
