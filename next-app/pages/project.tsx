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
            <h3>THIS IS TOP PAGE</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio odit deleniti, corporis, quaerat autem magni recusandae
              harum doloremque aspernatur odio rerum atque quis molestiae labore
              numquam possimus reprehenderit quisquam officia!
            </p>
            <br />
            <h3>한글 폰트 테스트</h3>
            <p>
              옥 그러나 별 피어나듯이 계십니다. 나는 밤이 가을로 까닭입니다. 패,
              별빛이 비둘기, 어머님, 위에 듯합니다. 피어나듯이 가득 이런 그리고
              쓸쓸함과 사랑과 듯합니다. 내 아직 때 파란 까닭입니다. 계절이 별
              우는 덮어 나는 가난한 내린 있습니다. 이름과 아무 별을 까닭입니다.
              쓸쓸함과 쉬이 이제 그리워 흙으로 강아지, 이름을 계십니다. 위에도
              하나에 어머니, 경, 가득 별 이름자 무엇인지 딴은 거외다. 보고,
              이네들은 내 언덕 이름과, 봅니다.
            </p>
            <br />
            <h3>日本語フォントテスト</h3>
            <p>
              私は昔単にほんの説明方においてもののために廻っないう。
              たとい十月を失敗心はもしその反抗ませですほどであるがみうがは学習読みたありて、それほどにも立たなかっんなけれます。
              雑木で掘りです事は何しろ翌日がはたしてないないませ。
            </p>
          </div>
          {children}
        </div>
      </Layout>
      <Footer />
    </>
  );
};
export default Project;
