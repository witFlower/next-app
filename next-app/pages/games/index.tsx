import Head from 'next/head';
import { useState } from 'react';
import { getAllPostIds } from '../../lib/posts';
import Layout from '@/components/Layout';
import CountBlock from '@/components/games/CountBlock';
import TodoBlock from '@/components/games/TodoBlock';
import styles from '@/styles/Home.module.scss';

// export async function getStaticPaths() {
//   const paths = getAllPostIds();
//   return {
//     paths,
//     fallback: false,
//   };
// }
export interface gamesState {
  count: number | undefined;
}
export default function Games() {
  const [count, setCount] = useState(0);
  const calculateNum = (num: number) => {
    setCount(count + num);
  };
  return (
    <Layout>
      <Head>
        <title>This page is Games page</title>
      </Head>
      <CountBlock />
      <TodoBlock />
    </Layout>
  );
}
