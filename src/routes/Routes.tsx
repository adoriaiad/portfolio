import { RouteObject, useRoutes } from 'react-router-dom';
import MainLayout from '../layouts/main/MainLayout';
import Bio from '../pages/Bio';
import Contact from '../pages/Contact';
import DataProtection from '../pages/DataProtection';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import Comics from '../pages/Comic';
import Typography from '@mui/material/Typography';
import joy from '../../src/assets/comics/gioia.png';
import oops from '../../src/assets/comics/oops.png';

const Routes = () => {
  return useRoutes([routes]);
};

const routes: RouteObject = {
  element: <MainLayout />,
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
      path: '/books',
      element: (
        <Typography
          variant="h3"
          color={'text.secondary'}
          style={{
            fontFamily: 'Yomogi',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <img src={joy} alt="" style={{ maxWidth: '400px' }} />
          COMING SOON...
        </Typography>
      ),
    },
    {
      path: '/data',
      element: <DataProtection />,
    },
    {
      path: '/contact',
      element: <Contact />,
    },
    {
      path: '/comics',
      element: <Comics />,
    },
    {
      path: '/*',
      element:(
        <Typography
          variant="h3"
          color={'text.secondary'}
          style={{
            fontFamily: 'Yomogi',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
           <img src={oops} alt="" style={{ maxWidth: '400px' }} />
          ⚠ OOPS... Page not found! ⚠
        </Typography>
      ) 
    },
  ],
};

export default Routes;
