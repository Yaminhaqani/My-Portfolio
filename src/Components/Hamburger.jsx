// components/Hamburger.jsx
import { motion } from 'motion/react';
import React from 'react';

const Hamburger = ({ isOpen, toggle }) => {
  return (
    <motion.button
    whileTap={{scale:0.8}}
    transition={{type:"spring", damping:5, stiffness:90}}
      onClick={toggle} 
      className="toggle w-[32px] h-[32px] relative flex flex-col items-center justify-center gap-[7px] cursor-pointer sm:hidden z-50"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      {/* Bar 1 */}
      <motion.div
        className="w-full h-[2.8px] bg-white rounded origin-left "
        initial={{ y: 0, x:0, rotate: 0 }}
        animate={{
          y: isOpen ? 26 : 0,
          x: isOpen ? 36 : 0,
          rotate: isOpen ? -150 : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{ }}
      />

      {/* Bar 2 */}
      <motion.div
        className=" w-full h-[2.8px] bg-white rounded origin-right"
        initial={{  y: 0, x:0, rotate: 0}}
        animate={{
          y: isOpen ? -16 : 0,
          x: isOpen ? 4 : 0,
          rotate: isOpen ? -31 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Bar 3 */}
      <motion.div
        className="w-full h-[2.8px] bg-white rounded"
        initial={{  y: 0, x:0, rotate: 0 }}
        animate={{
            y: isOpen ? -10 : 0,
            x:  isOpen ? 20 : 0,
          rotate: isOpen ? 90 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Optional: Animate container rotation too */}
      <motion.div
        className="absolute inset-0"
        initial={{ rotate: 0 }}
        animate={{ rotate: isOpen ? -90 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: 'none', transformOrigin: 'center' }}
      />
    </motion.button>
  );
};

export default Hamburger;