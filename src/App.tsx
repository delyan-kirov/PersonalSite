import React, { useState } from 'react';
import './App.css';
import './components/TopBar/TopBar'
import './components/Dash/Dash'
import About from './components/About/About';
import { HashRouter as Router, Route, Link, Routes } from 'react-router-dom';
import BlogPosts from './components/BlogPosts/BlogPosts';
import FullPanel from './components/FullPanel/FullPanel'

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/blog" element={<BlogPosts />} />
                    <Route path="/" element={<About />} />
                    <Route path="/post1" element={<FullPanel />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
