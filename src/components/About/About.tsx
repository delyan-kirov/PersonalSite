import React, { useState } from "react";
import "./About.css";
import "../TopBar/TopBar";
import TopBar from "../TopBar/TopBar";
import BottomBar from "../BottomBar/BottomBar";
import { motion } from "framer-motion";
import resume from "../BottomBar/resume.pdf";

function About() {
  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleCopyText = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    textToCopy: string,
  ) => {
    event.preventDefault();
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        console.log("Text copied to clipboard:", textToCopy);
        setPopupMessage("Copied");
        setPosition({ x: event.clientX, y: event.clientY });
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
        }, 700); // Hide popup after 2 seconds
      })
      .catch((error) => {
        console.error("Unable to copy text:", error);
      });
  };
  return (
    <div className="App">
      <header className="App-header">
        <TopBar />
        <div style={{ margin: "45px" }}></div>
        {/* Titile Name */}
        <motion.div
          transition={{ duration: 0.3 }}
          initial={{ opacity: 0, transform: "translateY(-40px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0)" }}
          viewport={{ once: true }}
        >
          <h1>
            Delyan Kirov
          </h1>
        </motion.div>

        {/* */}
        <motion.div
          initial={{ opacity: 0, transform: "translateY(-60px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0)" }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="About-smaller-panel">
            <h2>Hello!</h2>
            <p>
              I recently graduated from the University of Saint Andrews, looking
              for a web <b>development position</b>.
            </p>
            <p>
              My expertise includes <b>TypeScript</b> and <b>React</b>{" "}
              for frontend development, as well as <b>Java</b> and <b>Go</b>
              {" "}
              for backend solutions.
            </p>
            <p>
              I am experienced in working with <b>Redis</b> and <b>SQL</b>{" "}
              databases. My aim is to create stable and future rich websites
              with style 😎
            </p>
            <br></br>
          </div>
        </motion.div>

        <div>
          <p className="show-p"></p>
          <br></br>
          <div style={{ margin: "2vh" }}>
            <p>
              If you would like to know more about my projects, click on{" "}
              <a href={resume} style={{ color: "lightgreen" }}>Resume</a>! I
              also have a{" "}
              <a href="/PersonalSite/#/blog" style={{ color: "lightgreen" }}>
                Blog
              </a>{" "}
              you can check out, where I write about interesting tech and
              software I worked with. Lastly, feel free to check my{" "}
              <a
                title="github"
                href="https://github.com/delyan-kirov/"
                style={{ color: "lightgreen" }}
              >
                GitHub
              </a>{" "}
              or{" "}
              <a
                title="linkedin"
                href="https://www.linkedin.com/in/delyan-kirov-7132401a6"
                style={{ color: "lightgreen" }}
              >
                Linkedin
              </a>{" "}
              pages, or send me an{" "}
              <a
                href="#"
                onClick={(event) =>
                  handleCopyText(event, "delyan.k.Kirov@gmail.com")}
                style={{ color: "lightgreen" }}
              >
                {showPopup && (
                  <div
                    className="popup"
                    style={{ top: position.y, left: position.x }}
                  >
                    {popupMessage}
                  </div>
                )}
                Email
              </a>
              . Links are bellow as well.
            </p>
          </div>
          <br></br>
        </div>
        <BottomBar />
      </header>
    </div>
  );
}

export default About;
