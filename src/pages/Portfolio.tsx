import { Grid } from '@mui/material';
import * as React from 'react';
import { usePortfolio } from '../data/usePortfolio';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Portfolio() {
  const { items } = usePortfolio();

  return (
    <Grid
      container
      spacing={2}
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '30px',
      }}
    >
      <Carousel
        showArrows={true}
        swipeable={true}
        emulateTouch={true}
        dynamicHeight={true}
        showStatus={false}
      >
        {items.images.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={image.alt} />
            <p className="legend">{image.description}</p>
          </div>
        ))}
      </Carousel>
    </Grid>
  );
}

export default Portfolio;
