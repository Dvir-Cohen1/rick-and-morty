import React from "react";
import { Container } from "../components/common/PageContainer";
import morty from "../assets/images/rick.png";
import indexpic from "../assets/images/indexpic.png";
import rickandmorty from "../assets/images/rickandmorty.png";
import rickandmortypic from "../assets/images/rickandmortypic.png";
import GitHub from "../assets/images/GitHub.png";
import GitHubIcon from "@mui/icons-material/GitHub";

function IndexPage() {
  return (
    <Container className="flex flex-col text-center">
      <div className="flex justify-center mb-5">
        <img width={"300px"} src={rickandmortypic} alt="Rick" />
      </div>
      <p className="text-3xl">Welcome to Rick & Morty WebApp</p>
      <p className="text-xl">
        An animated series that follows the exploits of a super scientist and
        his not-so-bright grandson.
      </p>
      <div className="flex justify-center my-5">
        <a href="https://github.com/Dvir-Cohen1/rick-and-morty">
          <GitHubIcon fontSize="large" />
        </a>
      </div>
    </Container>
  );
}

export default IndexPage;
