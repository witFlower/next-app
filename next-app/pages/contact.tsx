import type { NextPage } from 'next';

const Contact: NextPage = ({ children }) => {
  return (
    <div className='container'>
      <div className='inner'>
        <p>THIS IS CONTACT PAGE</p>
      </div>
      {children}
    </div>
  );
};

export default Contact;
