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
import BrushIcon from '@mui/icons-material/Brush';
import { MenuItemType } from "../../models/type";
import { useTranslation } from "react-i18next";
import { useMenuNavigation } from "../../contexts/MenuNavigation";

function MainLayout() {
  const {t} = useTranslation();
  const menuNavigation = useMenuNavigation();
  const isContactPage = menuNavigation.selected === '/contact'? true : false;
  const sections: MenuItemType[] = [
    { title: "Home", url: "/", icon: <HomeOutlinedIcon /> },
    { title: t("MENU.PORTFOLIO"), url: "/portfolio", icon: <MenuBookOutlinedIcon /> },
    { title:  t("MENU.BOOKS"), url: "/books", icon: <CollectionsOutlinedIcon /> },
    { title:  t("MENU.COMICS"), url: "/comics", icon: <BrushIcon /> },
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
      {isContactPage && <Footer description="" title="" />}
    </>
  );
}

export default MainLayout;
