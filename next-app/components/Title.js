import styles from '../styles/layout.module.scss';

export default function Title({ element, children }) {
  return <div className={styles.h1}>{children}</div>;
}
