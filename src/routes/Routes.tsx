import Typography from '@mui/material/Typography';
import { RouteObject, useRoutes } from 'react-router-dom';
import oops from '../../src/assets/comics/oops.png';
import MainLayout from '../layouts/main/MainLayout';
import Bio from '../pages/Bio';
import Books from '../pages/Books';
import Comics from '../pages/Comic';
import Contact from '../pages/Contact';
import DataProtection from '../pages/DataProtection';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import Progetti from '../pages/Progetti';
import Personaggi from '../pages/Personaggi';
import Studi from '../pages/Studi';
import Illustrazioni from '../pages/Illustrazioni';

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
      path: '/projects',
      element: <Progetti />,
    },
    {
      path: '/chars',
      element: <Personaggi />,
    },
    {
      path: '/sketch',
      element: <Studi />,
    },
    {
      path: '/illustrations',
      element: <Illustrazioni />,
    },
    {
      path: '/books',
      element: <Books />,
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
