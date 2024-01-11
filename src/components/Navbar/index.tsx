import React from "react";
import { Icon, Nav, Start, Title } from "./styled";
import Avatar from "../Avatar";
import Notification from "../Notification";
import { Link } from "react-router-dom";
import backIcon from "../../assets/back.png";
import burguerIcon from "../../assets/burguer.png";
import { H1, H2 } from "../../shared/themes/heading";

interface NavbarI {
  changeNav: "N" | "P" | "T";
  name: string;
  links: string;
}

const NavBar: React.FC<NavbarI> = ({ changeNav, name, links }) => {
  const navType = changeNav || "normal";

  return (
    <>
      <Nav>
        <Start>
          {navType === "N" ? (
            <Avatar imageUrl="" altText="" size={60} />
          ) : (
            <Link to={links}>
              <Icon bg={backIcon} />
            </Link>
          )}
          <Title>
            <H2>{navType === "N" && "Hello, "}</H2>
            <H1>{name}</H1>
          </Title>
        </Start>
        {navType === "N" ? (
          <Notification notification />
        ) : navType === "P" ? (
          <Icon bg={burguerIcon} />
        ) : (
          "NULL"
        )}
      </Nav>
    </>
  );
};

export default NavBar;
