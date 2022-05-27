import React from "react";
import { ReactComponent as FacebookIcon } from "../socialMediaImages/facebook.svg";
import { ReactComponent as TwitterIcon } from "../socialMediaImages/twitter.svg";

const ArticleInforBar = () => {
  return (
    <div className="flex flex-row justify-between items-center border-t-black">
      <div className="flex flex-row justify-between items-center">
        <img
          src="//picsum.photos/57/57"
          alt="article image"
          className="shadow rounded-full max-w-full h-auto align-middle border-none"
        />
        <div>
          <div className="font-bold">John Doe</div>

          <div>27.5.2022, 2 min read</div>
        </div>
      </div>

      <div className="flex flex-row justify-evenly items-center">
        <div className="border-r-gray-500">
          <FacebookIcon />
        </div>
        <div>
          <TwitterIcon />
        </div>
      </div>
    </div>
  );
};

export default ArticleInforBar;
