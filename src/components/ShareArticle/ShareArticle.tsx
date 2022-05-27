import React from "react";
import { ReactComponent as FacebookIcon } from "../socialMediaImages/facebook.svg";
import { ReactComponent as TwitterIcon } from "../socialMediaImages/twitter.svg";

const ShareArticle = () => {
  return (
    <div className="flex flex-row justify-around items-center">
      <div className="flex flex-row items-center font-bold">
        <FacebookIcon />
        <div className="pl-5">Share on Facebook</div>
      </div>
      <div className="flex flex-row items-center font-bold">
        <TwitterIcon />
        <div className="pl-5">Share on Twitter</div>
      </div>
    </div>
  );
};

export default ShareArticle;
