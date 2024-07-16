import { Link, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import lita from './../assets/img/lita_p.png';
import { useTranslation } from 'react-i18next';
import run from './../assets/comics/run.png';

function Bio() {
  const { t } = useTranslation();
  return (
    <Grid container spacing={0} className="App-header">
      <Grid item xs={12} md={12} style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <Typography
          variant="h4"
          color="text.secondary"
          align="center"
          style={{ marginLeft: '60px', fontFamily: 'Yomogi' }}
        >
          {t('BIO.WHO')}
        </Typography>
        <img src={run} alt="" style={{ maxWidth: '200px', alignSelf: 'flex-end', marginRight: '55px'}} />
      </Grid>
      <Grid container spacing={0} style={{marginRight: '35px', marginLeft: '35px'}}>
        <Grid item xs={12} md={3}>
          <img src={lita} alt="logo" width={'82%'} style={{ marginTop: '60px' }} />
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography
            variant="body1"
            color="text.secondary"
            align="justify"
            style={{ marginTop: '60px', fontFamily: 'Yomogi' }}
          >
            {t('BIO.TEXT1')}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            align="justify"
            style={{ marginTop: '15px', fontFamily: 'Yomogi' }}
          >
            {t('BIO.TEXT2')}
          </Typography>
          <Typography
          variant="body1"
          color="text.secondary"
          align="justify"
          style={{ marginTop: '15px', fontFamily: 'Yomogi' }}
        >
          {t('BIO.TEXT3')}
        </Typography>
        </Grid>
      </Grid>

      <Grid item xs={12} md={12} style={{marginLeft: '35px', marginRight: '35px'}}>
        
        <Typography
          variant="body1"
          color="text.secondary"
          align="justify"
          style={{ marginTop: '15px', fontFamily: 'Yomogi' }}
        >
          {`${t('BIO.TEXT4')} `}
          <Link
            rel="stylesheet"
            href="https://www.kalaillustrations.com/"
            target="_blank"
          >
            {t('BIO.LINK')}
          </Link>
          {` ${t('BIO.TEXT5')}`}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          align="justify"
          style={{ marginTop: '15px', fontFamily: 'Yomogi' }}
        >
          {t('BIO.TEXT6')}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Bio;
