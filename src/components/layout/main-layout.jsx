import React from "react";
import { HeaderPage } from "../header/header-page";
import { FooterPage } from "../footer/footer-page";

const MainLayout = ({ children }) => {
  return (
    <>
      <HeaderPage />
      {children}
      <FooterPage />
    </>
  );
};

export default MainLayout;
