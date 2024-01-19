import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
function About() {
  return (
    <motion.div
      className="about "
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            B.Tech graduate from Himachal Pradesh Technical University with a
            focus on holistic development. Led Computer Science department to
            sports victory, emphasizing teamwork and personal growth alongside
            academic excellence.{" "}
          </p>
          <p className="about-grid-info-text">
            Excelled in academics and extracurriculars, serving as Kabaddi
            captain, NCC cadet, and actively engaging in debate and personal
            growth, ultimately achieving 93% in 12th grade (Non-Medical) at
            Garhi Higher Secondary.
          </p>
          <p className="about-grid-info-text">
            Four-year Kabaddi team captain with junior and sub-junior victories.
            Achievements include a junior district-level bronze in Wushu Karate
            and success in badminton, table tennis, cricket, volleyball, and
            athletics.{" "}
          </p>
          <p className="about-grid-info-text">
            I am proficient in C, C++, and Java, but my true passion lies in web
            development. I am particularly enthusiastic about mastering Full
            Stack web development to excel in this field.
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">Express</li>
            <li className="about-grid-info-list-item">MongoDb</li>
            <li className="about-grid-info-list-item">NodeJS</li>
            <li className="about-grid-info-list-item">CSS</li>
            <li className="about-grid-info-list-item">HTML</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">JavaScript</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay">
            <div className="overlay-border">
              <div className="about-grid-photo-container">
                <Image src="/nigam.jpg" alt="" fill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
