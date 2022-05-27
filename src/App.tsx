import React from "react";
import { Blogpost } from "./components/Blogpost";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ArticlePost from "./pages/ArticlePost";

function App() {
  return (
    <>
      <Header />
      <ArticlePost />
      {/*   <h2 className="text-4xl">Neki naslov</h2> */}

      {/* <div className="w-screen mx-auto flex flex-wrap items-center ">
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
      </div> */}
      <Footer />
    </>
  );
}

export default App;
