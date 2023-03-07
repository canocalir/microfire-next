import styled from "styled-components";

const UpperWaves = styled.svg`
  position: sticky;
  margin-top: -20rem;
  @media (max-width: 864px) {
    position: sticky;
    margin-top: 0;
  }
`;

const MiddleWaves = styled.svg`
    position: absolute;
`

const BottomWaves = styled.svg`
    width: 100%;
`

export { UpperWaves, MiddleWaves, BottomWaves };
