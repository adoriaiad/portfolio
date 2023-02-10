import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TwitterIcon from '@mui/icons-material/Twitter';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import logo from './../assets/img/_logo.png';

export interface HeaderProps {
  sections: Array<{
    title: string;
    url: string;
  }>;
  title: string;
}

const enum GoToEnum {
  mail = 'mail',
  fb = 'facebook',
  ig = 'instagram',
  tw = 'twitter'
}

export default function Header(props: HeaderProps) {
  const { sections, title } = props;

  const goTo: {[key: string]: () => void} = {
    mail: () => {
      window.open('mailto:info@angelitadoria.com');
    },
    facebook: () => {
      window.open('https://www.facebook.com/angelitadoriaillustra/', '_blank');
      window.focus();
    },
    instagram: () => {
      window.open('https://www.instagram.com/angelita.doria/', '_blank');
      window.focus();
    },
    twitter: () => {
      window.open('https://twitter.com/art_lita', '_blank');
      window.focus();
    }
  }

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Typography
          component="h2"
          variant="h4"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <IconButton onClick={goTo[GoToEnum.mail]}>
          <MailOutlineIcon />
        </IconButton>
        <IconButton onClick={goTo[GoToEnum.fb]}>
          <FacebookIcon />
        </IconButton>
        <IconButton onClick={goTo[GoToEnum.ig]}>
          <InstagramIcon />
        </IconButton>
        <IconButton onClick={goTo[GoToEnum.tw]}>
          <TwitterIcon />
        </IconButton>
      </Toolbar>
      <Toolbar sx={{ justifyContent: 'center', overflowX: 'auto' }} className={'App-header'}>
      <img src={logo} alt="logo" height={'200px'}/>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'center', overflowX: 'auto'}}
        className={'App-header'}
        style={{flexDirection: 'row'}}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="overline"
            underline='hover'
            href={section.url}
            sx={{ p: 2, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}