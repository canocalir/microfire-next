import Image from "next/image";
import styled from "styled-components";

const UsageMainContainer = styled.section`
  background-color: #ffffff;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const UsageLeftContainer = styled.div`
  padding: 10rem 0 0rem 0;
  width: 45%;
  @media (max-width: 864px){
    padding: 5rem 2rem 5rem 2rem;
    width: 100%;
  }
`;

const UsageRightContainer = styled.div`
  padding: 15rem 0 0rem 0;
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  > p {
    font-size: 1rem;
    font-weight: 500;
  }
  > h1 {
    font-size: 2rem;
    font-weight: 900;
    color: #ff0e0e;
  }
  @media(max-width: 864px){
    padding: 0 2rem 5rem 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

const UsageImage = styled(Image)`
  object-fit: contain;
  width: 100%;
  height: auto;
`;

export {
  UsageImage,
  UsageMainContainer,
  UsageLeftContainer,
  UsageRightContainer,
};
