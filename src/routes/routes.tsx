import { RouteObject } from 'react-router-dom';
import { Home, Login } from '../pages';
import { Root } from '../layouts';

export const routes: RouteObject[] = [
  {
    path: '',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about',
        element: <div>About</div>,
      },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
]; 