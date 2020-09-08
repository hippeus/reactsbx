import React, { ReactNode } from "react";
import { VideoInfo } from "./VideoItem";

interface VideoDetailsProps {
  data: VideoInfo | null;
}

class VideoDetails extends React.Component<VideoDetailsProps> {
  render(): ReactNode {
    let title = "Nothing has been selected yet";
    let desc = "";
    if (this.props.data != null) {
      const { snippet } = this.props.data;
      title = snippet.title;
      desc = snippet.description;
    }
    return (
      <div>
        <div className='ui segment'>
          <div className='ui embed'>
            <iframe
              title='video player'
              src={`https://www.youtube.com/embed/${this.props.data?.id.videoId}`}
            />
          </div>
          <h4 className='ui header'>{title}</h4>
          <p>{desc}</p>
        </div>
      </div>
    );
  }
}

export default VideoDetails;
