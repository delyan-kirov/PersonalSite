import React from "react";
import "./Resume.css";
import TopBar from "../TopBar/TopBar";

function Resume() {
  return (
    <div className="mid-panel">
      <TopBar />
      <div style={{ padding: "2%" }} />
      <div>
        <p>
          Link to resume
        </p>
      </div>
      {/* */}
      <div>
        <p>
          Experience
        </p>
      </div>
      {/* */}
      <div>
        <p>
          Projects
        </p>
      </div>
    </div>
  );
}

export default Resume;
