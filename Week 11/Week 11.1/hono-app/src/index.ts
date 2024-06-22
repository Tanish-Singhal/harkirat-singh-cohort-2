import { Hono } from 'hono'

const app = new Hono()

// TODO: simple route in hono
// we can get both req, res using "c"
// app.get('/', (c) => {
//   return c.text('Hello Hono!')
// })


// TODO: Middleware in hono
async function authMiddleware(c: any, next: any) {
  if (c.req.header("Authorization")) {
    // Do validation
    await next()
  }
  else {
    return c.text("You dont have access");
  }
}
app.use(authMiddleware);


// TODO: how to access the body, headers and params in hono
app.get("/", async (c) => {
  const body = await c.req.json();

  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.text('Hello Hono!');
})

export default app
