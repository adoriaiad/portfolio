import React from 'react';
import { Grid } from '@mui/material';

import home from './../assets/img/homepage.png';

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
