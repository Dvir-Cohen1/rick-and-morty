import React from "react";
import { Outlet } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import Header from "./Header";
import Footer from "./Footer";
import { Wrapper } from "../components/common/Wrapper";

function DefaultLayout() {
  return (
    <Wrapper>
      <Header />
      <Breadcrumbs />
        <Outlet />
      <Footer />
    </Wrapper>
  );
}

export default DefaultLayout;
