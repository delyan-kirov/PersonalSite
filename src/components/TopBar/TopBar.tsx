import React from "react";
import "./TopBar.css";

function TopBar() {
  const handleEmailClick = () => {
    const emailAddress = "delyan.k.kirov@gmail.com";
    // Generate the mailto link
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent("")
      }&body=${encodeURIComponent("")}`;

    // Open the default email client with the pre-filled details
    window.location.href = mailtoLink;
  };
  return (
    <div className="TopBar">
      <div className="socials">
        <a title="About" href="/PersonalSite/#">About</a>
        <a title="Blog" href="/PersonalSite/#/blog">Blog</a>
      </div>
    </div>
  );
}

export default TopBar;
