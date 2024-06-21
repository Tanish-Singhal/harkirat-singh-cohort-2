import { Hono } from 'hono'

const app = new Hono()

// we can get both req, res using "c"
app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app
