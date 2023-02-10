import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import React from "react";
import gatto from "./../assets/img/gatto.png";
import neve from "./../assets/img/neve.png";
import bimba from "./../assets/img/bimba.png";
import dino from "./../assets/img/dino.png";
import palloncini from "./../assets/img/palloncini.png";
import volpe from "./../assets/img/volpe.png";
import { Grid } from "@mui/material";

function Gallery() {
  const gallery = [
    {
      src: gatto,
      alt: "gatto",
    },
    {
      src: neve,
      alt: "neve",
    },
    {
      src: bimba,
      alt: "bimba",
    },
    {
      src: dino,
      alt: "dino",
    },
    {
      src: palloncini,
      alt: "palloncini",
    },
    {
      src: volpe,
      alt: "volpe",
    },
  ];
  return (
    <Container>
      <Grid container spacing={2} style={{display: 'flex', justifyContent: 'space-evenly'}}>
      {gallery.map(item =>
      <Paper elevation={4} square className="Paper">
        <img src={item.src} alt={item.alt} width={"90%"} style={{ margin: "20px" }} />
      </Paper>
      )}
      </Grid>
    </Container>
  );
}

export default Gallery;
