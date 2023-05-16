import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useTranslation } from "react-i18next";

function Copyright() {
  const {t} = useTranslation();
  return (
    <Typography variant="body2" color="text.secondary" align="center" style={{fontFamily: 'Yomogi'}}>
      <Link color="inherit" href="/data">
        {t('DATAPROTECTION')}
      </Link>{" "}
    </Typography>
  );
}

interface FooterProps {
  description: string;
  title: string;
}

function Footer(props: FooterProps) {
  const { description, title } = props;

  return (
    <Box component="footer" sx={{ bgcolor: "background", py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom style={{fontFamily: 'Yomogi'}}>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
          style={{fontFamily: 'Yomogi'}}
        >
          {description}
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}

export default Footer;
