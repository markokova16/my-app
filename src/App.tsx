import React from "react";
import { Blogpost } from "./components/Blogpost";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />

      <h2 className="text-4xl font-bold flex justify-center ">All articles</h2>

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
      }
      <Footer />
    </>
  );
}

export default App;
