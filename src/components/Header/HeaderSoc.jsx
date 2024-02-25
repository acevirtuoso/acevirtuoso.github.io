import React from "react";
import {
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineGithub,
} from "react-icons/ai";

const HeaderSoc = () => {
  return (
    <div className="Header_socials">
      <a
        href="https://www.linkedin.com/in/aly-mohamed-9126a8264/"
        target="_blank"
        rel="noopener noreferrer"
        className="links"
      >
        <AiOutlineLinkedin />
      </a>
      <a
        href="https://github.com/acevirtuoso"
        target="_blank"
        rel="noopener noreferrer"
        className="links"
      >
        <AiOutlineGithub />
      </a>
      {/* <a href = "https://www.instagram.com/aly_osama/" target="_blank" rel="noopener noreferrer" className="links"><AiOutlineInstagram/></a> */}
    </div>
  );
};

export default HeaderSoc;
