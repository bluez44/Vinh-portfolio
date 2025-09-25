import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function SocialList({size = 24}) {
  return (
    <>
      <a
        href="https://www.linkedin.com/in/quang-vinh-485331286/"
        target="_blank"
      >
        <FaLinkedin size={size}/>
      </a>
      <a href="https://github.com/bluez44" target="_blank">
        <FaGithub size={size}/>
      </a>
      <a href="https://www.facebook.com/vlqvinh.44" target="_blank">
        <FaFacebook size={size}/>
      </a>
    </>
  );
}

export default SocialList;
