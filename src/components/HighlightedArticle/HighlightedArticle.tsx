import React from "react";
import Image from "../Image/Image";

const HighlightedArticle = () => {
  return (
    <div className="flex flex-col items-center  mt-10 ">
      <Image className="w-1/2" />

      <div className="w-1/2 flex text-center font-bold items text-4xl mt-5">
        <h1>
          A few words about this blog platform, Ghost, and how this site was
          made
        </h1>
      </div>

      <div className="border-b-2 mt-4 mb-8 border-black w-80 text-center">
        <p>
          Why Ghost (& Figma) instead of Medium, WordPress or other options?
        </p>
      </div>
    </div>
  );
};

export default HighlightedArticle;
