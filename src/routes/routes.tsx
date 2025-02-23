import { RouteObject } from 'react-router-dom';
import { Home, SignIn, SignUp } from '../pages';
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
        path: 'sign-in',
        element: <SignIn />,
      },
      {
        path: 'sign-up',
        element: <SignUp />,
      },
    ],
  },
]; 