import React from "react";
import { Blogpost } from "./components/Blogpost";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <h2 className="text-4xl">Neki naslov</h2>
      <div className="max-w-4xl mx-auto flex flex-wrap">
        <Header />
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
    </>
  );
}

export default App;
