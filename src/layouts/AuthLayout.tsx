import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="min-h-screen px-4 md:px-10 py-4">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
