import React from "react";
import { ReactComponent as FacebookIcon } from "../socialMediaImages/facebook.svg";
import { ReactComponent as TwitterIcon } from "../socialMediaImages/twitter.svg";

interface IShareArticleProps {
  className?: string;
}

const ShareArticle: React.FC<IShareArticleProps> = ({ className = "" }) => {
  return (
    <div className={`${className}`}>
      <div className="flex flex-row items-center font-bold border border-gray-200 bg-gray-80">
        <FacebookIcon />
        <div className="pl-5">Share on Facebook</div>
      </div>
      <div className="flex flex-row items-center font-bold border border-gray-200 bg-gray-80">
        <TwitterIcon />
        <div className="pl-5">Share on Twitter</div>
      </div>
    </div>
  );
};

export default ShareArticle;
