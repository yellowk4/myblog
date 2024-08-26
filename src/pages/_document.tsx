import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <meta name="description" content="My Blog, Next.js, FrontEnd" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
