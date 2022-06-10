import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ArticlePost from "./pages/ArticlePost";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./components/NotFound/NotFound";
import Login from "./components/Login/Login";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:id" element={<ArticlePost />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
