import React, { useRef } from "react";
import "./BlogPosts.css";

function BlogPosts() {
  return (
    <div style={{ fontSize: 24, margin: '1%' }}>
      <a>Hello from BlogPosts!!!</a>
      <div>
        <p>
          <a title="blog" href="/PersonalSite/#/post1">
            Blog
          </a>
        </p>
        <p>
          <a title="blog" href="/PersonalSite/#/post1">
            Blog
          </a>
        </p>
      </div>
    </div>
  );
}

export default BlogPosts;
