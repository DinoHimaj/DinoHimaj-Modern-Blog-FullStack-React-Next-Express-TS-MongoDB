import api from '@/network/axiosInstance';
import { BlogPost } from '@/models/blog-post';

interface createBlogPostValues {
  slug: string;
  title: string;
  summary: string;
  body: string;
}

export async function createBlogPost(input: createBlogPostValues) {
  const response = await api.post<BlogPost>('/blog', input);
  return response.data;
}
