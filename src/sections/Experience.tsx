import Link from "next/link";
import React, { useEffect, useState } from "react";

import {motion} from 'framer-motion'
function Experience() {
  const [selected, setSelected] = useState(0);
  useEffect(() => {
   const transformSelected=()=>{
    const underline=document.querySelector<HTMLElement>(".underline");
    underline!.style.top=`${selected*2.5}rem`;
   };
   transformSelected();
  }, [selected]);
 
  
  const experience = [
    {
      name: "Space Window",
      role: "Frontend Developer",
      url: "",
      start: "Feburary 2023",
      end: "August 2021",
      shortDescription: [
        "I work on commercial projects",
        "Throughout my work, I have utilized various MERN stack technologies,Redux,Typescript",
        "I also teach my juniors about basic web Development",
        "Additionally, I've represented the company in client meetings",
      ],
    },
    {
        name: "InfoTechmon",
        role: "Java Trainee",
        url: "",
        start: "August 2022",
        end: "Sept 2022",
        shortDescription: [
          "I work on commercial projects",
          "Throughout I developed my personality  ",
          "Additionally, I've represented the company in client meetings",
        ],
      },
    {
      name: "Space Window",
      role: "Frontend Developer",
      url: "",
      start: "Feburary 2023",
      end: "August 2021",
      shortDescription: [
        "I work on commercial projects",
        "Throughout my work, I have utilized various MERN stack technologies,Redux,Typescript",
        "I also teach my juniors about basic web Development",
        "Additionally, I've represented the company in client meetings",
      ],
    },
    {
      name: "InfoTechmon",
      role: "Java Trainee",
      url: "",
      start: "August 2022",
      end: "Sept 2022",
      shortDescription: [
        "I work on commercial projects",
        "Throughout I developed my personality  ",
        "Additionally, I've represented the company in client meetings",
      ],
    },
  ];
  return (
    <motion.div className="experience" id="experience"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    variants={{
      visible: { opacity: 1, y: -50 },
      hidden: { opacity: 0, y: 0 },
    }}>
      <div className="title">
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"> </div>
          {experience.map((experience, index) => {
            return (
              <li
                key={index}
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
              >
                <span>{experience.name}{" "}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{experience[selected].role}{"  "}</span>
              <span className="exp-details-position-company">
                <Link className="link" href={experience[selected].url}>
                  {experience[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range" style={{color:"#8892b0"}}>
              {experience[selected].start}-{experience[selected].end}
            </p>
            <ul className="exp-details-list">
              {experience[selected].shortDescription.map( (description,index)=>(
                <li key={index} className="exp-details-list-item">
                  {description}
                </li>)
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
