import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
import img01 from '../../assets/img/books/anicerex/01.jpg';
import img02 from '../../assets/img/books/anicerex/02.jpg';
import img03 from '../../assets/img/books/anicerex/03.jpg';
import img04 from '../../assets/img/books/anicerex/04.jpg';
import img05 from '../../assets/img/books/anicerex/05.jpg';
import img06 from '../../assets/img/books/anicerex/06.jpg';
import img07 from '../../assets/img/books/anicerex/07.jpg';

function AniceRex() {
  const navigation = useNavigate();
  return (
    <Grid
      container
      style={{
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
        <img className="book-image" src={img01} alt="" />
        <img className="book-image" src={img06} alt="" />
        <img className="book-image" src={img07} alt="" />
        <img className="book-image" src={img02} alt="" />
        <img className="book-image" src={img03} alt="" />
        <img className="book-image" src={img04} alt="" />
        <img className="book-image" src={img05} alt="" />
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

export default AniceRex;
