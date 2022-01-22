import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Layout from '../components/Layout';
import Title from '../components/Title';

export default function Top({ children }) {
  return (
    <>
      <Navigation />
      <Layout>
        <div className='container'>
          <div className='inner'>
            <Title>페이지 타이틀 테스트</Title>
            <p>THIS IS TOP PAGE</p>
            <p>한글 폰트 테스트</p>
          </div>
          {children}
        </div>
      </Layout>
      <Footer />
    </>
  );
}
