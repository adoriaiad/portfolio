import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
import tavola1 from './../../assets/img/books/cover/02.jpg';

function Robot() {
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

export default Robot;