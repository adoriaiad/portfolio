import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import home from './../assets/img/casa.png';
import { useTranslation } from 'react-i18next';
import { useBook } from '../data/useBook';
import { useNavigate } from 'react-router-dom';

function Home() {
  const { t } = useTranslation();
  const { books } = useBook();
  const navigation = useNavigate();
  return (
    <Grid
      container
      spacing={1}
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <img src={home} alt={''} className="Home" />
      <Typography
        variant={'h4'}
        color={'text.secondary'}
        sx={{ flexShrink: 0 }}
        style={{ fontFamily: 'Yomogi', fontWeight: 'regular' }}
      >
        {t('BOOK.BOOKS')}
      </Typography>
      <Grid
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        {books.map((item, index) => (
          <div className={'BookCard'} key={index}>
            <div key={`img-${index}`} className="ComicCard">
              <img
                style={{
                  height: '200px',
                  padding: '4px',
                }}
                src={item.src}
                key={index}
                alt=""
              />
            </div>
          </div>
        ))}
      </Grid>
      <Grid>
        <Button variant="outlined" onClick={() => navigation('/books')}>
          {t('MENU.DISCOVER')}
        </Button>
      </Grid>
    </Grid>
  );
}

export default Home;
