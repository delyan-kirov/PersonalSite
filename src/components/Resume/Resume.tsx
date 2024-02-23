import React from "react";
import "./Resume.css";
import TopBar from "../TopBar/TopBar";

function Resume() {
  return (
    <div className="mid-panel">
      <TopBar />
      <div style={{ padding: "4.5vh", }} />
      <div className="section">
        <h1>
          Link to resume
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
    </div>
  );
}

export default Resume;
