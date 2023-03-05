import { Divider, Grid, Typography } from '@mui/material';
import isEmpty from 'lodash.isempty';
import { useState } from 'react';
import ActionAreaCard from '../components/ActionAreaCard';
import ImageView from '../components/ImageView';
import { GalleryItem } from '../models/type';
import bimba from './../assets/img/bimba.jpg';
import bimbineve from './../assets/img/bimbineve.jpg';
import dino from './../assets/img/dinorider.jpg';
import drago from './../assets/img/drago.jpg';
import gatto from './../assets/img/GattoStrega.jpg';
import palloncini from './../assets/img/palloncini.jpg';
import neve from './../assets/img/PupazzodiNeve.jpg';
import volpe from './../assets/img/volpeviolinista.jpg';
import settembre from './../assets/img/settembre.jpg';
import b01 from './../assets/img/Bozze01.jpg';
import b02 from './../assets/img/Bozze02.jpg';

function Gallery() {
  const [selected, setSelected] = useState<GalleryItem>();

  const gallery1: GalleryItem[] = [
    {
      src: gatto,
      alt: 'gatto',
      title: 'Character design',
      description: 'Il gatto stregone',
      technique:
        'Tecnica mista grafite, carboncino e ritocco in digitale (esperimenti)',
    },
    {
      src: neve,
      alt: 'neve',
      title: 'Character design',
      description:
        'Illustrazione pensata per decorare oggetti (tazze, copertine di quaderni o agende) ma anche per sperimentare col bianco e nero.',
      technique: 'grafite e carboncino su carta',
    },
    {
      src: bimba,
      alt: 'bimba',
      title: 'Illustrazione',
      description: 'Studio di un personaggio',
      technique: 'disegno e colorazione in digitale',
    },
  ];
  const gallery2: GalleryItem[] = [
    {
      src: dino,
      alt: 'dino',
      title: 'Character design',
      description:
        'Interpretazione del tema "racer", non proprio competitivo ma piuttosto calmo e rilassato!',
      technique: 'pittura digitale',
    },
    {
      src: palloncini,
      alt: 'palloncini',
      title: 'Illustrazione',
      description: 'Dove vanno a finire i palloncini?',
      technique: 'mista, grafite su carta e colorazione digitale',
    },
    {
      src: drago,
      alt: 'drago',
      title: 'Illustrazione',
      technique: 'pastelli e grafite su carta da disegno marrone',
    },
    {
      src: bimbineve,
      alt: 'bimbineve',
      title: 'Illustrazione',
      description: 'Nevica!',
      technique: 'mista, grafite su carta e colorazione in digitale',
    },
  ];

  const gallery3: GalleryItem[] = [
    {
      src: volpe,
      alt: 'volpe',
      title: 'Mese di gennaio',
      technique: 'mista, disegno a grafite su carta e colorazione digitale',
    },
    {
      src: settembre,
      alt: 'settembre',
      title: 'Mese di settembre',
      technique: 'mista, disegno a grafite su carta e colorazione digitale',
    },
    {
      src: b01,
      alt: 'bozze',
      title: 'Bozze mesi gennaio - giugno',
      technique: 'matita su carta',
    },
    {
      src: b02,
      alt: 'bozze',
      title: 'Bozze dei mesi luglio - dicembre',
      technique: 'matita su carta',
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
      {selected && <ImageView src={selected.src} closeHandler={closePicture} />}
      <Typography
        variant={'h5'}
        color={'text.secondary'}
        sx={{ flexShrink: 0 }}
      >
        Il bianco e nero
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
        style={{ marginTop: '20px' }}
      >
        Il colore: illustrazioni digitali
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
          style={{ marginTop: '20px' }}
        >
          Concorso Illustratore dell'anno della Città del sole anno 2019: progetto incluso alla selezione finale.
        </Typography>
        <Typography
          variant={'h6'}
          color={'text.secondary'}
          sx={{ flexShrink: 0 }}
        >
          L'idea: 12 mesi in cui i protagonisti sono gli animali del bosco. In
          ogni mese entra in scena un animale che popola via via l'orchestra. Il
          paesaggio di sfondo e i colori variano seguendo le stagioni.
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
    </>
  );
}

export default Gallery;
