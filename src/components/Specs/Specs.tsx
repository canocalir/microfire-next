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
import { FC } from "react";

const Specs: FC = () => {
  return (
    <>
      <FireRaiderBanner banner={fireraiderBanner}></FireRaiderBanner>
      <SpecsMainContainer>
        <SpecsLeftContainer>
          <HeaderWithIcon>
            <HeaderIconFire />
            <h1>Microfire Sticker</h1>
          </HeaderWithIcon>
          <p>
            Kolayca monte edilebilen, alevin teması ile kendiliğinden aktive
            olan ve saniyeler içerisinde yangını söndürebilen otomatik bir
            yangın söndürücüdür. Elektrik kaynağına, kablo ve boru bağlantısına
            gerek duymaz.
          </p>
        </SpecsLeftContainer>
        <SpecsRightContainer>
          <HeaderWithIcon>
            <HeaderIconList />
            <h1>Fiziki Özellikleri</h1>
          </HeaderWithIcon>
          <p>
            Küçük boyutludur (<b>100 x 50 x 4 mm</b>) Ağırlığı <b>26 ± 1</b>{" "}
            gramdır <b>-30° +100° C</b> arasında saklanır Etkili söndürme hacmi 
            <b>0.1 m3</b> (<b>110 litre</b>) dür 1 sticker; yaklaşık{" "}
            <b>50x50x50cm</b> boyutlarındaki bir kabin içinde çıkacak yangını
            söndürebilir
          </p>
        </SpecsRightContainer>
      </SpecsMainContainer>
    </>
  );
};

export default Specs;
