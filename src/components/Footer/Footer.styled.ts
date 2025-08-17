import styled from "styled-components";

export const FooterContainer = styled.footer`
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #efe0d5;
  width: 100%;
  flex-direction: column;
  gap: 0.5rem;
  @media (max-width: 864px){
    text-align: center;
  }
`;
