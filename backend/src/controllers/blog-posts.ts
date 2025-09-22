import { RequestHandler } from 'express';
import BlogPostModel from '../models/blog-post';

export const getBlogPosts: RequestHandler = async (req, res, next) => {
  try {
    const allBlogPosts = await BlogPostModel.find().exec();
    res.status(200).json(allBlogPosts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get blog posts' });
  }
};

interface BlogPostBody {
  slug: string;
  title: string;
  summary: string;
  body: string;
}

export const createBlogPost: RequestHandler<
  unknown,
  unknown,
  BlogPostBody,
  unknown
> = async (req, res, next) => {
  try {
    const { slug, title, summary, body } = req.body;
    const newPost = await BlogPostModel.create({
      slug,
      title,
      summary,
      body,
    });

    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create blog post' });
  }
};
