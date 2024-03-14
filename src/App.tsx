import React from "react";
import "./App.css";
import About from "./components/About/About";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import BlogPosts from "./components/BlogPosts/BlogPosts";
import Post1 from "./components/Posts/Post1";
import Resume from "./components/Resume/Resume";
import Sudoku from "./components/Sudoku/Sudoku"

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/blog" element={<BlogPosts />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/" element={<About />} />
          <Route path="/post1" element={<Post1 />} />
          <Route path="/sudoku" element={<Sudoku />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
