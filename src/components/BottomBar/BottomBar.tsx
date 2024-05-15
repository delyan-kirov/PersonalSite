import "./BottomBar.css";
import resume from "./resume.pdf";
import githubIcon from "./github.png";
import emailIcon from "./email.png";
import linkedinIcon from "./linkedin.png";
import resumeIcon from "./resume.png";
import blogIcon from "./blog.png";

const emailAddress = "delyan.k.kirov@gmail.com";

function TopBar() {
  const handleEmailClick = () => {
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      "",
    )
      }&body=${encodeURIComponent("")}`;
    window.location.href = mailtoLink;
  };

  const socialIcons = [
    {
      title: "github",
      href: "https://github.com/delyan-kirov/",
      icon: githubIcon,
    },
    { title: "email", onClick: handleEmailClick, icon: emailIcon },
    {
      title: "linkedin",
      href: "https://www.linkedin.com/in/delyan-kirov-7132401a6",
      icon: linkedinIcon,
    },
    {
      title: "resume",
      href: resume,
      target: "_blank",
      rel: "noopener noreferrer",
      icon: resumeIcon,
    },
    { title: "blog", href: "/PersonalSite/#/blog", icon: blogIcon },
  ];

  return (
    <div className="bottomNav">
      <div className="socials">
        {socialIcons.map((icon, index) => (
          <a
            key={index}
            title={icon.title}
            href={icon.href}
            onClick={icon.onClick}
            target={icon.target}
            rel={icon.rel}
          >
            <img
              src={icon.icon}
              alt={icon.title}
              style={{
                width: "2pc",
                height: "2pc",
              }}
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default TopBar;
