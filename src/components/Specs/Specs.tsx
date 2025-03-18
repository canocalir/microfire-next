import {
  FireRaiderBanner,
  HeaderIconFire,
  HeaderIconList,
  HeaderWithIcon,
  SpecsLeftContainer,
  SpecsMainContainer,
  SpecsRightContainer,
} from "./Specs.styled";
import fireraiderBanner from "../../assets/fireraiders.png";
import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Specs = () => {
  const { t } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const parseBoldText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <>
      <FireRaiderBanner banner={fireraiderBanner}></FireRaiderBanner>
      <SpecsMainContainer>
        <SpecsLeftContainer>
          <HeaderWithIcon>
            <HeaderIconFire />
            <h1>{t('specs.heading1')}</h1>
          </HeaderWithIcon>
          <p>
            {parseBoldText(t('specs.text1'))}
          </p>
        </SpecsLeftContainer>
        <SpecsRightContainer>
          <HeaderWithIcon>
            <HeaderIconList />
            <h1>{t('specs.heading2')}</h1>
          </HeaderWithIcon>
          <p>
            {parseBoldText(t('specs.text2'))}
          </p>
        </SpecsRightContainer>
      </SpecsMainContainer>
    </>
  );
};

export default Specs;
