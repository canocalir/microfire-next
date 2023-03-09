import Image from "next/image";
import logo from "../../assets/logo.png";
import { NavbarButton, NavbarContainer, NavbarRightContainer } from "./Navbar.styled";
import { FC } from "react";
import Link from "next/link";

const Navbar: FC = () => {
  return (
    <NavbarContainer>
      <Link href="/" scroll={false}>
        <Image width={110} src={logo} alt="logo" />
      </Link>
      <NavbarRightContainer>
        <select>
          <option selected value="en">TR</option>
          <option value="tr">EN</option>
        </select>
      <Link href="#contact" scroll={false}>
        <NavbarButton>Bize Ulaşın</NavbarButton>
      </Link>
      </NavbarRightContainer>
    </NavbarContainer>
  );
};

export default Navbar;
