import Image from "next/image";
import logo from "../../assets/logo.png";
import { NavbarButton, NavbarContainer } from "./Navbar.styled";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Image width={110} src={logo} alt="logo" />
      <NavbarButton>Contact</NavbarButton>
    </NavbarContainer>
  );
};

export default Navbar;
