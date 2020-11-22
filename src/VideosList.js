import React from "react";
import VideoItem from "./VideoItem";

export default function VideosList(videos) {
  const renderVideos =
    videos &&
    videos.map((video, index) => {
      return <VideoItem video={video} key={index} />;
    });

  return (
    <div>
      <div className="videosList_component">{renderVideos}</div>
    </div>
  );
}
