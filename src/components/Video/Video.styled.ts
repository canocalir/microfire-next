import styled from "styled-components";

const VideoMainContainer = styled.section`
  width: 100%;
  height: 70%;
  background-color: #fbb02d;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
  padding-bottom: 6rem;

> h1 {
    font-size: 2.8rem;
    font-weight: 900;
  }
`;

const VideoEmbeds = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  padding-top: 4rem;
  gap: 2rem;
  height: 28rem;
  iframe{
    border-radius: 1rem;
    width: 40rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`

export {VideoMainContainer, VideoEmbeds}