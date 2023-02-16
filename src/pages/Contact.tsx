import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useFormik } from "formik";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { object, string } from "yup";
import emailjs from "@emailjs/browser";
import isEmpty from "lodash.isempty";

type ContactTypeForm = {
  name: string;
  email: string;
  message: string;
};

function Contact() {
  const [response, setResponse] = useState<string>("");
  const contactSchema = object({
    name: string().required("Nome obbligatorio"),
    email: string().email("Email non valida").required("Email obbligatoria"),
    message: string().required("Messaggio obbligatorio"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: contactSchema,
    onSubmit: (values) => {
      onSubmitSendEmail(values);
    },
  });

  const Spacer = () => <Box height={20} component="span" />;

  function onSubmitSendEmail(values: ContactTypeForm) {
    emailjs
      .send("service_bkcem08", "template_4j6tu9d", values, "9Ay7yWcbRks3S8h5Z")
      .then((res) =>
        setResponse(
          "Il messaggio è stato inviato correttamente. Vi ricontatterò al più presto, grazie!"
        )
      )
      .catch((err) => setResponse(err));
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid
        container
        spacing={2}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Paper
          elevation={4}
          square
          className="PortfolioPaper"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            padding: "20px",
            margin: "20px",
          }}
        >
          {isEmpty(response) && (
            <>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Nome"
                variant="standard"
                onChange={formik.handleChange}
                value={formik.values.name}
                error={formik.errors.name ? true : false}
                helperText={formik.errors.name}
              />

              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                variant="standard"
                onChange={formik.handleChange}
                value={formik.values.email}
                error={formik.errors.email ? true : false}
                helperText={formik.errors.email}
              />

              <TextField
                fullWidth
                id="message"
                name="message"
                label="Scrivi qui il tuo messaggio"
                variant="standard"
                multiline
                rows={6}
                onChange={formik.handleChange}
                value={formik.values.message}
                error={formik.errors.message ? true : false}
                helperText={formik.errors.message}
              />

              <Spacer />
              <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
                endIcon={<EmailOutlinedIcon />}
                className={"Contact-button"}
              >
                INVIA MODULO
              </Button>
            </>
          )}

          {!isEmpty(response) && (
            <Typography variant="body1" color="text.secondary">
              {response}
            </Typography>
          )}
        </Paper>
      </Grid>
    </form>
  );
}

export default Contact;
