import React, { useEffect } from "react";
import { Blogpost } from "./components/Blogpost";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HighlightedArticle from "./components/HighlightedArticle/HighlightedArticle";
import ArticlePost from "./pages/ArticlePost";
import { getPosts } from "./services/getPosts";

function App() {
  useEffect(() => {
    getPosts().then((response) => console.log(response));
  }, []);
  return (
    <>
      <Header />
      <ArticlePost />
      {/*       <HighlightedArticle />

      <h2 className="text-4xl font-bold flex justify-center border-t-2 border-black">
        All articles
      </h2>

      {
        <div className="w-full mx-auto flex flex-wrap max-w-xl ">
          <Blogpost className="md:w-1/2  p-3" text="AAAAAAAAAAAA" />
          <Blogpost className="md:w-1/2  p-3" text="AAAAAAAAAAAA" />
          <Blogpost className="md:w-1/2  p-3" text="AAAAAAAAAAAA" />
          <Blogpost className="md:w-1/2  p-3" text="AAAAAAAAAAAA" />
          <Blogpost className="md:w-1/2  p-3" text="AAAAAAAAAAAA" />
          <Blogpost className="md:w-1/2  p-3" text="AAAAAAAAAAAA" />
          <Blogpost className="md:w-1/2  p-3" text="AAAAAAAAAAAA" />
          <Blogpost className="md:w-1/2  p-3" text="AAAAAAAAAAAA" />
          <Blogpost className="md:w-1/2  p-3" text="AAAAAAAAAAAA" />
          <Blogpost className="md:w-1/2  p-3" text="AAAAAAAAAAAA" />
          <Blogpost className="md:w-1/2  p-3" text="AAAAAAAAAAAA" />
          <Blogpost className="md:w-1/2  p-3" text="AAAAAAAAAAAA" />
        </div>
      } */}
      <Footer />
    </>
  );
}

export default App;
