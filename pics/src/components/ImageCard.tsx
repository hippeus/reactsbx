import React, { ReactNode } from "react";

export interface ImageDesc {
  id?: string;
  desc?: string;
  urls: {
    regular: string;
  };
}

interface ImageCardState {
  imageRef: React.RefObject<HTMLImageElement>;
  spans: number;
}

// Each image render itself therefore it can govern its size in a grid.
// This is accomplished via React Reference systems (Refs).
class ImageCard extends React.Component<ImageDesc, ImageCardState> {
  constructor(props: ImageDesc) {
    super(props);

    this.state = {
      imageRef: React.createRef<HTMLImageElement>(),
      spans: 1,
    };
  }

  // setSpans is a callback func used to offload async nature of loading
  // image tag vs rendering it. It is used within a component whenever a
  // referenced image tag is loaded.
  setSpans = () => {
    const imgHeight = this.state.imageRef.current?.clientHeight as number;
    // rowHeight is hardcoded to '.image-list.grid-auto-rows' value from ImageList.css
    const rowHeight = 10;
    const spans = Math.ceil(imgHeight / rowHeight + 1);
    this.setState({ spans });
  };

  componentDidMount = (): void => {
    // read the height of an image in a client browser
    this.state.imageRef.current?.addEventListener("load", this.setSpans);
  };

  render(): ReactNode {
    const { desc, urls } = this.props;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.state.imageRef} alt={desc} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
