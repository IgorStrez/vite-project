import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Stempel from './Stempel';

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Stempel>
          <Outlet />
        </Stempel>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
