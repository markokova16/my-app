import React from "react";
import { ReactComponent as FacebookIcon } from "../socialMediaImages/facebook.svg";
import { ReactComponent as TwitterIcon } from "../socialMediaImages/twitter.svg";
import { ReactComponent as WhatsappIcon } from "../socialMediaImages/whapp.svg";

interface IArticleInfoBarProps {
  className?: string;
}

const ArticleInforBar: React.FC<IArticleInfoBarProps> = ({
  className = "",
}) => {
  return (
    <div className={`${className}`}>
      <div className="flex flex-row mr-auto my-5">
        <img
          src="//picsum.photos/57/57"
          alt="Writer"
          className="shadow rounded-full max-w-full h-auto align-middle border-none w-1/3"
        />

        <div className="ml-5">
          <div className="font-bold w-2/3">John Doe</div>

          <div>27.5.2022, 2 min read</div>
        </div>
      </div>

      <div className="flex flex-row justify-end items-center w-full">
        <div className="border border-gray-500 p-1 w-1/3">
          <FacebookIcon className="mx-auto" />
        </div>
        <div className="border border-gray-500 p-1 w-1/3">
          <TwitterIcon className="mx-auto" />
        </div>

        <div className="border border-gray-500 p-1 w-1/3 md:hidden">
          <WhatsappIcon className="mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default ArticleInforBar;
