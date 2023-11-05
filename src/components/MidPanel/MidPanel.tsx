import React, { } from 'react';
import './MidPanel.css';
import { motion, useScroll } from 'framer-motion';

function MidPanel() {

  const { scrollYProgress } = useScroll();

  return (
    <div className="mid-panel">

      <motion.div initial={{ opacity: 0, scale: 0.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}>
        <div className="small-mid-panel ">
          <p className='show-p'> smal  smal ler p anel.</p>
          <motion.div initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2.3, delay: 1 }}
            viewport={{ once: true }}>
            <p>Hello</p>
          </motion.div>

          <motion.div initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2.3, delay: 1 }}
            viewport={{ once: true }}>
            <p> Let me tell you a little bit about myself.</p>
          </motion.div>
          <p className='show-p'>This is a smaller panel.</p>
          <div className='inside-panel'>
            <motion.div initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2.3, delay: 1 }}
              viewport={{ once: true }}>
              <p>1 </p>
              <p>1</p>
              <p>1</p>
            </motion.div>
          </div>
          <p className='show-p'>This is a smaller panel.</p>
        </div>
      </motion.div>

    </div>
  );
}

export default MidPanel;