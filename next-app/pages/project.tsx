import type { NextPage } from 'next';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import Layout from '@/components/Layout';
import Title from '@/components/Title';

interface Props {}

const Project: NextPage<Props> = ({ children }) => {
  return (
    <>
      <Navigation />
      <Layout>
        <div className='container'>
          <div className='inner'>
            <Title startDate='2019/2/20' element={undefined}>
              프로젝트
            </Title>
            <p>THIS IS TOP PAGE</p>
            <p>한글 폰트 테스트</p>
          </div>
          {children}
        </div>
      </Layout>
      <Footer />
    </>
  );
};
export default Project;
