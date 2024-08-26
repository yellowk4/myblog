// src/components/layout/Layout.tsx

import Header from './Header';
import classes from './Layout.module.css';
import { LayoutProps } from '@/types/types';
import Head from 'next/head';

function Layout(props: LayoutProps) {
  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>
      <Header />
      <main className={classes.main}>{props.children}</main>
    </>
  );
}

export default Layout;
