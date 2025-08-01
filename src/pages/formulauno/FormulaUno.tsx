import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
import tavola1 from './../../assets/img/books/cover/03.jpg';
import bozza1 from './../../assets/img/books/cover/03-bozza-1.jpg';
import bozza2 from './../../assets/img/books/cover/03-bozza-2.jpg';

function FormulaUno() {
  const navigation = useNavigate();
  return (
    <Grid
      container
      style={{
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Grid>
        <img className="book-image" src={tavola1} alt="" />
        <img className="book-image" src={bozza1} alt="" />
        <img className="book-image" src={bozza2} alt="" />
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

export default FormulaUno;
