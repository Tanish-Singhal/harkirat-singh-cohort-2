import { Hono } from 'hono'
import { userRouter } from './routes/user';

const app = new Hono();

// TODO: Routing
app.route('/api/v1/user', userRouter);

export default app
