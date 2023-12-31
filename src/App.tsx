import React, { useState } from 'react';
import './App.css';
import About from './components/About/About';
import { HashRouter as Router, Route, Link, Routes } from 'react-router-dom';
import BlogPosts from './components/BlogPosts/BlogPosts';
import Post1 from './components/Posts/Post1';
import SquarePanel from "./components/MidPanel/MidPanel"

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/blog" element={<BlogPosts />} />
                    <Route path="/projects" element={<SquarePanel />} />
                    <Route path="/" element={<About />} />
                    <Route path="/post1" element={<Post1/>} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
