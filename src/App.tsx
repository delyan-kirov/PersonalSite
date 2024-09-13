import React from "react";
import "./App.css";
import About from "./components/About/About";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import BlogPosts from "./components/BlogPosts/BlogPosts";
import Sudoku from "./components/Sudoku/Sudoku";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/blog" element={<BlogPosts />} />
          <Route path="/" element={<About />} />
          <Route path="/sudoku" element={<Sudoku />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
