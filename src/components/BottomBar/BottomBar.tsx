import React from 'react';
import './BottomBar.css';
import resume from './resume.pdf';

function TopBar() {
  const handleEmailClick = () => {
    const emailAddress = 'delyan.k.kirov@gmail.com'
    // Generate the mailto link
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent("")}&body=${encodeURIComponent("")}`;

    // Open the default email client with the pre-filled details
    window.location.href = mailtoLink;
  };
  return (
    <div className="bottomNav">
      <div className='socials'>
        <a title='github' href="https://github.com/delyan-kirov/">
          <img src={require("./github.png")} alt="github" style={{ width: '40px', height: '40px' }} />
        </a>
        <a title='email' href="" onClick={handleEmailClick}>
          <img src={require("./email.png")} alt="email" style={{ width: '40px', height: '40px' }} />
        </a>
        <a title='linkedin' href="https://www.linkedin.com/in/delyan-kirov-7132401a6">
          <img src={require("./linkedin.png")} alt="linkedin" style={{ width: '40px', height: '40px' }} />
        </a>
        <a title="resume" href={resume} target="_blank" rel="noopener noreferrer">
          <img src={require("./resume.png")} alt="resume" style={{ width: '40px', height: '40px' }} />
        </a>
        <a title="blog" href="/PersonalSite/#/blog">
          <img src={require("./blog.png")} style={{ width: '40px', height: '40px' }} />
        </a>
      </div>
    </div>
  );
}

export default TopBar;
