import React, { useEffect } from "react";
import "./BlogPosts.css";
import TopBar from "../TopBar/TopBar";
import { motion } from "framer-motion";
import BottomBar from "../BottomBar/BottomBar";

function BlogPosts() {
  var i = 0.3;
  useEffect(() => {
    // Cleanup function to reset i when leaving the page
    return () => {
      // eslint-disable-next-line
      i = 0.3;
    };
  }, []);

  function count(): number {
    i = 1.2 * i;
    console.log(i);
    return i;
  }

  function blogEntrie(blogEntrieName: string, blogEntrieDiscription: string) {
    return (
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
          <h2>{blogEntrieName}</h2>
          <p>{blogEntrieDiscription}</p>
        </div>
        <br />
      </motion.div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <TopBar />
        {/* SPACE */}
        <div style={{ margin: "50px" }}></div>

        <div className="BlogList">
          {/* BEGIN BLOG ENTRIES */}
          {blogEntrie("haskell", "a short tutorial about haskell data")}
          {blogEntrie("haskell", "a short tutorial about haskell data")}
          {blogEntrie("haskell", "a short tutorial about haskell data")}
        </div>

        <div style={{ margin: "30px" }}></div>
        <div style={{ margin: "30px" }}></div>

        <BottomBar />
      </header>
    </div>
  );
}

export default BlogPosts;
