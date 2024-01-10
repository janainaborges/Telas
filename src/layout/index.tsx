
import React from "react";
import NavBar from "../components/Navbar";
import { BodyContentWrapper, LayoutWrapper, NavbarWrapper } from "./styled";

interface LayoutProps {
  children: React.ReactNode;
  changeNav: "N" | "P" | "T";
  name: string;
  links: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  changeNav,
  name,
  links,
}) => {
  return (
    <LayoutWrapper>
      <NavbarWrapper>
        <NavBar changeNav={changeNav} name={name} links={links} />
      </NavbarWrapper>
      <BodyContentWrapper>{children}</BodyContentWrapper>
    </LayoutWrapper>
  );
};

export default Layout;
