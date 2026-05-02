import Head from 'next/head';
import { Button } from 'react-bootstrap';

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Articles Page</title>
        <meta name='description' content='read the latest articles and news' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <div>
        <div>Hello Blog</div>
        <div>
          <Button>I am a button</Button>
        </div>
        <div>
          <a href='#'>I am a link</a>
        </div>
      </div>
    </>
  );
}
