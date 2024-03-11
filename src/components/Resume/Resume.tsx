import React from "react";
import "./Resume.css";
import TopBar from "../TopBar/TopBar";
import BottomBar from "../BottomBar/BottomBar";

function Resume() {
  return (
    <div className="App">
      <header className="App-header">
        <TopBar />
        <div style={{ padding: "4.5vh" }} />
        <div className="section">
          <h1>
            Resume
          </h1>
        </div>
        {/* */}
        <div className="section" style={{ backgroundColor: "#282c34" }}>
          <h1>
            Resume
          </h1>
        </div>
        {/* */}
        <div className="section">
          <h1>
            Projects
          </h1>
        </div>
        <div />
        <div style={{ position: "fixed", bottom: "0" }}>
          <BottomBar />
        </div>
      </header>
    </div>
  );
}

export default Resume;
