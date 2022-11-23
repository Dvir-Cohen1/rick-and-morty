import React from "react";
import { Container } from "../components/common/PageContainer";
import morty from "../assets/images/rick.png";

function IndexPage() {
  return (
    <Container className="flex flex-col text-center">
      <p className="text-3xl">Whelcome to Rick & Morty WebApp</p>
      <p className="text-xl">Whelcome to Rick & Morty WebApp</p>
      <img width={"100px"} src={morty} alt="Rick" />
    </Container>
  );
}

export default IndexPage;
