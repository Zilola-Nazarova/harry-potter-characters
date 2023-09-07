import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = () => (
  <div className="wrapper">
    <Header />
    <Outlet />
    <Footer />
  </div>
);

export default Layout;
