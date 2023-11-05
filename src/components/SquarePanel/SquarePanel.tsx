import React, { } from 'react';
import './SquarePanel.css';
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

      {/* <motion.div
        transition={{ duration: 1, ease: "circIn" }}
        initial={{ opacity: 1, rotate: 0, scale: 1 }}
        animate={{ opacity: 0, rotate: 1000, scale: 1.2 }}
        exit={{ opacity: 0 }}
        className='iconic'
      >
        <div className='icon'>
        </div>
      </motion.div> */}

      <motion.div initial={{ opacity: 0, transform: 'translateY(-60px)' }}
        whileInView={{ opacity: 1, transform: 'translateY(0)' }}
        transition={{ duration: 2, delay: 0.5 }}
        viewport={{ once: true }}>
        <div className="smaller-panel">
          <p className='show-p'>This is a smaller panel Tpansmal  smal  smal ler p anel.</p>
          <p> Hello!</p>

          <motion.div
            transition={{ duration: 100, }}
            animate={{ opacity: 1, rotate: 1000, scale: 1.2 }}>
            <img src={require("./icon.png")} style={{ width: '200px', height: '200px' }} />
          </motion.div>

          <p> Let me tell you a little bit about myself.</p>
          <p className='show-p'>This is a smaller panel.</p>
          <p className='show-p'>This is a smaller panel.</p>
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