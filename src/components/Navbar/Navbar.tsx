import Image from "next/image";
import logo from "../../assets/logo.png";
import { NavbarButton, NavbarContainer } from "./Navbar.styled";
import { FC } from "react";
import Link from "next/link";

const Navbar: FC = () => {
  return (
    <NavbarContainer>
      <Link href="/" scroll={false}>
        <Image width={110} src={logo} alt="logo" />
      </Link>
      <Link href="#contact" scroll={false}>
        <NavbarButton>Bize Ulaşın</NavbarButton>
      </Link>
    </NavbarContainer>
  );
};

export default Navbar;
