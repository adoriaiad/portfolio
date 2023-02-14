import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import portfolio1 from "./../assets/img/portfolio01.avif";
import portfolio2 from "./../assets/img/portfolio02.avif";
import portfolio3 from "./../assets/img/portfolio03.avif";


function Portfolio() {
  
    const gallery = [
      {
        src: portfolio1,
        alt: "portfolio1",
      },
      {
        src: portfolio2,
        alt: "portfolio2",
      },
      {
        src: portfolio3,
        alt: "portfolio3",
      },
    ];
  return (
   
      <Grid container spacing={2} style={{display: 'flex', justifyContent: 'space-evenly'}}>
      {gallery.map(item =>
      <Paper elevation={4} square className="PortfolioPaper">
        <img src={item.src} alt={item.alt} width={"90%"} style={{ margin: "20px" }} />
      </Paper>
      )}
      </Grid>
  
  )
}

export default Portfolio