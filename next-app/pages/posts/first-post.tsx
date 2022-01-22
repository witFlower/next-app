import Link from 'next/link';
import Head from 'next/head';
import type { NextPage } from 'next';
import Layout from '@/components/Layout';

const firstPost: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>This page is first post</title>
      </Head>
      <div>
        <h1>FIRST POST</h1>
        <Link href='/'>
          <a>back to home</a>
        </Link>
      </div>
    </Layout>
  );
};

export default firstPost;
