import React from "react";

export default function VideoItem({ video, index }) {
  return (
    <>
      <div className="videoItem_component">
        <img src={video.snippet.thumbnails.medium.url} alt="thumbnail" />
        {video.snippet.title}
        {video.snippet.description}
      </div>
    </>
  );
}
