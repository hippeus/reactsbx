import React, { ReactNode } from "react";
import { AxiosResponse } from "axios";
import ImageList from "./ImageList";
import unspash from "../api/unsplash";

import SearchBar from "./SearchBar";

// AppProps is an example of component props build as simple
// dictionary.
interface AppProps {
  config?: { [key: string]: any };
}

class AppState {
  images: Array<any> = [];
}

class App extends React.Component<AppProps> {
  state: AppState = new AppState();

  onSearchSubmit = async (term: string): Promise<AxiosResponse> => {
    const resp = await unspash.get(`/search/photos`, {
      params: {
        query: term,
      },
    });
    this.setState({ images: resp.data.results });
    return resp;
  };

  componentDidUpdate() {
    console.log(this);
  }

  render(): ReactNode {
    return (
      <div className='ui container' style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
