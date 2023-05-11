import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { object, string } from 'yup';
import emailjs from '@emailjs/browser';
import isEmpty from 'lodash.isempty';
import { useTranslation } from 'react-i18next';

type ContactTypeForm = {
  name: string;
  email: string;
  message: string;
};

function Contact() {
  const { t } = useTranslation();
  const [response, setResponse] = useState<string>('');
  const contactSchema = object({
    name: string().required(t('CONTACTS.ERRORNAME') || 'Name required'),
    email: string()
      .email(t('CONTACTS.ERRORMAIL') || 'Email not valid')
      .required(t('CONTACTS.ERRORMAILREQUIRED') || 'Email required'),
    message: string().required(t("CONTACTS.ERRORMSG") || 'Message required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: contactSchema,
    onSubmit: values => {
      onSubmitSendEmail(values);
    },
  });

  const Spacer = () => <Box height={20} component="span" />;

  function onSubmitSendEmail(values: ContactTypeForm) {
    emailjs
      .send('service_bkcem08', 'template_4j6tu9d', values, '9Ay7yWcbRks3S8h5Z')
      .then(res =>
        setResponse(
          t("CONTACTS.SUCCESSMSG") || 'Message sent successfully'
        )
      )
      .catch(err => setResponse(err));
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid
        container
        spacing={2}
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <Paper
          elevation={4}
          square
          className="PortfolioPaper"
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            padding: '20px',
            margin: '20px',
          }}
        >
          {isEmpty(response) && (
            <>
              <TextField
                fullWidth
                id="name"
                name="name"
                label={t("CONTACTS.NAME")}
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
                label={t("CONTACTS.MESSAGE")}
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
                className={'Contact-button'}
              >
                {t("CONTACTS.BUTTONTEXT")}
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
