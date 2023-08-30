import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TwitterIcon from "@mui/icons-material/Twitter";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useMenuNavigation } from "../contexts/MenuNavigation";
import { MenuItemType } from "../models/type";
import logo from "./../assets/img/_logo.png";
import LangDropdown from "./LangDropdown";
import Menu from "./Menu";
import ColorTabs from "./Tabs";

export interface HeaderProps {
  sections: Array<MenuItemType>;
  title: string;
}

const enum GoToEnum {
  mail = "mail",
  fb = "facebook",
  ig = "instagram",
  tw = "twitter",
  home = "home"
}

export default function Header(props: HeaderProps) {
  const { sections, title } = props;
  const menuNavigation = useMenuNavigation();
  const navigation = useNavigate();

  const goTo: { [key: string]: (event: React.SyntheticEvent) => void } = {
    mail: () => {
      window.open("mailto:info@angelitadoria.com");
    },
    facebook: () => {
      window.open("https://www.facebook.com/angelitadoriaillustra/", "_blank");
      window.focus();
    },
    instagram: () => {
      window.open("https://www.instagram.com/angelita.doria/", "_blank");
      window.focus();
    },
    twitter: () => {
      window.open("https://twitter.com/art_lita", "_blank");
      window.focus();
    },
    home: (event) => {
      handleChange(event, '/')
    }
  };

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    menuNavigation.pageSelection(newValue);
    navigation(newValue);
  };

  const matches = useMediaQuery("(max-width:600px)");

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
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
        <LangDropdown />
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
      <Toolbar
        sx={{ justifyContent: "center", overflowX: "auto" }}
        className={"App-header"}
        onClick={goTo[GoToEnum.home]}
      >
        <img src={logo} alt="logo" height={"200px"} className="Logo-cursor"/>
      </Toolbar>
      {matches && <Menu sections={sections} />}
      {!matches && (
        <Toolbar
          component="nav"
          variant="dense"
          sx={{ justifyContent: "center", overflowX: "auto" }}
          className={"Menu-header"}
        >
          <ColorTabs sections={sections} onhandleChange={handleChange}/>
        </Toolbar>
      )}
    </React.Fragment>
  );
}
