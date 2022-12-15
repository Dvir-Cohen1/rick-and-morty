import React from "react";
import { Link } from "react-router-dom";
import { MainNavbar } from "../components/common/MainNavbar";
import { Button } from "../components/common/Button";
import morty from "../assets/images/rick.png";
import GitHubIcon from "@mui/icons-material/GitHub";
const navLinks = [
  { id: 1, path: "/", lable: "Home" },
  { id: 2, path: "/Characters", lable: "Characters" },
  { id: 3, path: "/episodes", lable: "Episodes" },
];

function Header() {
  return (
    <MainNavbar>
      <div className="mr-5 flex items-center">
        <img width="50px" src={morty} alt={"logo"}></img>
      <span className="mx-3">Rick & Morty</span>
      </div>
      {navLinks.map((link, index) => (
        <Link
          key={index}
          className="mx-5 text-lg hover:border-b border-[var(--primary-color)]"
          to={link.path}
        >
          {link.lable}
        </Link>
      ))}
      <a href="https://github.com/Dvir-Cohen1/rick-and-morty">
        <GitHubIcon fontSize="large" />
      </a>
    </MainNavbar>
  );
}

export default Header;
