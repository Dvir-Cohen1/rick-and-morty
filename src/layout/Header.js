import React from "react";
import { Link } from "react-router-dom";
import { MainNavbar } from "../components/common/MainNavbar";
import { Button } from "../components/common/Button";
import morty from "../assets/images/rick.png";

function Header() {
  return (
    <MainNavbar>
      <div className="mr-5">
        <img width="50px" src={morty} alt={"asd"}></img>
      </div>
      Rick & Morty
      <Link className="mx-5 text-lg hover:border-b-2 border-blue-400" to="/">
        Home
      </Link>
      <Link
        className="mx-5 text-lg hover:border-b-2 border-blue-400"
        to="/allCharacters"
      >
        Characters
      </Link>
      <Link
        className="mx-5 text-lg hover:border-b-2 border-blue-400"
        to="/episodes"
      >
        Episodes
      </Link>
      <Button>Download</Button>
    </MainNavbar>
  );
}

export default Header;
