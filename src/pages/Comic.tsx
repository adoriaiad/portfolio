import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import me from './../assets/comics/me.png';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import isEmpty from 'lodash.isempty';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useComic } from '../data/useComic';
import { ComicImageMenuType } from '../models/type';

function Comics() {
  const { t } = useTranslation();
  const { comicThumbs } = useComic();
  const [selected, setSelected] = useState<ComicImageMenuType>();

  return (
    <Grid
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '40px'
      }}
    >
      {isEmpty(selected) && (
        <>
          <Typography
            variant={'h5'}
            color={'text.secondary'}
            sx={{ flexShrink: 0 }}
            style={{ fontFamily: 'Yomogi' }}
          >
            {t('COMICS.TITLE')}
          </Typography>
          <img src={me} alt="" style={{ maxWidth: '600px' }} />
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
            {comicThumbs.map((item, index) => (
              <Card
                sx={{ maxWidth: 120 }}
                className='ComicCard'
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  margin: '10px',
                  padding: '2px',
                }}
                key={index}
              >
                <CardActionArea onClick={() => setSelected(item)}>
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

      {!isEmpty(selected) && (
        <>
          <Typography
            variant={'h5'}
            color={'text.secondary'}
            sx={{ flexShrink: 0 }}
            style={{ fontFamily: 'Yomogi' }}
          >
            {selected.description}
          </Typography>
          <Grid
            container
            spacing={2}
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: '20px',
              marginBottom: '10px',
              alignItems: 'center',
            }}
          >{selected.paths.map((img) => (
            <img src={img} alt="" style={{ maxWidth: '800px' }} />
          ))}
            
            <Button
              variant="outlined"
              startIcon={<ArrowBackIosIcon />}
              onClick={() => setSelected(undefined)}
            >
              Back
            </Button>
          </Grid>
        </>
      )}
    </Grid>
  );
}

export default Comics;
