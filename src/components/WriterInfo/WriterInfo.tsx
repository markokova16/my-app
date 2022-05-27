import React from "react";
import { ReactComponent as FacebookIcon } from "../socialMediaImages/facebook.svg";
import { ReactComponent as TwitterIcon } from "../socialMediaImages/twitter.svg";

const WriterInfo = () => {
  return (
    <div className="flex flex-row justify-center">
      <img
        src="//picsum.photos/57/57"
        alt="article image"
        className="shadow rounded-full max-w-full h-auto align-middle border-none"
      />
      <div>
        John doe Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
        iusto deleniti sed explicabo quasi tenetur omnis beatae doloribus iure!
        A?
      </div>
    </div>
  );
};

export default WriterInfo;
