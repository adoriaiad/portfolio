import { Grid, Paper } from '@mui/material';
import React from 'react';
import { ImageGalleryType } from '../models/type';

type PortfolioContentProps = {
  item_sx: ImageGalleryType;
  item_dx: ImageGalleryType;
};

function PortfolioContent(props: PortfolioContentProps) {
  const { item_sx, item_dx } = props;

  return (
    <Paper
      elevation={4}
      square
      className="PortfolioPaper"
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '20px',
      }}
    >
      <Grid
        container
        spacing={1}
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column'
        }}
      >
        <Grid
        container
        spacing={4}
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: '0px'
        }}>
          {item_sx.images.map((img, index) => (
            <Grid key={`${item_sx.id}-${index}`}>
              <img
                src={img.src}
                alt={img.alt}
                width={'90%'}
                style={{ margin: '20px', maxWidth: '450px' }}
                key={`${item_sx.id}-${index}`}
              />
            </Grid>
          ))}
        </Grid>
        <Grid
          container
          spacing={4}
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '0px'
          }}
        >
          {item_dx.images.map((img, index) => (
            <Grid key={`${item_dx.id}-${index}`}>
              <img
                src={img.src}
                alt={img.alt}
                width={'90%'}
                style={{ margin: '20px', maxWidth: '450px' }}
                key={`${item_dx.id}-${index}`}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Paper>
  );
}

export default PortfolioContent;
