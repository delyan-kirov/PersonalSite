import React, { useState } from "react";
import "./About.css";
import "../TopBar/TopBar";
import "../Dash/Dash";
import TopBar from "../TopBar/TopBar";
import Dash from "../Dash/Dash";
import MidPanel from "../MidPanel/MidPanel";
import FullPanel from "../FullPanel/FullPanel";
import BottomBar from "../BottomBar/BottomBar";

function About() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="TopBar">
          <TopBar />
        </div>
        <div style={{ margin: "40px" }}></div>
        <div className="FullPanel">
          <FullPanel></FullPanel>
        </div>
        <div style={{margin: "5px"}}></div>
        <div/>
        <div><BottomBar/></div>
      </header>
    </div>
  );
}

export default About;
