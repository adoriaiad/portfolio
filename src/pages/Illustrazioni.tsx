import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GalleryItem } from '../models/type';
import { useGallery } from '../data/useGallery';
import ImageView from '../components/ImageView';
import { Button, Divider, Grid, Typography } from '@mui/material';
import isEmpty from 'lodash.isempty';
import ActionAreaCard from '../components/ActionAreaCard';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';

function Illustrazioni() {
  const { t } = useTranslation();
  const navigation = useNavigate();
  const [selected, setSelected] = useState<GalleryItem>();
  const { gallery1, gallery2, gallery3 } = useGallery();

  function showPicture(item: GalleryItem) {
    setSelected(item);
  }

  function closePicture() {
    setSelected(undefined);
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
      <div style={{ marginBottom: '10px', width: '1200px' }} key={`div-04`}>
        {selected && (
          <ImageView src={selected.src} closeHandler={closePicture} />
        )}
        <Typography
          variant={'h5'}
          color={'text.secondary'}
          sx={{ flexShrink: 0 }}
          style={{ fontFamily: 'Yomogi' }}
        >
          {t('GALLERY.TITLE1')}
        </Typography>
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
          {isEmpty(selected) &&
            gallery1.map((item, index) => (
              <ActionAreaCard
                item={item}
                clickHandler={showPicture}
                key={`g1-${index}`}
              />
            ))}
        </Grid>
        <Divider />
        <Typography
          variant={'h5'}
          color={'text.secondary'}
          sx={{ flexShrink: 0 }}
          style={{ marginTop: '20px', fontFamily: 'Yomogi' }}
        >
          {t('GALLERY.TITLE2')}
        </Typography>
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
          {isEmpty(selected) &&
            gallery2.map((item, index) => (
              <ActionAreaCard
                item={item}
                clickHandler={showPicture}
                key={`g2-${index}`}
              />
            ))}
        </Grid>
        <Divider />
        <Typography
          variant={'h6'}
          color={'text.secondary'}
          sx={{ flexShrink: 0 }}
          style={{ marginTop: '20px', fontFamily: 'Yomogi' }}
        >
          {t('GALLERY.TITLE3')}
        </Typography>
        <Typography
          variant={'h6'}
          color={'text.secondary'}
          sx={{ flexShrink: 0 }}
          style={{ fontFamily: 'Yomogi' }}
        >
          {t('GALLERY.SUBTITLE3')}
        </Typography>
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
          {isEmpty(selected) &&
            gallery3.map((item, index) => (
              <ActionAreaCard
                item={item}
                clickHandler={showPicture}
                key={`g3-${index}`}
              />
            ))}
        </Grid>
        <Grid
          container
          spacing={2}
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
          }}
          key={`grid-back4`}
        ></Grid>
        <Button
          variant="outlined"
          startIcon={<ArrowBackIosIcon />}
          onClick={() => navigation('/portfolio')}
        >
          Back
        </Button>
      </div>
    </Grid>
  );
}

export default Illustrazioni;
