import styles from '../styles/layout.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Layout from './Layout';

export default function Navigation({ children }) {
  return (
    <div className='globalNavigation'>
      <Layout>
        <h1 className='globalLogo'>
          <Link href={'/'}>
            <a>
              {/* <Image
            src='/images/profile.jpeg'
            width={50}
            height={50}
            alt={'EX LOGO'}
          /> */}

              <i />
              <span>
                WitFLOWER's
                <br />
                Web Portfolio
              </span>
            </a>
          </Link>
        </h1>

        <ul className='globalNav'>
          <li className='globalNavList'>
            <Link href='./project'>
              <a className='globalNavLink'>PROJECT</a>
            </Link>
          </li>
          <li className='globalNavList'>
            <Link href='./skills'>
              <a className='globalNavLink'>SKILLS</a>
            </Link>
          </li>
          <li className='globalNavList'>
            <Link href='./about'>
              <a className='globalNavLink'>ABOUT</a>
            </Link>
          </li>
          <li className='globalNavList'>
            <Link href='./contact'>
              <a className='globalNavLink'>CONTACT</a>
            </Link>
          </li>
        </ul>
      </Layout>
    </div>
  );
}
