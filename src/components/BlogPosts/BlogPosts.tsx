import React, { useEffect } from "react";
import "./BlogPosts.css";
import TopBar from "../TopBar/TopBar";
import { motion } from "framer-motion";
import BottomBar from "../BottomBar/BottomBar";
import PorstPhoto1 from "../Posts/mytikzpicture.png";
import PorstPhoto2 from "../Posts/sudoku.png";

function BlogPosts() {
  var i = 0.4;
  useEffect(() => {
    // Cleanup function to reset i when leaving the page
    return () => {
      // eslint-disable-next-line
      i = 0.3;
    };
  }, []);

  function count(): number {
    i = 1.01 * i;
    console.log(i);
    return i;
  }

  function blogEntrie(
    Name: string,
    Discription: string,
    Link: string,
    Pic: string,
  ) {
    return (
      <motion.div
        transition={{ duration: count() }}
        initial={{ opacity: 0, transform: "translateY(-60px)" }}
        whileInView={{ opacity: 1, transform: "translateY(0)" }}
        viewport={{ once: true }}
      >
        <div className="smaller-panel">
          <div className="BlogEntrie">
            <img
              className="PostEntryImage"
              src={Pic}
            />
            <h1>{Name}</h1>
            <p>{Discription}</p>
            <a href={Link}>Read more</a>
          </div>
        </div>
        <br />
      </motion.div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <TopBar />
        <div style={{ margin: "50px" }}></div>

        <div className="BlogList">
          {blogEntrie(
            "Haskell",
            "A short Haskell tutorial",
            "/PersonalSite/#/post1",
            PorstPhoto1,
          )}
          {blogEntrie(
            "Sudoku",
            "A quick demo of my sudoku web application",
            "/PersonalSite/#/sudoku",
            PorstPhoto2,
          )}
        </div>

        <div style={{ margin: "30px" }}></div>
        <div style={{ margin: "30px" }}></div>

        <BottomBar />
      </header>
    </div>
  );
}

export default BlogPosts;
