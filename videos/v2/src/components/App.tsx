import React, { useState, useEffect } from "react";

import youtube from "../apis/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import { VideoInfo } from "./VideoItem";
import VideoDetails from "./VideoDetails";

const YoutubePubKey = "AIzaSyDASbbfgFghYuKEIgA4oY2ekB_bKJ-gDQ8";

const App = (): JSX.Element => {
  const [videos, setVideos] = useState<Array<any>>([]);
  const [selectedVideo, setSelectedVideo] = useState<VideoInfo | null>(null);

  const onTermSubmit = async (term: string): Promise<void> => {
    const { data } = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: YoutubePubKey,
      },
    });
    setVideos(data.items);
    setSelectedVideo(data.items[0]);
  };

  useEffect(() => {
    onTermSubmit("sabaton");
  }, []);

  return (
    <div className='ui container'>
      <SearchBar onSubmit={onTermSubmit} />
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
