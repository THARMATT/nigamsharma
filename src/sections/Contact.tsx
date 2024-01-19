import Button from '@/components/Button'
import React from 'react'
import {motion} from 'framer-motion'
function Contact() {
  return (
    <motion.div className='contact' id='contact'
    initial="hidden" 
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    variants={{
      visible: { opacity: 1, y: -50 },
      hidden: { opacity: 0, y: 0 },
    }}>
      <h2 className="contact-title">
        What&apos; Next?

      </h2>
      <h2 className="contact-sub-title">
        Get In Touch
      </h2>
      <p className="contact-text">
      I&apos;m a web developer with a knack for crafting delightful online experiences. Let&apos; build something remarkable together!
      </p>
      <div className="contact-cta button">
     <Button text="Say hello" link="mailto:nigmshrma@gmail.com"/>
      </div>
    </motion.div>
  )
}

export default Contact
