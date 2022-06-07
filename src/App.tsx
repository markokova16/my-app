import React, { useEffect, useState } from "react";
import { Blogpost } from "./components/Blogpost";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HighlightedArticle from "./components/HighlightedArticle/HighlightedArticle";
import ArticlePost from "./pages/ArticlePost";
import { getPosts, IPost } from "./services/getPosts";

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

      <div className="w-full mx-auto flex flex-wrap max-w-xl ">
        {posts.map((post, i) => {
          return (
            <Blogpost
              text={post.title.rendered}
              key={i}
              img={post._embedded["wp:featuredmedia"][0].link}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default App;
