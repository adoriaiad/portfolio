import { Container, CssBaseline } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

function MainLayout() {
  const sections = [
    { title: "Home", url: "/", icon: <HomeOutlinedIcon /> },
    { title: "Progetti", url: "/progetti", icon: <MenuBookOutlinedIcon /> },
    { title: "Gallery", url: "/gallery", icon: <CollectionsOutlinedIcon /> },
    { title: "Bio", url: "/bio", icon: <PermIdentityOutlinedIcon /> },
    { title: "Contatti", url: "/contact", icon: <EmailOutlinedIcon /> },
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
