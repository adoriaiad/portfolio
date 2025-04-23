import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
import tavola1 from './../../assets/img/books/sentichemusica/01.jpg';
import tavola2 from './../../assets/img/books/sentichemusica/02.jpg';
import tavola3 from './../../assets/img/books/sentichemusica/03.jpg';
import tavola4 from './../../assets/img/books/sentichemusica/04.jpg';
import bozze from './../../assets/img/books/sentichemusica/bozze.jpg';
import personaggi from './../../assets/img/books/sentichemusica/personaggi.jpg';

function SenticheMusica() {
  const navigation = useNavigate();
  return (
    <Grid
      container
      spacing={2}
      style={{
        display: 'flex',
        alignContent: 'center',
        flexDirection: 'column',
      }}
    >
      <img
        className="book-image"
        src={tavola1}
        alt=""
      />
      <img
        className="book-image"
        src={bozze}
        alt=""
      />
      <img
        className="book-image"
        src={personaggi}
        alt=""
      />
      <img
        className="book-image"
        src={tavola2}
        alt=""
      />
      <img
        className="book-image"
        src={tavola3}
        alt=""
      />
      <img
        className="book-image"
        src={tavola4}
        alt=""
      />
      <Button
        variant="outlined"
        startIcon={<ArrowBackIosIcon />}
        onClick={() => navigation('/books')}
      >
        Back
      </Button>
    </Grid>
  );
}

export default SenticheMusica;
