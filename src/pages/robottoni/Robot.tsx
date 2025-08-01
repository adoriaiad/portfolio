import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
import tavola1 from './../../assets/img/books/cover/02.jpg';
import bozza from './../../assets/img/books/cover/02-bozza.jpg';

function Robot() {
  const navigation = useNavigate();
  return (
    <Grid
      container
      spacing={2}
      style={{
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
    <Grid>
      <img className="book-image" src={tavola1} alt="" />
      <img className="book-image" src={bozza} alt="" />
    </Grid>
    <Grid>
      <Button
        variant="outlined"
        startIcon={<ArrowBackIosIcon />}
        onClick={() => navigation('/books')}
      >
        Back
      </Button>
    </Grid>
    </Grid>
  );
}

export default Robot;
