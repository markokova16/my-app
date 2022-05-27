import React from "react";
import { ReactComponent as FacebookIcon } from "../socialMediaImages/facebook.svg";
import { ReactComponent as TwitterIcon } from "../socialMediaImages/twitter.svg";

const WriterInfo = () => {
  return (
    <div className="flex flex-row justify-center w-1/2 border-t-dotted border-black">
      <img
        src="//picsum.photos/57/57"
        alt="article image"
        className="shadow rounded-full max-w-full h-auto align-middle border-none"
      />
      <p className="inline-block">
        John doe Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
        iusto deleniti sed explicabo quasi tenetur omnis beatae doloribus iure!
        A? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
        illum quisquam dolore, exercitationem illo deserunt officiis nemo
        delectus aperiam et!
      </p>
    </div>
  );
};

export default WriterInfo;
