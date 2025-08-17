import styled from "styled-components";
import { FaThList } from "react-icons/fa";
import { AiFillFire } from "react-icons/ai";

type BannerImageProp = {
  banner: any
}

const FireRaiderBanner = styled.div<BannerImageProp>`
  margin-top: 0rem;
  z-index: 1;
  height: 20rem;
  width: 100%;
  background-color: #efe0d5 !important;
  background: url(${props => props.banner.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top center;
  @media (max-width: 864px){
    height: 8rem;
  }
`;

const SpecsMainContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 4rem 2rem 3rem 2rem;
  @media (max-width: 864px){
    gap: 2rem;
  }
`;

const SpecsLeftContainer = styled.div`
  flex: 0.3;
  > h2 {
    font-size: 2rem;
    font-weight: 600;
  }
  > p {
    font-size: 1rem;
    font-weight: 500;
    line-height: 2rem;
  }
  @media(max-width: 864px){
    flex: 0.8;
  }
`;

const SpecsRightContainer = styled.div`
  flex: 0.3;
  > p {
    font-size: 1rem;
    font-weight: 500;
    line-height: 2rem;
  }
  @media(max-width: 864px){
    flex: 0.8;
  }
`;

const HeaderWithIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: #ff0e0e;
  margin-bottom: 1rem;
  > h1 {
    font-size: 2rem;
    font-weight: 900;
  }
`;

const HeaderIconList = styled(FaThList)`
  font-size: 2.1rem;
`;

const HeaderIconFire = styled(AiFillFire)`
  font-size: 2.1rem;
`;

export {
  FireRaiderBanner,
  SpecsMainContainer,
  SpecsLeftContainer,
  SpecsRightContainer,
  HeaderWithIcon,
  HeaderIconList,
  HeaderIconFire
};
