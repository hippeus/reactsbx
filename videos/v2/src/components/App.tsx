import React, { ReactNode } from "react";
import { AxiosResponse } from "axios";

import youtube from "../apis/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import { VideoInfo } from "./VideoItem";
import VideoDetails from "./VideoDetails";

const YoutubePubKey = "AIzaSyDASbbfgFghYuKEIgA4oY2ekB_bKJ-gDQ8";

interface AppState {
  videos?: Array<any>;
  selectedVideo: VideoInfo | null;
}

class App extends React.Component<{}, AppState> {
  state: AppState = { selectedVideo: null };

  onTermSubmit = async (term: string): Promise<AxiosResponse> => {
    const resp = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: YoutubePubKey,
      },
    });
    console.log(resp.data.items.length);
    this.setState({
      videos: resp.data.items,
      selectedVideo: resp.data.items[0],
    });
    return resp;
  };

  onVideoSelected = (item: VideoInfo): void => {
    this.setState({ selectedVideo: item });
  };

  componentDidMount = () => {
    this.onTermSubmit("sabaton");
  };

  render(): ReactNode {
    return (
      <div className='ui container'>
        <SearchBar onSubmit={this.onTermSubmit} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetails data={this.state.selectedVideo} />
            </div>
            <div className='five wide column'>
              <VideoList
                items={this.state.videos != null ? this.state.videos : []}
                onItemSelected={this.onVideoSelected}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
