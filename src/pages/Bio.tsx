import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import lita from "./../assets/img/lita_p.png";

function Bio() {
  return (
    <Container>
      <Grid container spacing={0} className="App-header">
        <Grid item xs={8} md={3}>
          <img src={lita} alt="logo" width={"90%"} style={{ margin: "20px" }} />
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography
            variant="body1"
            color="text.secondary"
            align="justify"
            style={{ margin: "60px" }}
          >
            Angelita Doria è nata e cresciuta in Italia.
            Ha conseguito studi scientifici e si è laureata in Biologia,
            ma ha sviluppato interesse per l'informatica e
            lavora da sempre in questo ambito.
            Nel corso degli anni ha frequentato un corso
            di illustrazione naturalistica ad acquerello e ha studiato da autodidatta
            le tecniche della pittura e del disegno soprattutto della figura umana.
            Appassionata al disegno e all'illustrazione fin da bambina, curiosa,
            sensibile alla natura e alla sua bellezza. Attualmente
            interessata al campo dell'illustrazione per bambini ha in corso un
            progetto che spera diventi il primo di tanti altri. Ama la musica e
            suona a livello amatoriale il sassofono, l'armonica blues, l'ukulele
            e frequenta la scuola di pianoforte moderno.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Bio;
