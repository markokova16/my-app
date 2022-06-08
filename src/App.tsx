import React, { useEffect, useState } from "react";

import ArticlePost from "./pages/ArticlePost";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article" element={<ArticlePost />} />
      </Routes>
    </div>
  );
}

export default App;
