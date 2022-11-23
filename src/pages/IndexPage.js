import React from "react";
import { Container } from "../components/common/PageContainer";
import morty from "../assets/images/rick.png";
import GitHub from "../assets/images/GitHub.png";
import GitHubIcon from '@mui/icons-material/GitHub';

function IndexPage() {
  return (
    <Container className="flex flex-col text-center">
      <div className="flex justify-center mb-5"><img width={"100px"} src={morty} alt="Rick" /></div>
      <p className="text-3xl">Whelcome to Rick & Morty WebApp</p>
      <p className="text-xl">Whelcome to Rick & Morty WebApp</p>
      <div className="flex justify-center my-5"><a href="https://github.com/Dvir-Cohen1/rick-and-morty">
        <GitHubIcon fontSize="large"/>
      </a></div>
    </Container>
  );
}

export default IndexPage;
