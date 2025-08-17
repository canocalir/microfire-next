import {
  HeroButton,
  HeroMainContainer,
  HeroLeftContainer,
  HeroRightContainer,
  HeroImage,
  HeroBrand,
} from "./Hero.styled";
import heroImage from "../../assets/mainpage.png";
import { FC } from "react";
import { UpperWaves } from "../Waves/Waves.styled";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const Hero: FC = () => {
  const { t } = useTranslation("");
  return (
    <>
      <HeroMainContainer>
        <HeroLeftContainer>
          <h1>{t("main.heroTitle")}</h1>
          <p>
            <HeroBrand>MicroFireX : </HeroBrand> {t("main.heroText")}
          </p>
          <Link href="#usage" scroll={false}>
            <HeroButton>{t("main.heroButton")}</HeroButton>
          </Link>
        </HeroLeftContainer>
        <HeroRightContainer>
          <HeroImage priority src={heroImage} alt="heroImage" />
        </HeroRightContainer>
      </HeroMainContainer>
      <UpperWaves xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#efe0d5"
          fillOpacity="1"
          d="M0,160L34.3,154.7C68.6,149,137,139,206,117.3C274.3,96,343,64,411,74.7C480,85,549,139,617,181.3C685.7,224,754,256,823,256C891.4,256,960,224,1029,208C1097.1,192,1166,192,1234,202.7C1302.9,213,1371,235,1406,245.3L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </UpperWaves>
    </>
  );
};

export default Hero;
