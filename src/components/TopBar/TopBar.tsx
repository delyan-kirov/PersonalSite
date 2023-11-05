import React from 'react';
import './TopBar.css'

interface TopBarProps {
  onButtonClick: (textContent: string) => void;
  textContent: string;
}

function TopBar({ onButtonClick, textContent }: TopBarProps) {
  return (
    <div className="topnav">
      <div className='socials'>
      <a href="https://github.com/delyan-kirov/">
        <img src={require("./github.png")} style={{ width: '40px', height: '40px' }} /></a>
        <a href="#news">
        <img src={require("./email.png")} style={{ width: '40px', height: '40px' }} /></a>
        <a href="#news">
        <img src={require("./linkedin.png")} style={{ width: '40px', height: '40px' }} /></a>
        <a href="#news">
        <img src={require("./resume.png")} style={{ width: '40px', height: '40px' }} /></a>
      </div>
    </div>
  );
}

export default TopBar;
