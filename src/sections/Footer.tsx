import Link from "next/link";
import React from "react";
import {motion} from 'framer-motion'
import {
  FiGithub,
  FiInstagram,
  FiYoutube,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

function Footer() {

    const footerLinks = [
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
    <footer>
       <motion.div className="footer-icons"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1}}
    transition={{
      duration: 0.3,
      ease: "easeInOut",
      delay: 1.95,
    }}>
      <ul className="footer-icons-list">
        {footerLinks.map(({ name, icon, link }) => (
          <li key={name} title={name} className="footer-icons-list-item">
            <Link href={link} className="footer-icons-list-item-link" id ="footerlink" target="_blank">
{icon}

            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
    </footer>
  );
}

export default Footer;