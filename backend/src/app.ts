import 'dotenv/config';
import express from 'express';
import blogPostsRoutes from './routes/blog-posts';

const app = express();

app.use(express.json());

app.use('/posts', blogPostsRoutes);

export default app;
