import React, { FC } from "react";
import { FooterContainer } from "./Footer.styled";

const Footer: FC = () => {
  return <FooterContainer>
    <p>Altıntepe mh. İstasyon Yolu sk. No 3/1 Maltepe İstanbul, 34840 Türkiye</p>
    <strong>© 2023 Tüm hakları sakladır. GRC Teknoloji tarafından yapılmıştır.</strong>
  </FooterContainer>;
};

export default Footer;
