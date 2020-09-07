import "./ImageList.css";
import ImageCard, { ImageDesc } from "./ImageCard";
import React from "react";

interface ImageListProps {
  images: Array<any>;
}

const ImageList = (props: ImageListProps): JSX.Element => {
  console.log(props.images);
  const images = props.images.map(
    (img: ImageDesc): JSX.Element => {
      return <ImageCard key={img.id} desc={img.desc} urls={img.urls} />;
    }
  );
  return <div className='image-list'>{images}</div>;
};

export default ImageList;
