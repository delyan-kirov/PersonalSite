import React, { useEffect } from "react";
import "./BlogPosts.css";
import TopBar from "../TopBar/TopBar";
import { motion } from "framer-motion";
import BottomBar from "../BottomBar/BottomBar";

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

  function blogEntrie(Name: string, Discription: string, Link: string) {
    return (
      <motion.div
        transition={{ duration: count() }}
        initial={{ opacity: 0, transform: "translateY(-60px)" }}
        whileInView={{ opacity: 1, transform: "translateY(0)" }}
        viewport={{ once: true }}
      >
        <div className="BlogEntrie">
          <h1>{Name}</h1>
          <p>{Discription}</p>
          <a href={Link}>Read more</a>
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
            "nstead of just pairs, we can also define so called tagged unions. These are like a union of types, except that each type in the union needs it's own named constructor. For example, Foo = Bar Int | Baz Double. In this examole, a variable foo :: Foo is either a Bar Int or a Baz Double, not both. Note that the constructors Baz and Bar distinguish what is the left and right value. So foo = Bar 1, does not mean that foo is of type Int, or of type Bar Int. If you have data Myvar = LeftVar Int | RightVar Int, then the left integer is distinct from the right. Therefore, it's better to think of tagged unions as generating multi-sets, where different values of the same type are distinguished by constructors. In haskell, types can be recursive, this makes it possible to define lists as follows:",
            "/PersonalSite/#/post1",
          )}
          {blogEntrie(
            "Sudoku",
            "A quick demo of my sudoku web application",
            "/PersonalSite/#/sudoku",
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
