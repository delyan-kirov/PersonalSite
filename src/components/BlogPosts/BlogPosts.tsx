import React, { useEffect } from "react";
import "./BlogPosts.css";
import TopBar from "../TopBar/TopBar";
import { motion } from "framer-motion";
import BottomBar from "../BottomBar/BottomBar"

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
    return (
        <div className="BlogPosts">
            <TopBar />
            {/* SPACE */}
            <div style={{ margin: "50px" }}></div>
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
