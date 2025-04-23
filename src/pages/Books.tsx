import { Grid, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useBook } from '../data/useBook';
import { useNavigate } from 'react-router-dom';

function Books() {
  const { t } = useTranslation();
  const { booksCover, books } = useBook();
  const navigation = useNavigate();

  function openInternalUrl(path: string | undefined){
    if(path) {
      navigation(path);
    }
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
              onClick={() => openInternalUrl(item.externalUrl)}
            >
              <img
                style={{
                  height: '200px',
                  padding: '4px'
                }}
                src={item.src}
                key={index}
                alt=""
              />
            </div>
            <div key={`txt-${index}`} style={{maxWidth: '200px',}}>
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
              onClick={() => openInternalUrl(item.externalUrl)}
            >
              <img
                style={{
                  height: '200px',
                  marginRight: '10px',
                }}
                src={item.src}
                key={index}
                alt=""
              />
            </div>
            <div key={`txt-${index}`} style={{maxWidth: '150px',}}>
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
