import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import me from './../assets/comics/me.png';
import c01 from './../assets/comics/thumbs/20200829.jpg';
import c02 from './../assets/comics/thumbs/20200830.jpg';
import c03 from './../assets/comics/thumbs/20200903.jpg';
import c04 from './../assets/comics/thumbs/20200918.jpg';
import c05 from './../assets/comics/thumbs/20200928.jpg';
import c06 from './../assets/comics/thumbs/20201120.jpg';
import c07 from './../assets/comics/thumbs/20201220.jpg';
import c08 from './../assets/comics/thumbs/20210126.jpg';
import c09 from './../assets/comics/thumbs/20210130.jpg';
import c10 from './../assets/comics/thumbs/20210308.jpg';
import meditazione from './../assets/comics/meditazione.jpg';
import kaboom from './../assets/comics/kaboom.jpg';
import ninja from './../assets/comics/ninja.jpg';
import passeggiata1 from './../assets/comics/passeggiata1.jpg';
import passeggiata2 from './../assets/comics/passeggiata2.jpg';
import pipistrelli from './../assets/comics/pipistrelli.jpg';
import questaelavia from './../assets/comics/questaelavia.jpg';
import raimbow from './../assets/comics/raimbow.jpg';
import sveglia from './../assets/comics/sveglia.jpg';
import torta from './../assets/comics/torta.jpg';
import Grid from '@mui/material/Grid';
import { ComicImageMenuType } from '../models/type';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import isEmpty from 'lodash.isempty';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Button } from '@mui/material';

function Comics() {
  const comicThumbs: ComicImageMenuType[] = [
    {
      src: c01,
      title: 'Pace e tranquillità',
      path: meditazione,
    },
    {
      src: c02,
      title: 'Ma come fanno i pipistrelli?',
      path: pipistrelli,
    },
    {
      src: c03,
      title: 'Passeggiate rilassanti 1',
      path: passeggiata1,
    },
    {
      src: c04,
      title: 'Passeggiate rilasanti 2',
      path: passeggiata2,
    },
    {
      src: c05,
      title: 'La torta',
      path: torta,
    },
    {
      src: c06,
      title: 'Mi sono persa',
      path: questaelavia,
    },
    {
      src: c07,
      title: 'Bimbo Ninja',
      path: ninja,
    },
    {
      src: c08,
      title: 'Kaboom!',
      path: kaboom,
    },
    {
      src: c09,
      title: 'La mattina mi dovete parlare il pomeriggio',
      path: sveglia,
    },
    {
      src: c10,
      title: 'Mi tingo i capelli',
      path: raimbow,
    },
  ];

  const [selected, setSelected] = useState<string>();

  return (
    <>
      <Typography
        variant={'h5'}
        color={'text.secondary'}
        sx={{ flexShrink: 0 }}
        style={{ fontFamily: 'Yomogi' }}
      >
        Piccole storie a fumetti
      </Typography>
      {isEmpty(selected) && (
        <>
          <img src={me} alt="" style={{ maxWidth: '600px' }} />
          <Grid
            container
            spacing={2}
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              marginTop: '50px',
              marginBottom: '10px',
            }}
          >
            {comicThumbs.map((item, index) => (
              <Card
                sx={{ maxWidth: 120 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  margin: '10px',
                  padding: '2px',
                }}
                key={index}
              >
                <CardActionArea onClick={() => setSelected(item.path)}>
                  <CardMedia
                    component="img"
                    image={item.src}
                    alt={''}
                    style={{ width: '100px', height: '80px' }}
                  />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{ fontFamily: 'Yomogi' }}
                  >
                    {item.title}
                  </Typography>
                </CardActionArea>
              </Card>
            ))}
          </Grid>
        </>
      )}

      {!isEmpty(selected) && 
      <>
        <Grid
            container
            spacing={2}
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: '50px',
              marginBottom: '10px',
              alignItems: 'center'
            }}
          >
            <img src={selected} alt="" style={{ maxWidth: '800px' }} />
            <Button variant="outlined" startIcon={<ArrowBackIosIcon />} onClick={() => setSelected(undefined)}>Back</Button>
          </Grid>
      </>}
    </>
  );
}

export default Comics;
