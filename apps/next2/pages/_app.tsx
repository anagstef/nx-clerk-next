import { ClerkProvider } from '@clerk/nextjs';
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps} >
      <Head>
        <title>Welcome to next2!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </ClerkProvider>
  );
}

export default CustomApp;
