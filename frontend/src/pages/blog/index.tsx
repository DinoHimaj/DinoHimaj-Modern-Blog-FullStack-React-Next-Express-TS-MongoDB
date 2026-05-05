import Head from 'next/head';
import { BlogPost } from '@/models/blog-post';
import { GetServerSideProps } from 'next';
import * as BlogApi from '@/network/api/blog';
import BlogPostsGrid from '@/components/BlogPostsGrid';

export const getServerSideProps: GetServerSideProps<
  BlogPageProps
> = async () => {
  const posts = await BlogApi.getBlogPosts();
  return { props: { posts } };
};

interface BlogPageProps {
  posts: BlogPost[];
}

export default function BlogPage({ posts }: BlogPageProps) {
  return (
    <>
      <Head>
        <title>Articles Page</title>
        <meta name='description' content='read the latest articles and news' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <div>
        <h1>Blog</h1>
        <BlogPostsGrid posts={posts} />
      </div>
    </>
  );
}
