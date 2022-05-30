import React from "react";
import Image from "../Image/Image";

const HighlightedArticle = () => {
  return (
    <div className="flex flex-col items-center  mt-10 ">
      <Image className="w-1/2" />

      <div className="flex text-center font-bold items text-5xl mt-5">
        <h1>
          A few words about this blog platform, Ghost, and how this site was
          made
        </h1>
      </div>

      <div className="mt-8 mb-4 border-b-2 border-black  ">
        <p>
          Why Ghost (& Figma) instead of Medium, WordPress or other options?
        </p>
      </div>
    </div>
  );
};

export default HighlightedArticle;
