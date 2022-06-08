import React from "react";
import { Link } from "react-router-dom";

interface IBlogpostProps {
  className?: string;
  text: string;
  img?: string;
  id: number;
}

export const Blogpost: React.FC<IBlogpostProps> = ({
  text,
  img,
  id,
  className = "",
}) => {
  return (
    <div className={`${className}`}>
      <Link to={`/article/${id}`}>
        <img className="w-full" src={img || "//picsum.photos/600/400"} alt="" />
        <h2 className="text-center font-bold text-l">{text}</h2>
      </Link>
    </div>
  );
};
