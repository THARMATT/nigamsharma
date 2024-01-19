import Button from "@/components/Button";
import React from "react";
import { motion } from "framer-motion";
function Hero() {
  return (
    <div className="hero">
      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.6
        }}
      >
        Hi My Name is
      </motion.h1>
      <motion.h2 className="hero-title-large"
         initial={{ opacity: 0, y: 5 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{
           duration: 0.3,
           ease: "easeInOut",
           delay: 0.75
         }}>Nigam Sharma.</motion.h2>
      <motion.h3 className="hero-title-large hero-title-sub"
         initial={{ opacity: 0, y: 5 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{
           duration: 0.3,
           ease: "easeInOut",
           delay: 1.05
         }}>
        I craft things for web.
      </motion.h3>
      <motion.p className="hero-text"   initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.5
        }}>
        I&apos;m a Software Engineer who has keen interest in web development.
        <br /> I Love to design and develop webites.
      </motion.p>
      <motion.div className="hero-button"   initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.65
        }}>
        <Button text="View My Resume" link="https://drive.google.com/file/d/1A6pTEiNeXgSCE-POAVAHUotcGWrr5OUi/view?usp=drivesdk" />
      </motion.div>
    </div>
  );
}

export default Hero;
