import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import progImg from '../assets/img/miniature/progetti.png';
import chartImg from '../assets/img/miniature/studio-personaggi.png';
import sketchImg from '../assets/img/miniature/studi.png';
import illImg from '../assets/img/miniature/illustrazioni.png';
import { useNavigate } from 'react-router-dom';

function Portfolio() {
 
  const { t } = useTranslation();
  const navigation = useNavigate();

  function goToPage(path: string) {
    navigation(path);
  }

  return (
    <Grid
      container
      spacing={2}
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        marginTop: '50px',
      }}
    >
      <Grid
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: '40px',
        }}
      >
        <Grid
          container
          spacing={2}
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            marginTop: '20px',
            marginBottom: '10px',
          }}
        >
          <div className="BookItem" onClick={() => goToPage('/projects')}>
            <Typography
              variant={'h6'}
              color={'text.secondary'}
              sx={{ flexShrink: 0 }}
              style={{ fontFamily: 'Yomogi' }}
            >
              {t('PORTFOLIO.PROJECT1.TITLE')}
            </Typography>
            <img
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                margin: '10px',
                padding: '2px',
                width: '200px',
              }}
              src={progImg}
              alt=""
            />
          </div>
          <div className="BookItem" onClick={() => goToPage('/chars')}>
          <Typography
              variant={'h6'}
              color={'text.secondary'}
              sx={{ flexShrink: 0 }}
              style={{ fontFamily: 'Yomogi' }}
            >
              {t('PORTFOLIO.PROJECT2.TITLE')}
            </Typography>
            <img
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                margin: '10px',
                padding: '2px',
                width: '200px',
              }}
              src={chartImg}
              alt=""
            />
          </div>
          <div className="BookItem" onClick={() => goToPage('/sketch')}>
          <Typography
              variant={'h6'}
              color={'text.secondary'}
              sx={{ flexShrink: 0 }}
              style={{ fontFamily: 'Yomogi' }}
            >
              {t('PORTFOLIO.PROJECT3.TITLE')}
            </Typography>
            <img
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                margin: '10px',
                padding: '2px',
                width: '200px',
              }}
              src={sketchImg}
              alt=""
            />
          </div>
          <div className="BookItem" onClick={() => goToPage('/illustrations')}>
          <Typography
              variant={'h6'}
              color={'text.secondary'}
              sx={{ flexShrink: 0 }}
              style={{ fontFamily: 'Yomogi' }}
            >
              {t('MENU.GALLERY')}
            </Typography>
            <img
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                margin: '10px',
                padding: '2px',
                width: '200px',
              }}
              src={illImg}
              alt=""
            />
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Portfolio;
