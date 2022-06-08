import React, { useState, useEffect } from "react";

import { Blogpost } from "../components/Blogpost";
import { getPosts, IPost } from "../services/getPosts";
import Login from "../components/Login/Login";

const HomePage = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    getPosts().then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div>
      <Login />

      <h2 className="text-4xl font-bold flex justify-center border-t-2 border-black">
        All articles
      </h2>

      {posts.length && (
        <Blogpost
          className="md:w-1/2  p-5 m-auto"
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
    </div>
  );
};

export default HomePage;
