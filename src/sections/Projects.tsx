import React from 'react'
import Image from 'next/image'
import {FiGithub,FiExternalLink} from 'react-icons/fi'
import Link from 'next/link'
import { motion } from "framer-motion";
function Projects() {
const projectsData=[

    {
        image:"/Project1.png",
        projectName:"Yotube-Clone",
        projectLink:"https://youtube-sigma-six.vercel.app/",
        projectDescription:"Used my skills to make it more interactive and add free which has dynamic data loading from youtube api. ",
        projectTech:[
            "React",
            "Redux Toolkit",
            "Typescript",
            "Youtube-api",
         
        ],
        projectExternalLinks:{
            github:"https://github.com/THARMATT/Youtube.git",
            externalLink:"https://youtube-sigma-six.vercel.app/",
        },

   },
   {
    image:"/Project2.png",
    projectName:"Food-Delivery-Website",
    projectLink:"https://github.com/THARMATT/Food-Delivery-Application.git",
    projectDescription:"Explore my MERN-based food delivery project, featuring real-time tracking and a variety of cuisines ",
    projectTech:[
        "React",
        "Context-Api",
        "Javascript",
        "ExpressJs",
        "NodeJS",
        "MongoDb"
     
    ],
    projectExternalLinks:{
        github:"https://github.com/THARMATT/Food-Delivery-Application.git",
        externalLink:"https://github.com/THARMATT/Food-Delivery-Application.git",
    },

},
{
    image:"/Project3.png",
    projectName:"Instagram-Clone",
    projectLink:"https://github.com/THARMATT/Instagram.git",
    projectDescription:"Crafted a responsive Instagram clone using React, MongoDB, Express, and Node.js to build APIs, showcasing my proficiency in full-stack development",
    projectTech:[
        "React",
       
        "Javascript",
        "Express",
        "NodeJs",
        "React-toastify",
        
        "MongoDb",
      
     
    ],
    projectExternalLinks:{
        github:"https://github.com/THARMATT/Instagram.git",
        externalLink:"https://github.com/THARMATT/Instagram.git",
    },

},

]


  return (
    <div className="projects" id="work">
    <motion.div
      className="title"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2>Some Projects I&apos;ve Built</h2>
    </motion.div>
    <div className="projects-container">
      {projectsData.map(
        ({
          image,
          projectDescription,
          projectLink,
          projectExternalLinks,
          projectName,
          projectTech,
        }) => {
          return (
            <motion.div
              className="project"
              key={projectName}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              variants={{
                visible: { opacity: 1, y: -50 },
                hidden: { opacity: 0, y: 0 },
              }}
            >
              <div className="project-image">
                <div className="project-image-overlay"></div>
                <div className="project-image-container">
                  <Image src={image} fill alt={projectName} quality={100} />
                </div>
              </div>
              <div className="project-info">
                <p className="project-info-overline">Project</p>
                <h3 className="project-info-title">{projectName}</h3>
                <div className="project-info-description">
                  <p>{projectDescription}</p>
                </div>
                <ul className="project-info-tech-list">
                  {projectTech.map((tech) => (
                    <li className="project-info-tech-list-item" key={tech}>
                      {tech}
                    </li>
                  ))}
                </ul>
                <ul className="project-info-links">
                  <li className="project-info-links-item">
                    <Link
                      href={projectExternalLinks.github}
                      className="project-info-links-item-link"
                    >
                      <FiGithub />
                    </Link>
                  </li>
                  <li className="project-info-links-item">
                    <Link
                      href={projectExternalLinks.externalLink}
                      className="project-info-links-item-link"
                    >
                      <FiExternalLink />
                    </Link>
                  </li>
                </ul>
              </div>
            </motion.div>
          );
        }
      )}
    </div>
  </div>
  )
}

export default Projects
