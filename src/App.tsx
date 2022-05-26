import React from "react";
import { Blogpost } from "./components/Blogpost";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <h2 className="text-4xl">Neki naslov</h2>
      <div className="w-screen mx-auto flex flex-wrap items-center">
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
        <Footer />
      </div>
    </>
  );
}

export default App;
