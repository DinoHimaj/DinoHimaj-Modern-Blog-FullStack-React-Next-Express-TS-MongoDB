import 'dotenv/config';
import express from 'express';
import blogPostsRoutes from './routes/blog-posts';
import cors from 'cors';
import env from './env';

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: env.WEBSITE_URL,
    credentials: true,
  }),
);

app.use('/posts', blogPostsRoutes);

export default app;
