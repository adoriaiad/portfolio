import React from 'react';
import { usePortfolio } from '../data/usePortfolio';
import { Button, Grid, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';

function Personaggi() {
  const { characters } = usePortfolio();
  const navigation = useNavigate();
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
      <div style={{ marginBottom: '10px', width: '1200px' }}>
        <Typography
          variant={'h5'}
          color={'text.secondary'}
          sx={{ flexShrink: 0 }}
          style={{ fontFamily: 'Yomogi' }}
          key={`typ-${characters.id}`}
        >
          {characters.title}
        </Typography>
        <Typography
          variant={'subtitle2'}
          color={'text.secondary'}
          style={{ fontFamily: 'Yomogi' }}
          key={`subtitle2${characters.id}`}
        >
          {characters.subtitle}
        </Typography>
        <Grid
          container
          spacing={2}
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'flex-end',
          }}
          key={`grid-${characters.id}`}
        >
          {characters.images.map((img, index) => (
            <div key={`${characters.id}-${index}`} style={{ margin: '0px' }}>
              {img.description && (
                <Typography
                  variant={'body1'}
                  color={'text.secondary'}
                  style={{
                    margin: '60px',
                    maxWidth: '220px',
                    fontFamily: 'Yomogi',
                  }}
                  key={`typ-${characters.id}-${index}`}
                >
                  {img.description}
                </Typography>
              )}
              <img
                src={img.src}
                alt={img.alt}
                width={'90%'}
                style={{ margin: '20px', maxWidth: '450px' }}
                key={`${characters.id}-${index}`}
              />
            </div>
          ))}
        </Grid>
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

export default Personaggi;
