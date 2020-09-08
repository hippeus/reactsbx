import "./VideoItem.css";
import React, { ReactNode } from "react";

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

class VideoItem extends React.Component<VideoItemProps> {
  render(): ReactNode {
    const { snippet } = this.props.data;
    return (
      <div
        className='video-item item'
        onClick={() => this.props.onVideoItemClick(this.props.data)}
      >
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
  }
}

export default VideoItem;
