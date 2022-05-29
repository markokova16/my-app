import React from "react";
import { ReactComponent as FacebookIcon } from "../socialMediaImages/facebook.svg";
import { ReactComponent as TwitterIcon } from "../socialMediaImages/twitter.svg";
import { ReactComponent as WhatsappIcon } from "../socialMediaImages/whapp.svg";

interface IShareArticleProps {
  className?: string;
}

const ShareArticle: React.FC<IShareArticleProps> = ({ className = "" }) => {
  return (
    <div className={`${className}`}>
      <div className="w-1/3 md:w-1/2 md:flex md:flex-row md:items-center md:justify-center font-bold border border-gray-200 bg-gray-80">
        <FacebookIcon className="mx-auto" />
        <div className="hidden md:flex pl-5">Share on Facebook</div>
      </div>

      <div className="w-1/3 md:w-1/2 md:flex md:flex-row md:items-center md:justify-center font-bold border border-gray-200 bg-gray-80">
        <TwitterIcon className="mx-auto" />
        <div className="pl-5 hidden md:flex">Share on Twitter</div>
      </div>

      <div className="w-1/3 flex flex-row items-center justify-center md:hidden border-gray-200 bg-gray-80">
        <WhatsappIcon className="mx-auto" />
      </div>
    </div>
  );
};

export default ShareArticle;
