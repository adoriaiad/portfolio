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
            Angelita Doria è nata in Italia, attualmente residente in Belgio.
            Appassionata al disegno e all'illustrazione fin da bambina, curiosa,
            sensibile alla natura e alla sua bellezza. Si è laureata in
            Biologia, ha sempre lavorato come web developer, eseguito
            commissioni artistiche nel tempo libero e per passione. Attualmente
            interessata al campo dell'illustrazione per bambini ha in corso un
            progetto che spera sarà il primo di tanti altri. Ama la musica e
            suona a livello amatoriale il sassofono, l'armonica blues, l'ukulele
            e frequenta la scuola di pianoforte moderno.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Bio;
