import * as React from 'react';
import { Grid } from '@mui/material';
import Accordions from '../components/Accordion';
import Gallery from '../components/Gallery';
import { usePortfolio } from '../data/usePortfolio';

function Portfolio() {
 const {gallery} = usePortfolio();
  const [selectedMarkerIDs, setSelectedMarkerIDs] = React.useState<string[]>(['01']);
  
    const handleMarkerPressed = (id: string) => () => {
      setSelectedMarkerIDs((prevState) =>
        prevState.includes(id)
          ? // If ID is already selected, remove it
            prevState.filter((markerID) => markerID !== id)
          : // If ID is not selected, add it
            [...prevState, id]
      );
    };
  
  return (
    <Grid
      container
      spacing={2}
      style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '50px' }}
    >
      {gallery.map(item => (
        <Accordions
          imgGallery={item}
          handleChange={handleMarkerPressed}
          key={item.id}
          selectedMarkerIDs={selectedMarkerIDs}
        />
      ))}
      <Gallery handleClick={handleMarkerPressed} selectedMarkerIDs={selectedMarkerIDs}/>
    </Grid>
  );
}

export default Portfolio;
