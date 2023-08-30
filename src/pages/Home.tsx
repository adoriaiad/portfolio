import React from 'react';
import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import portfolio from './../assets/img/home/home_portfolio.png' ;
import books from './../assets/img/home/home_book.png';
import comics from './../assets/img/home/home_comic.png';
import { useNavigate } from 'react-router-dom';
import { useMenuNavigation } from '../contexts/MenuNavigation';

function Home() {
  const { t } = useTranslation();
  const navigation = useNavigate();
  const menuNavigation = useMenuNavigation();

  const menuCards = [
    {
      image: portfolio,
      path: '/portfolio',
      title: t('MENU.PORTFOLIO'),
    },
    {
      image: books,
      path: '/books',
      title: t('MENU.BOOKS'),
    },
    {
      image: comics,
      path: '/comics',
      title: t('MENU.COMICS'),
    },
  ];

  function onClickEventHandler(page: string){
    menuNavigation.pageSelection(page);
    navigation(page);
  }

  return (
    <Grid
        container
        spacing={2}
        style={{ display: 'flex', justifyContent: 'center' }}
      >
    <div className="Home">
      <Grid
        container
        spacing={2}
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          marginTop: '50px',
          marginBottom: '10px',
        }}
      >
        {menuCards.map((item, index) => (
          <Card
            sx={{ maxWidth: 240 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              margin: '10px',
              padding: '10px',
              backgroundColor: 'rgba(22, 110, 148,0.5)',
            }}
            key={index}
          >
            <CardActionArea onClick={() => onClickEventHandler(item.path)}>
              <CardMedia
                component="img"
                image={item.image}
                alt={''}
                style={{ width: '190px', height: '190px' }}
                
              />
              <Typography
                variant="h6"
                color="text.secondary"
                style={{ fontFamily: 'Yomogi' }}
              >
                {item.title}
              </Typography>
            </CardActionArea>
          </Card>
        ))}
      </Grid>
    </div>
      </Grid>
  );
}

export default Home;
