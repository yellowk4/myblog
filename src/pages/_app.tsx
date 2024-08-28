import Layout from '@/components/layout/Layout'; // layout 적용
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
// 인증
import { AuthProvider } from '@/firebase/auth';
// import app from '@/firebase/firebase';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}
