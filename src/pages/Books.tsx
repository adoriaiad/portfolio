import { Grid, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useBook } from '../data/useBook';

function Books() {
  const { t } = useTranslation();
  const { booksCover, books } = useBook();

  function openExternalUrl(url: string | undefined) {
    url && window.open(url, '_blank');
  }

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
        {t('BOOK.BOOKS')}
      </Typography>
      <Grid container spacing={2} className="BookCard">
        {books.map((item, index) => (
          <div className={'BookCard'}>
            <div
              key={index}
              className="ComicCard"
              onClick={() => openExternalUrl(item.externalUrl)}
            >
              <img
                style={{
                  width: '150px',
                }}
                src={item.src}
                key={index}
                alt=""
              />
            </div>
            <div>
              <Typography
                variant={'body1'}
                color={'text.secondary'}
                sx={{ flexShrink: 0 }}
                style={{ fontFamily: 'Yomogi', fontWeight: 'bold' }}
                key={index}
              >
                {item.description}
              </Typography>
              <Typography
                variant={'body2'}
                color={'text.secondary'}
                sx={{ flexShrink: 0 }}
                style={{ fontFamily: 'Yomogi' }}
                key={index}
              >
                {item.edition}
              </Typography>
            </div>
          </div>
        ))}
      </Grid>

      <Typography
        variant={'h5'}
        color={'text.secondary'}
        sx={{ flexShrink: 0 }}
        style={{ fontFamily: 'Yomogi' }}
      >
        {t('BOOK.COVER')}
      </Typography>
      <Grid container spacing={2} className="BookCard">
        {booksCover.map((item, index) => (
          <div className={'BookCard'}>
            <div
              key={index}
              className="ComicCard"
              onClick={() => openExternalUrl(item.externalUrl)}
            >
              <img
                style={{
                  width: '150px',
                }}
                src={item.src}
                key={index}
                alt=""
              />
            </div>
            <div>
              <Typography
                variant={'body1'}
                color={'text.secondary'}
                sx={{ flexShrink: 0 }}
                style={{ fontFamily: 'Yomogi', fontWeight: 'bold' }}
                key={index}
              >
                {item.description}
              </Typography>
              <Typography
                variant={'body2'}
                color={'text.secondary'}
                sx={{ flexShrink: 0 }}
                style={{ fontFamily: 'Yomogi' }}
                key={index}
              >
                {item.edition}
              </Typography>
            </div>
          </div>
        ))}
      </Grid>
    </Grid>
  );
}

export default Books;
