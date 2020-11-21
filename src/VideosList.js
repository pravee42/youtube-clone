import React from "react";
import videoItem from "./videoItem";

export default function VideosList({ videos }) {
  const renderVideos = videos.map((video) => (
    <videoItem key={video.id.videoId} video={video} />
  ));

  return (
    <div>
      <div className="videosList_component">{renderVideos}</div>
    </div>
  );
}
