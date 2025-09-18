import Head from 'next/head';

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Articles Page</title>
        <meta name='description' content='read the latest articles and news' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <div>
        <h1>Hello Blog</h1>
      </div>
    </>
  );
}
