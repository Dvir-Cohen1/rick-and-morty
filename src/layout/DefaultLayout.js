import React from "react";
import { Outlet } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import { Wrapper } from "../components/common/Wrapper";

function DefaultLayout() {
  return (
    <Wrapper>
      {/* <Header /> */}
      <Navbar/>
      <Breadcrumbs />
        <Outlet />
      <Footer />
    </Wrapper>
  );
}

export default DefaultLayout;
