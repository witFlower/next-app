import type { NextPage } from 'next';
const Layout: NextPage = ({ children }) => {
  return <div className='container'>{children}</div>;
};

export default Layout;
