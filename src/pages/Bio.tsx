import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import lita from "./../assets/img/lita_p.avif";

function Bio() {
  return (
   
      <Grid container spacing={0} className="App-header">
        <Grid item xs={8} md={3}>
          <img src={lita} alt="logo" width={"90%"} style={{ margin: "20px" }} />
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography variant="h4" color="text.secondary"
            align="justify" style={{ marginLeft: "60px" }}>
            Chi sono
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            align="justify"
            style={{ margin: "60px" }}
          >
            Che io ricordi ho sempre disegnato, fin da piccola.
            Riempivo fogli e fogli di disegni, copiavo i miei personaggi
            preferiti o ne creavo nuovi.<br />
            Non ho mai smesso, anche se nella vita ho fatto tutt'altro:
            studi scientifici e lavoro in campo informatico.
            Ho sempre amato il disegno a matita e carboncino, ritraendo chiunque mi
            capitasse a tiro e ho sperimentato spesso con la pittura e i pastelli.<br/>
            Durante gli studi universitari ho frequentato un corso
            di illustrazione naturalistica ad acquerello e ho studiato da autodidatta
            le tecniche della pittura e del disegno soprattutto della figura umana.
            Da sempre curiosa, desiderosa di imparare e di migliorare sempre,
            sensibile alla natura e alla sua bellezza. <br />
            Da pochi anni ho scoperto il disegno digitale sperimentando e cercando sempre
            soluzioni nuove per migliorare e rendere le mie illustrazioni coerenti al mio stile.
            Attualmente interessata all'illustrazione per bambini ho in corso un
            progetto che spero diventi il primo di tanti altri.<br /> 
            Comunicare con l'illustrazione, esprimere la mia creatività attraverso quest'arte,
            concretizzare quello che è sempre stato un sogno nel cassetto: questa è la mia mission.
          </Typography>
        </Grid>
      </Grid>
   
  );
}

export default Bio;
