import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import home from './../assets/img/casa.webp';
import { useTranslation } from 'react-i18next';
import { useBook } from '../data/useBook';
import { useNavigate } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';

function Home() {
  const { t } = useTranslation();
  const { books } = useBook();
  const navigation = useNavigate();
  const matches = useMediaQuery('(max-width:600px)');
  const flexDirection = matches? 'column' : 'row';

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
      {!matches && <img src={home} alt={''} className="Home" /> }
      <Typography
        variant={'h4'}
        color={'text.secondary'}
        sx={{ flexShrink: 0 }}
        style={{ fontFamily: 'Yomogi', fontWeight: 'regular' }}
      >
      </Typography>
      <Grid
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: flexDirection,
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
