import React from "react";
import YouTube from "react-youtube";

const KnowledgeVideo = ({ videoId,auto=true }) => {
  const opts = {
    height: "175px",
    width: "100%",
    playerVars: {
      autoplay: auto?1:0,
    },
  };

  return (
    <div>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default KnowledgeVideo;
