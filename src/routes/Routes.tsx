import { RouteObject, useRoutes } from 'react-router';
import { Outlet } from 'react-router-dom';
import Bio from '../pages/Bio';
import DataProtection from '../pages/DataProtection';
import Gallery from '../pages/Gallery';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';

const Routes = () => {
    return useRoutes([routes]);
  };

  const routes: RouteObject = {
    element: <Outlet />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/bio',
        element: <Bio />,
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
      {
        path: '/gallery',
        element: <Gallery />,
      },
      {
        path: '/data',
        element: <DataProtection />,
      },
      {
        path: '/*',
        element: <h2>⚠ OOPS... Page not found! ⚠</h2>,
      },
    ],
  };
  
  export default Routes;
