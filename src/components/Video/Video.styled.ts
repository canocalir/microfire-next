import styled from "styled-components";

const VideoMainContainer = styled.section`
  width: 100%;
  height: 70rem;
  background-color: #efe0d5;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
  padding-bottom: 6rem;

  > h1 {
    font-size: 2rem;
    font-weight: 900;
    color: #ff0e0e;
  }
  @media (min-width: 1400px) {
    height: 100%;
  }
`;

const VideoEmbeds = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  padding-top: 4rem;
  gap: 2rem;

  iframe {
    border-radius: 1rem;
    width: 40rem;
    height: 20rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;

export { VideoMainContainer, VideoEmbeds };
