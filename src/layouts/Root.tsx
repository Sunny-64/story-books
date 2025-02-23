import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from '../components';

const Root = () => {
  return (
    <div className="min-h-screen px-4 md:px-10 py-4">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
