import React from "react";
import { Link } from "react-router-dom";
import { MainNavbar } from "../components/common/MainNavbar";
import { Button } from "../components/common/Button";
import morty from "../assets/images/rick.png";

const navLinks = [
  { id: 1, path: "/", lable: "Home" },
  { id: 2, path: "/Characters", lable: "Characters" },
  { id: 3, path: "/episodes", lable: "Episodes" },
];

function Header() {
  return (
    <MainNavbar>
      <div className="mr-5">
        <img width="50px" src={morty} alt={"asd"}></img>
      </div>
      Rick & Morty
      {navLinks.map((link, index) => (
        <Link
          key={index}
          className="mx-5 text-lg hover:border-b-2 border-blue-400"
          to={link.path}
        >
          {link.lable}
        </Link>
      ))}
      <Button>Download</Button>
    </MainNavbar>
  );
}

export default Header;
