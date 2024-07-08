import { Hono } from 'hono'
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';

const app = new Hono();

// TODO: Routing
app.route('/api/v1/user', userRouter);
app.route('/api/v1/blog', blogRouter);

export default app
