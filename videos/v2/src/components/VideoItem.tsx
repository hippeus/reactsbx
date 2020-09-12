import "./VideoItem.css";
import React from "react";

export interface VideoInfo {
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    description: string;
    title: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
}

interface VideoItemProps {
  data: VideoInfo;
  onVideoItemClick: (it: VideoInfo) => void;
}

const VideoItem = ({ data, onVideoItemClick }: VideoItemProps): JSX.Element => {
  const { snippet } = data;
  return (
    <div className='video-item item' onClick={() => onVideoItemClick(data)}>
      <img
        className='ui image'
        src={snippet.thumbnails.medium.url}
        alt={snippet.title}
      />
      <div className='content'>
        <div className='header'>{snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
