import { Container, CssBaseline } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function MainLayout() {
  const sections = [
    { title: "Home", url: "/" },
    { title: "Progetti", url: "/progetti" },
    { title: "Gallery", url: "/gallery" },
    { title: "Bio", url: "/bio" },
    { title: "Contatti", url: "/contact" },
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
