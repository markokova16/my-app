import React from "react";
import image from "./image.png";

interface IImageProps {
  className: string;
}

const Image: React.FC<IImageProps> = ({ className }) => {
  return <img src={image} alt="blog" className={className} />;
};

export default Image;
