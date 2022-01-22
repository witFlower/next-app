import Head from 'next/head';
import Layout from '@/components/Layout';

import { getAllPostIds } from '../../lib/posts';

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post() {
  return (
    <Layout>
      <Head>
        <title>This page is post page</title>
      </Head>
      <main>HI there!</main>
    </Layout>
  );
}
