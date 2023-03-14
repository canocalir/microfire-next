import React, { FC } from "react";
import { FooterContainer } from "./Footer.styled";
import { useTranslation } from "next-i18next";

const Footer: FC = () => {
  const { t } = useTranslation("");

  return (
    <FooterContainer>
      <p>{t("main.footerAddress")}</p>
      <strong>{t("main.footerCopyrightText")}</strong>
    </FooterContainer>
  );
};

export default Footer;
