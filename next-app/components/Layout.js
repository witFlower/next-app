import styles from "../styles/layout";

export default function Layout({ children }) {
  return <div className={styles.container}>{children}</div>;
}
