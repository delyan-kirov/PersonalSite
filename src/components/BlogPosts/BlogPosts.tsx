import React, { useEffect } from "react";
import "./BlogPosts.css";
import TopBar from "../TopBar/TopBar";
import { motion } from "framer-motion";

function BlogPosts() {
  var i = 0.4;
  useEffect(() => {
    // Cleanup function to reset i when leaving the page
    return () => {
  // eslint-disable-next-line
      i = 0.366;
    };
  }, []);

  function count(): number {
    i = 1.5 * i;
    console.log(i);
    return i;
  }
  return (
    <div className="BlogPosts">
      <div className="TopBar">
        <TopBar />
      </div>
      {/* SPACE */}
      <div style={{ margin: "50px" }}></div>
      <div className="Title">
        <p style={{ fontSize: "40px" }}>Hello from BlogPosts!!!</p>
      </div>
      {/* SPACE */}
      <div style={{ margin: "30px" }}></div>
      <div className="BlogList">
        {/* BEGIN BLOG ENTRIES */}
        {/* ENTRIE ONE */}
        <motion.div
          transition={{ duration: count() }}
          initial={{ opacity: 0, transform: "translateY(-60px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0)" }}
          viewport={{ once: true }}
        >
          <div
            className="BlogEntrie"
            onClick={() => {
              window.location.href = "/PersonalSite/#/post1";
            }}
          >
            <p>
              <p title="BlogEntrieName">
                Blog
              </p>
            </p>
            <p>A short tutorial about Haskell data</p>
          </div>
        </motion.div>
        {/* SPACE */}
        <div style={{ margin: "30px" }}></div>
        {/* ENTRIE TWO */}
        <motion.div
          transition={{ duration: count() }}
          initial={{ opacity: 0, transform: "translateY(-60px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0)" }}
          viewport={{ once: true }}
        >
          <div
            className="BlogEntrie"
            onClick={() => {
              window.location.href = "/PersonalSite/#/post1";
            }}
          >
            <p>
              <p title="BlogEntrieName">
                Blog
              </p>
            </p>
            <p>A short tutorial about Haskell data</p>
          </div>
        </motion.div>
        {/* SPACE */}
        <div style={{ margin: "30px" }}></div>
        {/* ENTRIE THREE */}
        <motion.div
          transition={{ duration: count() }}
          initial={{ opacity: 0, transform: "translateY(-60px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0)" }}
          viewport={{ once: true }}
        >
          <div
            className="BlogEntrie"
            onClick={() => {
              window.location.href = "/PersonalSite/#/post1";
            }}
          >
            <p>
              <p title="BlogEntrieName">
                Blog
              </p>
            </p>
            <p>A short tutorial about Haskell data</p>
          </div>
        </motion.div>
        {/* SPACE */}
        <div style={{ margin: "30px" }}></div>
      </div>
    </div>
  );
}

export default BlogPosts;
