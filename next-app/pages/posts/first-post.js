import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/Layout";

export default function firstPost() {
  return (
    <Layout>
      <Head>
        <title>This page is first post</title>
      </Head>
      <div>
        <h1>FIRST POST</h1>
        <Link href="/">
          <a>back to home</a>
        </Link>
      </div>
    </Layout>
  );
}
