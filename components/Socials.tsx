import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import React from "react";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/x47base" },
    { icon: <FaLinkedin />, path: "https://www.linkedin.com/" },
    { icon: <FaYoutube />, path: "https://www.youtube.com/channel/UCP7Ite4Y6WpV-TtXRaoQH1w" },
];

type SocialsProps = {
  containerStyle: string;
  iconStyle: string;
};

const Socials: React.FC<SocialsProps> = ({ containerStyle, iconStyle }) => {
  return (
    <div className={containerStyle}>
      {socials.map((social, index) => (
        <Link
          key={index}
          href={social.path}
          target="_blank"
          className={iconStyle}
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
}

export default Socials;
