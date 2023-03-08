import { FC } from "react";
import { VideoEmbeds, VideoMainContainer } from "./Video.styled";

const Video: FC = () => {
  return (
    <>
      <VideoMainContainer>
        <h1>Nasıl Kullanılır?</h1>
        <VideoEmbeds>
        <iframe
          src="https://www.youtube.com/embed/s_CWHiZE2Hw?controls=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          frameBorder="0" 
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/s8Vk1YskDuI?controls=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          frameBorder="0" 
        ></iframe>
        </VideoEmbeds>
      </VideoMainContainer>
    </>
  );
};

export default Video;
