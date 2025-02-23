import { RouteObject } from 'react-router-dom';
import { Home, SignIn, SignUp } from '../pages';
import { Root } from '../layouts';
import AuthLayout from '@/layouts/AuthLayout';

export const authRoutes: RouteObject[] = [
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        index: true,
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

export const routes: RouteObject[] = [
  {
    path: '/',
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
    ],
  },
  ...authRoutes,
];
