import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { ImageGalleryType } from '../models/type';

type PortfolioContentProps = {
  item: ImageGalleryType;
  onClickEventHandler: () => void;
};

function PortfolioContent(props: PortfolioContentProps) {
  const { item, onClickEventHandler } = props;

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
        }}
      >
        <Typography
          variant={'h5'}
          color={'text.secondary'}
          sx={{ flexShrink: 0 }}
          style={{ fontFamily: 'Yomogi' }}
          key={`typ-${item.id}`}
        >
          {item.title}
        </Typography>
        <Typography
          variant={'subtitle2'}
          color={'text.secondary'}
          style={{ fontFamily: 'Yomogi' }}
          key={`subtitle2${item.id}`}
        >
          {item.subtitle}
        </Typography>
        <Grid
          container
          spacing={4}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            margin: '0px'
          }}
          key={`grid-${item.id}`}
        >
          {item.images.map((img, index) => (
            <div key={`${item.id}-${index}`}>
              {img.description && (
                <Typography
                  variant={'body1'}
                  color={'text.secondary'}
                  style={{
                    margin: '60px',
                    maxWidth: '220px',
                    fontFamily: 'Yomogi',
                  }}
                  key={`typ-${item.id}-${index}`}
                >
                  {img.description}
                </Typography>
              )}
              <img
                src={img.src}
                alt={img.alt}
                width={'90%'}
                style={{ margin: '20px', maxWidth: '450px' }}
                key={`${item.id}-${index}`}
              />
            </div>
          ))}
        </Grid>
        <Button
          variant="outlined"
          startIcon={<ArrowBackIosIcon />}
          onClick={() => onClickEventHandler()}
        >
          Back
        </Button>
      </Grid>
    </Paper>
  );
}

export default PortfolioContent;
