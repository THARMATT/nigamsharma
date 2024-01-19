import Link from "next/link";
import React from "react";
import {motion} from 'framer-motion';
import { SiLeetcode } from "react-icons/si";
import {
  FiGithub,
  FiInstagram,
  FiYoutube,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
function Socialicons() {
  const socialLinks = [
    { name: "Github", icon: <FiGithub />, link: "https://github.com/THARMATT" },
    {
      name: "Youtube",
      icon: <FiYoutube />,
      link: "https://youtube.com/@nigam_sharma",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/nigam-sharma",
    },
    {
      name: "Instagram",
      icon: <SiLeetcode />,
      link: "https://leetcode.com/nigam__sharma/",
    },
    {
      name: "Twitter",
      icon: <FiTwitter />,
      link: "https://twitter.com/nigamsharma_",
    },
  ];
  return (
    <motion.div className="social-icons"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1}}
    transition={{
      duration: 0.3,
      ease: "easeInOut",
      delay: 1.95,
    }}>
      <ul className="social-icons-list">
        {socialLinks.map(({ name, icon, link }) => (
          <li key={name} title={name} className="social-icons-list-item">
            <Link href={link} className="social-icons-list-item-link" target="_blank">
{icon}

            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default Socialicons;
