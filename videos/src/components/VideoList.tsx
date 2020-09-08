import React, { ReactNode } from "react";
import VideoItem, { VideoInfo } from "./VideoItem";

interface VideoListProps {
  items?: Array<VideoInfo>;
  onItemSelected: (it: VideoInfo) => void;
}

class VideoList extends React.Component<VideoListProps> {
  renderList = (): ReactNode => {
    if (!this.props.items) {
      return <div>Empty</div>;
    }

    const items = this.props.items.map(
      (it: VideoInfo): ReactNode => {
        return (
          <VideoItem
            key={it.id.videoId}
            data={it}
            onVideoItemClick={this.props.onItemSelected}
          />
        );
      }
    );
    return <div className='ui relaxed divided list'>{items}</div>;
  };

  render(): ReactNode {
    return <div> {this.renderList()}</div>;
  }
}

export default VideoList;
