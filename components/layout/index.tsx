import type { FunctionComponent } from 'react';
import Navbar from './navbar';
import Footer from './footer';

const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
