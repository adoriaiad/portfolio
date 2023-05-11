import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import lita from './../assets/img/lita_p.png';
import { useTranslation } from 'react-i18next';

function Bio() {
  const { t } = useTranslation();
  return (
    <Grid container spacing={0} className="App-header">
      <Grid item xs={8} md={3}>
        <img src={lita} alt="logo" width={'90%'} style={{ margin: '20px' }} />
      </Grid>
      <Grid item xs={12} md={9}>
        <Typography
          variant="h4"
          color="text.secondary"
          align="justify"
          style={{ marginLeft: '60px' }}
        >
          {t('BIO.WHO')}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          align="justify"
          style={{ margin: '60px' }}
        >
          {t('BIO.TEXT1')}
          <br />
          {t('BIO.TEXT2')}
          <br />
          {t('BIO.TEXT3')}
          <br />
          {t('BIO.TEXT4')}
          <br />
          {t('BIO.TEXT5')}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Bio;
