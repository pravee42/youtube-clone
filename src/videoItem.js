import React from "react";

export default function videoItem(video) {
  return (
    <>
      <div className="videoItem_component">
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.description}
        />
        {video.snippet.title}
      </div>
    </>
  );
}
