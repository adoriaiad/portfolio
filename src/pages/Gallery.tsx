import { Button, Divider, Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import isEmpty from 'lodash.isempty';
import { useState } from 'react';
import ImageView from '../components/ImageView';
import bimba from './../assets/img/bimba.jpg';
import dino from './../assets/img/dinorider.jpg';
import gatto from './../assets/img/GattoStrega.jpg';
import neve from './../assets/img/PupazzodiNeve.jpg';
import palloncini from './../assets/img/palloncini.jpg';
import drago from './../assets/img/drago.jpg';
import bimbineve from './../assets/img/bimbineve.jpg';

type GalleryItem = {
  src: string;
  alt: string;
};
function Gallery() {
  const [selected, setSelected] = useState<GalleryItem>();

  const gallery1: GalleryItem[] = [
    {
      src: gatto,
      alt: 'gatto',
    },
    {
      src: neve,
      alt: 'neve',
    },
    {
      src: bimba,
      alt: 'bimba',
    },
  ];
  const gallery2: GalleryItem[] = [
    {
      src: dino,
      alt: 'dino',
    },
    {
      src: palloncini,
      alt: 'palloncini',
    },
    {
      src: drago,
      alt: 'drago',
    },
    {
      src: bimbineve,
      alt: 'bimbineve',
    },
  ];

  function showPicture(item: GalleryItem) {
    setSelected(item);
  }

  function closePicture() {
    setSelected(undefined);
  }

  return (
    <>
      <Grid
        container
        spacing={2}
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          marginTop: '10px',
          marginBottom: '10px',
        }}
      >
        <Typography variant={'h5'} color={'text.secondary'} sx={{ flexShrink: 0 }}>Il bianco e nero</Typography>
        <Typography
          variant={'body1'}
          color={'text.secondary'}
          style={{ margin: '10px' }}
        >
          Tecnica mista grafite, carboncino e ritocco in
          digitale (esperimenti)<br />
          Illustrazionipensateperdecorare oggetti (tazze, copertine di quaderni o
          agende) ma ancheper sperimentare col bianco e nero.
        </Typography>
        {isEmpty(selected) &&
          gallery1.map((item, index) => (
            <Paper elevation={4} square className="Paper" key={index}>
              <Button
                onClick={() => {
                  showPicture(item);
                }}
                key={index}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  width={'90%'}
                  style={{ margin: '20px' }}
                  key={index}
                />
              </Button>
            </Paper>
          ))}
        {selected && (
          <ImageView src={selected.src} closeHandler={closePicture} />
        )}
      </Grid>
      <Divider />
      <Grid
        container
        spacing={2}
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          marginTop: '10px',
        }}
      >
        <Typography variant={'h5'} color={'text.secondary'} sx={{ flexShrink: 0 }}>Il colore: illustrazioni digitali</Typography>
        {isEmpty(selected) &&
          gallery2.map((item, index) => (
            <Paper elevation={4} square className="Paper" key={index}>
              <Button
                onClick={() => {
                  showPicture(item);
                }}
                key={index}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  width={'90%'}
                  style={{ margin: '20px' }}
                  key={index}
                />
              </Button>
            </Paper>
          ))}
      </Grid>
    </>
  );
}

export default Gallery;
