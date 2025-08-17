import Image from "next/image";
import styled from "styled-components";

const HeroMainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  width: 70vw;
  padding-top: 5rem;
  @media (max-width: 864px) {
    gap: 2rem;
    width: 90%;
  }
`;

const HeroLeftContainer = styled.section`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 49%;
  gap: 1rem;
  z-index: 2;
  > h1 {
    font-size: 3.5vw;
    font-weight: 900;
    color: #ff0e0e;
  }
  > p {
    font-size: 1.3rem;
    font-weight: 500;
  }
  @media (max-width: 864px) {
    align-items: center;
    order: 1;
    width: 100%;
    padding-top: 2rem;
    > h1 {
      text-align: center;
    }
    > p {
      text-align: center;
    }
  }
`;

const HeroBrand = styled.span`
  font-weight: 600;
  font-size: 1.3rem;
  &:hover {
    background-color: #effbd0;
    transition: 500ms ease-in-out;
  }
`;

const HeroRightContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 49%;
  @media (max-width: 864px) {
    order: 0;
    width: 100%;
  }
`;

const HeroButton = styled.button`
  background-color: #ff0e0e;
  color: #ffffff;
  font-weight: 600;
  border-radius: 2rem;
  width: 15rem;
  height: 4rem;
  font-size: 1.2rem;
  border: 4px solid #ff0e0e;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  &:hover {
    background-color: #ff0e0e ;
    cursor: pointer;
    transition: 300ms ease-in-out;
  }
`;

const HeroImage = styled(Image)`
  object-fit: contain;
  width: 100%;
  height: auto;
  z-index: 2;
  @media (max-width: 864px) {
    height: 20rem;
  }
`;

export {
  HeroImage,
  HeroMainContainer,
  HeroLeftContainer,
  HeroButton,
  HeroRightContainer,
  HeroBrand
};
