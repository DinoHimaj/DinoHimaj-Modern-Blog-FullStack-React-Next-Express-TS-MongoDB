import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Container, SSRProvider } from 'react-bootstrap';
import styles from '@/styles/App.module.css';
import NavBar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/styles/utils.css';
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Modern Blog</title>
        <meta
          name='description'
          content='modern blog full stack project with seo optimization'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <SSRProvider>
        <div className='inter.className'>
          <NextNProgress color='#21fa90' />
          <NavBar />
          <main>
            <Container className={styles.pageContainer}>
              <Component {...pageProps} />
            </Container>
          </main>
          <Footer />
        </div>
      </SSRProvider>
    </>
  );
}
