import React, { } from 'react';
import './FullPanel.css';
import { motion, useScroll } from 'framer-motion';

function SquarePanel() {

  const { scrollYProgress } = useScroll();

  return (
    <div className="square-panel">

      <motion.div
        transition={{ duration: 1 }}
        initial={{ opacity: 0, transform: 'translateY(-40px)' }}
        whileInView={{ opacity: 1, transform: 'translateY(0)' }}
        viewport={{ once: true }}>
        <div className='title'>
          Delyan Kirov
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, transform: 'translateY(-60px)' }}
        whileInView={{ opacity: 1, transform: 'translateY(0)' }}
        transition={{ duration: 2, delay: 0.5 }}
        viewport={{ once: true }}>
        <div className="smaller-panel">
          <p className='show-p'>This is a smaller panel Tpansmal  smal  smal ler p anel.</p>
          <p> Hello!</p>
          <br></br>
          <p> Let me tell you a little bit about myself.</p>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </motion.div>

      <div>
        <p className='show-p'>T1</p>
        <p>Here's a little bit of what I've been up to!</p>
        <p className='show-p'>T1</p>
      </div>
    </div >
  );
}

export default SquarePanel;