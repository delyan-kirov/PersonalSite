import React, { useRef } from "react";
import "./BlogPosts.css";
import TopBar from '../TopBar/TopBar';

function BlogPosts() {
    return (
        <div className="BlogPosts">
            <div className="TopBar">
                <TopBar />
            </div>
            <div className="Title">
                <a>Hello from BlogPosts!!!</a>
            </div>
            <div style={{ margin: "25px" }}></div>
            <div className="BlogList">
                <div className="BlogEntrie" onClick={() => { window.location.href = "/PersonalSite/#/post1"; }}>
                    <p>
                        <a title="blog">
                            Blog
                        </a>
                    </p>
                    <p>A short tutorial about Haskell data</p>
                </div>
            <div style={{ margin: "25px" }}></div>
                <div className="BlogEntrie" onClick={() => { window.location.href = "/PersonalSite/#/post1"; }}>
                    <p>
                        <a title="blog">
                            Blog
                        </a>
                    </p>
                    <p> Something else </p>
                </div>
            </div>
        </div>
    );
}

export default BlogPosts;
