import React from 'react';
import { Grid } from '@mui/material';

import home from './../assets/img/casa.png';

function Home() {
  return (
    <Grid
      container
      spacing={2}
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      <img src={home} alt={''} className="Home" />
    </Grid>
  );
}

export default Home;
