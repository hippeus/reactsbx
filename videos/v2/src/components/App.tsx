import React, { useState, useEffect } from "react";

import useVideos from "../hooks/useVideos";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import { VideoInfo } from "./VideoItem";
import VideoDetails from "./VideoDetails";

const App = (): JSX.Element => {
  const [selectedVideo, setSelectedVideo] = useState<VideoInfo | null>(null);

  const { videos, search } = useVideos("sabaton");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className='ui container'>
      <SearchBar onSubmit={search} />
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            <VideoDetails data={selectedVideo} />
          </div>
          <div className='five wide column'>
            <VideoList
              items={videos != null ? videos : []}
              onItemSelected={setSelectedVideo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
