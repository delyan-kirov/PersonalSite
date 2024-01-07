import React from 'react';
import './TopBar.css';
import resume from './Masters_Thesis.pdf';

function TopBar() {
    const handleEmailClick = () => {
        const emailAddress = 'delyan.k.kirov@gmail.com'
        // Generate the mailto link
        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent("")}&body=${encodeURIComponent("")}`;

        // Open the default email client with the pre-filled details
        window.location.href = mailtoLink;
    };
    return (
        <div className="topnav">
            <div className='socials'>
                <a title="projects" href="/PersonalSite/#/projects">Projects</a>
                <a title="blog" href="/PersonalSite/#">About</a>
                <a title="blog" href="/PersonalSite/#/blog">Blog</a>
            </div>
        </div>
    );
}

export default TopBar;
