import React, { useEffect, useState } from "react";
import { Blogpost } from "./components/Blogpost";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HighlightedArticle from "./components/HighlightedArticle/HighlightedArticle";
import ArticlePost from "./pages/ArticlePost";
import { getPosts, IPost } from "./services/getPosts";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    getPosts().then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <>
      <Header />

      <h2 className="text-4xl font-bold flex justify-center border-t-2 border-black">
        All articles
      </h2>

      {posts.length && (
        <Blogpost
          className="md:w-1/2  p-5"
          text={posts[0].title.rendered}
          img={posts[0]._embedded["wp:featuredmedia"]?.[0].source_url}
          id={posts[0].id}
        />
      )}
      <div className="w-full mx-auto flex flex-wrap max-w-xl ">
        {posts.slice(1).map((post, i) => {
          console.log(post);
          return (
            <Blogpost
              className="md:w-1/2  p-5"
              text={post.title.rendered}
              key={i}
              img={post._embedded["wp:featuredmedia"]?.[0].source_url}
              id={post.id}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default App;
