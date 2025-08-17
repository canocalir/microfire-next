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
import styles from './Specs.module.scss';
import Card from "../Card/Card";
import { FaAnchor, FaAward, FaGrinBeam, FaIndustry } from "react-icons/fa";
import ListsCard from "../ListsCard/ListsCard";

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

  const downloadBrochure = () => {
    const link = document.createElement('a');
    link.href = '/tds-en.docx';
    link.download = 'brochure.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const newLineAdded = (text: string) => {
    if (!text) return null;
    const lines = text.split('\n');
    return lines.map((line, idx) => (
      <span key={idx}>
        {parseBoldText(line)}
        <br />
      </span>
    ));
  }
  
  return (
    <div className={styles.specsContainer}>
      <FireRaiderBanner banner={fireraiderBanner}></FireRaiderBanner>
      <SpecsMainContainer>
        <SpecsLeftContainer>
          <HeaderWithIcon>
            <HeaderIconFire />
            <h1 className={styles.heading}>{t('specs.heading1')}</h1>
          </HeaderWithIcon>
          <p>
            {newLineAdded(t('specs.text1'))}
          </p>
        </SpecsLeftContainer>
        <SpecsRightContainer>
          <HeaderWithIcon>
            <HeaderIconList />
            <h1 className={styles.heading}>{t('specs.heading2')}</h1>
          </HeaderWithIcon>
          <p>
            {newLineAdded(t('specs.text2'))}
          </p>
        </SpecsRightContainer>
      </SpecsMainContainer>
      <div className={styles.specsCardsContainer}>
      <Card title={t('specs.card1.title')} content={t('specs.card1.content')} icon={<FaAnchor/>}/>
      <Card title={t('specs.card2.title')} content={t('specs.card2.content')} icon={<FaAward/>}/>
      <Card title={t('specs.card3.title')} content={t('specs.card3.content')} icon={<FaGrinBeam/>}/>  
      <Card title={t('specs.card4.title')} content={t('specs.card4.content')} icon={<FaIndustry/>}/>
      </div>
      <button className={styles.specsButton} onClick={downloadBrochure}>
        {t('specs.button')}
      </button>
       <ListsCard
    items={[t("specs.panel1"), t("specs.panel2"), t("specs.panel3"), t("specs.panel4"), t("specs.panel5"), t("specs.panel6"), t("specs.panel7"), t("specs.panel8")]}
    note= {t("specs.panelNote") || ''}
  />
    </div>
  );
};

export default Specs;
