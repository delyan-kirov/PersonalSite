import React, { useState } from 'react';
import './App.css';
import './components/TopBar/TopBar'
import './components/Dash/Dash'
import TopBar from './components/TopBar/TopBar';
import Dash from './components/Dash/Dash';
// import SquarePanel from './components/SquarePanel/SquarePanel';
import MidPanel from './components/MidPanel/MidPanel';
import FullPanel from './components/FullPanel/FullPanel';
/* import FullPanel1 from './components/FullPanel/FullPanel1';
*  */
import About from './components/About/About';
import { HashRouter as Router, Route, Link, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/blog" element={<MidPanel />} />
          <Route path="/" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

{/* <div className='SquarePanel'>
          <SquarePanel></SquarePanel>
        </div> */}

export default App;
