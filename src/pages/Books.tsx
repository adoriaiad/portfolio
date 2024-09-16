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
        //flexWrap: 'nowrap',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '40px',
      }}
    >
      <Typography
        variant={'h4'}
        color={'text.secondary'}
        sx={{ flexShrink: 0 }}
        style={{ fontFamily: 'Yomogi' }}
      >
        {t('BOOK.BOOKS')}
      </Typography>
      <Grid
        container
        spacing={2}
        className="BookCard"
        style={{ alignItems: 'flex-start' }}
      >
        {books.map((item, index) => (
          <div className={'BookCard'} key={index}>
            <div
              key={`img-${index}`}
              className="ComicCard"
              onClick={() => openExternalUrl(item.externalUrl)}
            >
              <img
                style={{
                  width: '250px',
                  padding: '4px'
                }}
                src={item.src}
                key={index}
                alt=""
              />
            </div>
            <div key={`txt-${index}`} style={{maxWidth: '250px',}}>
              <Typography
                variant={'body2'}
                color={'text.secondary'}
                sx={{ flexShrink: 0 }}
                style={{ fontFamily: 'Yomogi', fontWeight: 'bold' }}
                key={`desc-${index}`}
              >
                {item.description}
              </Typography>
              <Typography
                variant={'body2'}
                color={'text.secondary'}
                sx={{ flexShrink: 0 }}
                style={{ fontFamily: 'Yomogi' }}
                key={`auth-${index}`}
              >
                {item.author
                  ? `${t('BOOK.AUTHOR')} ${item.author}`
                  : `${t('BOOK.AUTH_ILL')} ${item.illustrator}`}
              </Typography>
              {item.author && (
                <Typography
                  variant={'body2'}
                  color={'text.secondary'}
                  sx={{ flexShrink: 0 }}
                  style={{ fontFamily: 'Yomogi' }}
                  key={`ill-${index}`}
                >
                  {`${t('BOOK.ILLUSTRATOR')} ${item.illustrator}`}
                </Typography>
              )}
              <Typography
                variant={'body2'}
                color={'text.secondary'}
                sx={{ flexShrink: 0 }}
                style={{ fontFamily: 'Yomogi' }}
                key={`ed-${index}`}
              >
                {item.edition}
              </Typography>
            </div>
          </div>
        ))}
      </Grid>

      <Typography
        variant={'h4'}
        color={'text.secondary'}
        sx={{ flexShrink: 0 }}
        style={{ fontFamily: 'Yomogi' }}
      >
        {t('BOOK.COVER')}
      </Typography>
      <Grid
        container
        spacing={2}
        className="BookCard"
        style={{ alignItems: 'flex-start' }}
      >
        {booksCover.map((item, index) => (
          <div className={'BookCard'} key={`cover-${index}`}>
            <div
              key={`img-${index}`}
              className="ComicCard"
              onClick={() => openExternalUrl(item.externalUrl)}
            >
              <img
                style={{
                  width: '250px',
                  marginRight: '10px',
                }}
                src={item.src}
                key={index}
                alt=""
              />
            </div>
            <div key={`txt-${index}`} style={{maxWidth: '250px',}}>
              <Typography
                variant={'body1'}
                color={'text.secondary'}
                sx={{ flexShrink: 0 }}
                style={{ fontFamily: 'Yomogi', fontWeight: 'bold' }}
                key={`txt-${index}`}
              >
                {item.description}
              </Typography>
              <Typography
                variant={'body2'}
                color={'text.secondary'}
                sx={{ flexShrink: 0 }}
                style={{ fontFamily: 'Yomogi' }}
                key={`auth-${index}`}
              >
                {`${t('BOOK.AUTHOR')} ${item.author}`}
              </Typography>
              
              <Typography
                variant={'body2'}
                color={'text.secondary'}
                sx={{ flexShrink: 0 }}
                style={{ fontFamily: 'Yomogi' }}
                key={`ed-${index}`}
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
