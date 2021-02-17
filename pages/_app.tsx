import type { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
        <Head>
          <title>Rick and Morty API</title>
          <meta name="description" content="A simple Rick and Morty API to work with NextJS and Strapi" />
        </Head>

        <GlobalStyles />
        <Component {...pageProps} />
      </>
  );
}

export default MyApp;
