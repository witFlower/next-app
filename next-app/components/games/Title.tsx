import type { NextPage } from 'next';

interface Props {
  title: string;
}

const Title: NextPage<Props> = ({ title }) => {
  return (
    <h2 className='mdl-title'>
      <i>☺️</i>
      {title}
    </h2>
  );
};
export default Title;
