import styles from '@/styles/layout.module.scss';
import type { NextPage } from 'next';

interface Props {
  element: any;
  description?: string;
  startDate?: string;
  endDate?: string;
}

const Title: NextPage<Props> = ({
  element,
  children,
  description,
  startDate,
  endDate,
}) => {
  return (
    <div className='h1'>
      {children}
      {(description || startDate || endDate) && (
        <p className='titleSmallText'>
          <span className='startDate'>{startDate}</span>
          <span>{endDate}</span>
        </p>
      )}
    </div>
  );
};

export default Title;
