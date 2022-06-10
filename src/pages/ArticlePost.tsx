import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "../services/getPostById";
import { IPost } from "../services/getPosts";
import { sign } from "crypto";
import "./ArticlePost.scss";
import Image from "../components/Image/Image";
import ArticleInfoBar from "../components/ArticleInfoBar/ArticleInforBar";
import ShareArticle from "../components/ShareArticle/ShareArticle";
import WriterInfo from "../components/WriterInfo/WriterInfo";
import ArticleList from "../components/ArticleList/ArticleList";
import NewsletterSignup from "../components/NewsletterSignup/NewsletterSignup";

interface IArticlePostProps {
  className?: string;
  img?: string;
  text?: string;
}

const ArticlePost: React.FC<IArticlePostProps> = ({ className }) => {
  const [singlePost, setSinglePost] = useState<IPost>();
  let { id } = useParams();

  useEffect(() => {
    if (id) {
      getPostById(id).then((response) => {
        setSinglePost(response.data);
      });
    }
  }, []);

  return (
    <>
      <div className="w-11/12 flex flex-col justify-center items-center text-center m-auto md:w-3/5">
        <h1 className="font-bold text-4xl md:text-6xl md:font-bold my-10">
          A few words about this blog platform, Ghost and how this site was made
        </h1>

        <p className="mb-10">
          Why Ghost (& Figma) instead of Medium, WordPress or other options?
        </p>
      </div>

      <Image className="w-full mb-5" />

      <ArticleInfoBar className="flex flex-col justify-between items-center m-auto w-11/12 md:flex md:flex-row md:justify-between md:items-center border-t border-black md:w-1/2" />

      <div
        dangerouslySetInnerHTML={{ __html: singlePost?.content.rendered! }}
        className="articlePost"
      />

      <ShareArticle className="w-11/12 flex flex-row justify-center items-center md:flex md:flex-row md:justify-center md:items-center md:w-1/2 mt-10 m-auto" />

      <WriterInfo className="flex flex-row justify-between w-11/12 md:flex md:flex-row md:justify-between md:w-1/2 border-t-dotted border-black mt-10 m-auto" />

      <ArticleList className="flex flex-col justify-center items-center w-full border border-t-black mt-10 border-b-white m-auto" />

      <NewsletterSignup className="flex flex-col justify-center items-center text-center w-full border border-t-8 my-10 p-5 border-t-black border-b-black md:border-t-black md:w-1/2 md:flex md:flex-col md:justify-center md:items-center md:text-center m-auto" />
    </>
  );
};

export default ArticlePost;
