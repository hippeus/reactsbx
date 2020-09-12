import React from "react";
import VideoItem, { VideoInfo } from "./VideoItem";

interface VideoListProps {
  items?: Array<VideoInfo>;
  onItemSelected: (it: VideoInfo) => void;
}

const VideoList = ({ items, onItemSelected }: VideoListProps): JSX.Element => {
  const renderList = (): JSX.Element => {
    if (!items) {
      return <div>Empty</div>;
    }

    const renderedItems = items.map(
      (it: VideoInfo): JSX.Element => {
        return (
          <VideoItem
            key={it.id.videoId}
            data={it}
            onVideoItemClick={onItemSelected}
          />
        );
      }
    );
    return <div className='ui relaxed divided list'>{renderedItems}</div>;
  };

  return <div> {renderList()}</div>;
};

export default VideoList;
