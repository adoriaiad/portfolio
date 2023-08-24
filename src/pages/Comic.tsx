import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import React from 'react';
import me from './../assets/comics/lita.jpg';

function Comics() {
  return (
    <Container
      style={{
        margin: '0px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      }}
    >
      <img src={me} alt="me" width={'80%'} height={'80%'} />
      <Typography variant="h4" align="center">
        Coming soon...
      </Typography>
    </Container>
  );
}

export default Comics;
