import { Grid } from '@mui/material';
import * as React from 'react';
import { usePortfolio } from '../data/usePortfolio';
import PortfolioContent from '../components/PortfolioContent';

function Portfolio() {
  const { projects_sx, projects_dx } = usePortfolio();
  
  return (
    <Grid
      container
      spacing={2}
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        marginTop: '30px',
      }}
    >
      <PortfolioContent
          item_sx={projects_sx}
          item_dx={projects_dx}
        />
    </Grid>
  );
}

export default Portfolio;
