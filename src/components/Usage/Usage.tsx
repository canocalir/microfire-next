import {
  UsageImage,
  UsageLeftContainer,
  UsageMainContainer,
  UsageRightContainer,
} from "./Usage.styled";
import usageImage from "../../assets/usage.png";
import { BottomWaves, MiddleWaves } from "../Waves/Waves.styled";

const Usage = () => {
  return (
    <UsageMainContainer>
      <MiddleWaves xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#bde8c6"
          fillOpacity="1"
          d="M0,128L60,106.7C120,85,240,43,360,26.7C480,11,600,21,720,53.3C840,85,960,139,1080,160C1200,181,1320,171,1380,165.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </MiddleWaves>
      <UsageLeftContainer>
        <UsageImage priority src={usageImage} alt="usage" />
      </UsageLeftContainer>
      <UsageRightContainer>
        <h1>Nasıl Monte Edilir?</h1>
        <p>
          Pürüzlü yüzeyi, olası yangın riskinin olduğu yöne bakacak şekilde,
          arkasındaki yapışkan bandın koruyucusu sökülür ve yere paralel şekilde
          yapıştırılır. Araçlarda, akü başlıkları ve yakıt filtresinin üstüne
          gelecek şekilde kaportaya yapıştırılır. Elektrik panolarında ve
          elektrik saatlerinde, panonun iç yüzeyinde tavana gelecek şekilde
          yapıştırılır. Her bağımsız bölüme ayrı sticker konmalıdır.
        </p>
      </UsageRightContainer>
      <BottomWaves xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fbb02d"
          fillOpacity="1"
          d="M0,32L60,74.7C120,117,240,203,360,218.7C480,235,600,181,720,138.7C840,96,960,64,1080,48C1200,32,1320,32,1380,32L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </BottomWaves>
    </UsageMainContainer>
  );
};

export default Usage;
