import styles from '../styles/layout.module.scss';

export default function Header({ children }) {
  return (
    <div className={styles.globalHeader}>
      <h1>
        <Image
          src='/images/profile.jpeg'
          width={50}
          height={50}
          alt={'EX LOGO'}
        />
      </h1>
      <ul className={styles.globalNav}>
        <li className={styles.globalNavList}>
          <Link href='./project'>
            <a className={styles.globalNavLink}>PROJECT</a>
          </Link>
          <Link href='./skills'>
            <a className={styles.globalNavLink}>SKILLS</a>
          </Link>
          <Link href='./about'>
            <a className={styles.globalNavLink}>ABOUT</a>
          </Link>
          <Link href='./contact'>
            <a className={styles.globalNavLink}>CONTACT</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
