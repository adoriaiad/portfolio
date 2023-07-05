import { Container, CssBaseline } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import { MenuItemType } from "../../models/type";
import { useTranslation } from "react-i18next";

function MainLayout() {
  const {t} = useTranslation();
  const sections: MenuItemType[] = [
    { title: "Home", url: "/", icon: <HomeOutlinedIcon /> },
    { title: t("MENU.PROJECTS"), url: "/progetti", icon: <MenuBookOutlinedIcon /> },
    { title:  t("MENU.GALLERY"), url: "/gallery", icon: <CollectionsOutlinedIcon /> },
    { title:  t("MENU.GRAPHIC"), url: "#", icon: <DesignServicesIcon /> },
    { title: "Bio", url: "/bio", icon: <PermIdentityOutlinedIcon /> },
    { title: t("MENU.CONTACTS"), url: "/contact", icon: <EmailOutlinedIcon /> },
  ];

  return (
    <>
      <CssBaseline />
      <Header sections={sections} title={""} />
      <div style={{ marginTop: "10px" }}>
        <Container>
          <Outlet />
        </Container>
      </div>
      <Footer description="" title="" />
    </>
  );
}

export default MainLayout;
