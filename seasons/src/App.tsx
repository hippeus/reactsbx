import React from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

interface AppProps {
  verbose?: boolean;
}

interface AppState {
  lat: number | null;
  verbose: boolean;
  errMsg?: string;
}

class App extends React.Component<AppProps, AppState> {
  state: AppState = {
    lat: null,
    verbose: false,
    errMsg: "",
  };

  componentDidMount(): void {
    this.getPosition();
    console.log("My component was rendered to the screen!");
  }

  componentDidUpdate(
    prevProps: Readonly<AppProps>,
    prevState: Readonly<AppState>
  ): void {
    console.log("My component was just updated - it re-rendered");
  }

  getPosition = (): void => {
    window.navigator.geolocation.getCurrentPosition(
      (pos): void => {
        this.setState({ lat: pos.coords.latitude });
      },
      (err): void => {
        this.setState({ errMsg: err.message });
      }
    );
  };

  renderContent = (): React.ReactNode => {
    if (this.state.lat) {
      return (
        <div>
          <SeasonDisplay lat={this.state.lat} />
        </div>
      );
    }
    if (!this.state.lat && this.state.errMsg) {
      return (
        <div className='ui raised segment'>
          <p>Error: {this.state.errMsg} </p>
        </div>
      );
    }

    return <Spinner message='Please accept location request' />;
  };

  render(): React.ReactNode {
    return <div>{this.renderContent()}</div>;
  }
}

export default App;
