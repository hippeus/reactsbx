import React from "react";
import { VideoInfo } from "./VideoItem";

interface VideoDetailsProps {
  data: VideoInfo | null;
}

const VideoDetails = ({ data }: VideoDetailsProps): JSX.Element => {
  let title = "Nothing has been selected yet";
  let desc = "";
  if (data != null) {
    const { snippet } = data;
    title = snippet.title;
    desc = snippet.description;
  }
  return (
    <div>
      <div className='ui segment'>
        <div className='ui embed'>
          <iframe
            title='video player'
            src={`https://www.youtube.com/embed/${data?.id.videoId}`}
          />
        </div>
        <h4 className='ui header'>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default VideoDetails;
