import utilStyles from '@/styles/utility.module.scss';
import cn from 'classnames';
import type { NextPage } from 'next';

interface Props {
  text: string;
  type: string;
}

const Button: NextPage<Props> = ({ text }) => {
  return (
    <button
      className={cn({
        [utilStyles.isSuccess]: type === 'success',
        [utilStyles.isError]: type === 'error',
      })}
    >
      {text}
    </button>
  );
};

export default Button;
