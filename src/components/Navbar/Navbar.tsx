import Image from "next/image";
import logo from "../../assets/logo-mfx.png";
import { NavbarButton, NavbarContainer, NavbarRightContainer } from "./Navbar.styled";
import { FC } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

const Navbar: FC = () => {
  const { t } = useTranslation("");

  return (
    <NavbarContainer>
      <Link href="/" scroll={false}>
        <Image width={110} src={logo} alt="logo" />
      </Link>
      <NavbarRightContainer>
        <LanguageSwitcher/>
      <Link href="#contact" scroll={false}>
        <NavbarButton>{t("navbar.navbarButtonText")}</NavbarButton>
      </Link>
      </NavbarRightContainer>
    </NavbarContainer>
  );
};

export default Navbar;
