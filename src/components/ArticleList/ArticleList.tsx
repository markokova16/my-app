import React from "react";
import { Blogpost } from "../Blogpost";

interface IArticleListProps {
  className?: string;
}

const ArticleList: React.FC<IArticleListProps> = ({ className }) => {
  return (
    <div className={`${className}`}>
      <div className="text-3xl font-bold mt-10">What to read next</div>

      <div className="flex flex-col justify-center items-center md:flex md:flex-row md:justify-evenly md:items-center md:w-9/12">
        <Blogpost
          text="article name"
          className="w-11/12 mt-10 flex flex-col justify-center items-center md:w-1/3"
        />
        <Blogpost
          text="article name"
          className="w-11/12 mt-10 flex flex-col justify-center items-center md:w-1/3 md:mx-5"
        />
        <Blogpost
          text="article name"
          className="w-11/12 mt-10 flex flex-col justify-center items-center md:w-1/3"
        />
      </div>

      <div className="hidden md:flex md:flex-row md:justify-evenly md:items-center md:mt-10 md:w-9/12">
        <Blogpost
          text="article name "
          className="w-1/3 flex flex-col justify-center items-center"
        />

        <Blogpost
          text="article name"
          className="w-1/3 flex flex-col justify-center items-center mx-5"
        />

        <Blogpost
          text="article name"
          className="w-1/3 flex flex-col justify-center items-center"
        />
      </div>
    </div>
  );
};

export default ArticleList;
