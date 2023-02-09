import { CssBaseline } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function MainLayout() {
  const sections = [
    { title: "Home", url: "/" },
    { title: "Bio", url: "/bio" },
    { title: "Portfolio", url: "/portfolio" },
    { title: "Gallery", url: "/gallery" },
];

  return (
    <>
      <CssBaseline />
      <Header sections={sections} title={""} />
      <div style={{marginTop:'40px'}}><Outlet /></div>
      <Footer description="" title='' />
    </>
  );
}

export default MainLayout;
