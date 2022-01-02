import Head from 'next/head';
// import Image from 'next/image';
// import Link from 'next/link';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import { getSortedPostsData } from '../lib/posts';
import styles from '../styles/Home.module.scss';
import layoutStyles from '../styles/layout.module.scss';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* <Image src="/images/profile.jpeg" width={300} height={300} alt={"yels"} /> */}
      <div className={layoutStyles.container}>
        <main className={styles.main}>
          <Layout>
            HELLO, THIS IS TOP PAGE
            {/* {console.log(JSON.stringify(allPostsData))} */}
            {/* <ul>
              {allPostsData.map(({ id, date, title }) => (
                <li key={`${id}`}>
                  {id}. {title}
                  <br />
                  {date}
                </li>
              ))}
            </ul> */}
          </Layout>
        </main>
        <Footer />
      </div>
    </>
  );
}
