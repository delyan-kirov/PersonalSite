import React, { } from 'react';
import './FullPanel.css';
import { motion } from 'framer-motion';

function SquarePanel() {

  // const { scrollYProgress } = useScroll();

  return (
    <div className="square-panel">

      <motion.div
        transition={{ duration: 0.6 }}
        initial={{ opacity: 0, transform: 'translateY(-40px)' }}
        whileInView={{ opacity: 1, transform: 'translateY(0)' }}
        viewport={{ once: true }}>
        <div className='title'>
          Delyan Kirov
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, transform: 'translateY(-60px)' }}
        whileInView={{ opacity: 1, transform: 'translateY(0)' }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}>
        <div className="smaller-panel">
          <p> Hello!</p>
          <br></br>
          <p> Let me tell you a little bit about myself.</p>
          <br></br>
        </div>
      </motion.div>

      <div>
          <p className='show-p'></p>
          <br></br>
          <p>Here's a little bit of what I've been up to!</p>
          <br></br>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <br></br>
          <br></br>
      </div>
    </div >
  );
}

export default SquarePanel;
