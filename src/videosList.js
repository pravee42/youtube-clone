import React from "react";
import videoItem from "./videoItem";

export default function videosList(videos) {
  const renderVideos = videos.map((video) => {
    return (
      <div>
        <videoItem key={video.id.videoId} video={video} />
      </div>
    );
    console.log(video.id.videoId);
  });
  return (
    <div>
      <div className="videosList_component">{renderVideos}</div>
    </div>
  );
}
