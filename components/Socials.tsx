import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import React from "react";
import { motion } from "framer-motion";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/x47base" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/samuel-h-spink" },
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
        <motion.div
          key={index}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
            href={social.path}
            target="_blank"
            className={iconStyle}
          >
            {social.icon}
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

export default Socials;
