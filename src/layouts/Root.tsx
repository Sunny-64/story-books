import { Outlet } from 'react-router-dom';
import { Navbar } from '../components';

const Root = () => {
  return (
    <div className="min-h-screen px-4 md:px-10 py-4">
      {/* <Navbar /> */}
      <Outlet />
    </div>
  );
};

export default Root;
