import { Grid, Typography } from '@mui/material';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import illImg from '../assets/img/miniature/illustrazioni.png';
import progImg from '../assets/img/miniature/progetti.png';
import sketchImg from '../assets/img/miniature/studi.png';
import chartImg from '../assets/img/miniature/studio-personaggi.png';
import { usePortfolio } from '../data/usePortfolio';
import { ImageGalleryType } from '../models/type';
import PortfolioContent from '../components/PortfolioContent';

const enum PortfolioContentEnum {
  projects = 'projects',
  characters = 'characters',
  sketches = 'sketches',
  illustrations = 'illustrations',
}

function Portfolio() {
  const { t } = useTranslation();
  const navigation = useNavigate();
  const { projects, characters, sketches } = usePortfolio();
  const [selected, setSelected] = React.useState<ImageGalleryType>();

  const seletecPortfolioContent: {
    [key: string]: (event: React.SyntheticEvent) => void;
  } = {
    projects: () => {
      setSelected(projects);
    },
    characters: () => {
      setSelected(characters);
    },
    sketches: () => {
      setSelected(sketches);
    },
    illustrations: event => {
      handleChange(event, '/illustrations');
    },
  };

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    navigation(newValue);
  };

  function onClicEventHandler() {
    setSelected(undefined);
  }

  const griglia = (
    <Grid
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <div
        className="BookItem"
        onClick={seletecPortfolioContent[PortfolioContentEnum.projects]}
      >
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
      <div
        className="BookItem"
        onClick={seletecPortfolioContent[PortfolioContentEnum.characters]}
      >
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
      <div
        className="BookItem"
        onClick={seletecPortfolioContent[PortfolioContentEnum.sketches]}
      >
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
      <div
        className="BookItem"
        onClick={seletecPortfolioContent[PortfolioContentEnum.illustrations]}
      >
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
  );

  return (
    <Grid
      container
      spacing={2}
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        marginTop: '30px',
      }}
    >
      {!selected && griglia}
      {selected && (
        <PortfolioContent
          item={selected}
          onClickEventHandler={onClicEventHandler}
        />
      )}
    </Grid>
  );
}

export default Portfolio;
