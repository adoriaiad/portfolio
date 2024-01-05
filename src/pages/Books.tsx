import { Grid, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useBook } from '../data/useBook';

function Books() {
  const { t } = useTranslation();
  const { books } = useBook();

  return (
    <Grid
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '40px',
      }}
    >
      <Typography
        variant={'h5'}
        color={'text.secondary'}
        sx={{ flexShrink: 0 }}
        style={{ fontFamily: 'Yomogi' }}
      >
        {t('BOOK.COVER')}
      </Typography>
      <Grid
        container
        spacing={2}
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          marginTop: '20px',
          marginBottom: '10px',
        }}
      >
        {books.map((item, index) => (
          <div key={index} className="ComicCard">
            <img
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                margin: '0px',
                padding: '0px',
                width: '200px',
              }}
              src={item.src}
              key={index}
              alt=""
            />
          </div>
        ))}
      </Grid>
    </Grid>
  );
}

export default Books;
