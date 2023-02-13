import { Grid, TextField } from "@mui/material";
import React from "react";

function Contact() {
  return (
    <Grid
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        padding: "20px",
      }}
    >
      <TextField id="outlined-basic" label="Nome" variant="standard" />
      <TextField id="outlined-basic" label="Cognome" variant="standard" />
      <TextField id="outlined-basic" label="Email" variant="standard" />
      <TextField
        id="outlined-basic"
        label="Messaggio"
        variant="standard"
        multiline
        rows={6}
      />
    </Grid>
  );
}

export default Contact;
