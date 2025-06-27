import React, { useState } from 'react';
import Hamburger from './Hamburger';
import { navLinks } from '../Constants';
import { motion } from 'motion/react'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  // Variants for the stagger animation
  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  // Navigation items for both desktop and mobile
  const navItems = (className = '', show = true) => (
    <motion.ul
      className={`flex ${className}`}
      variants={listVariants}
      initial="hidden"
      animate={show ? 'visible' : 'hidden'}
    >
      {navLinks.map(({ id, href, name }) => (
        <motion.li
          key={id}
          variants={itemVariants}
          className="text-[#C4CBF5] font-medium hover:text-white"
        >
          <motion.a
            href={href}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 200, damping: 10 }}
            className="inline-block text-neutral-400 hover:text-white"
          >
            {name}
          </motion.a>
        </motion.li>
      ))}
    </motion.ul>
  );

  return (
    <header className="fixed top-0 left-0 h-[9vh] right-0 z-50 bg-black">
      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        <div className="flex justify-between items-center py-5 mx-auto">
          {/* Site Logo */}
          <motion.a
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 10 }}
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors flex flex-row items-center gap-2"
          >
            <div className="w-8 h-8 rounded-full bg-white overflow-hidden">
              <img
                src="/assets/me.jpg"
                alt="me"
                className="w-full h-full object-cover object-[center_40%]"
              />
            </div>
            Yamin
          </motion.a>

          {/* Hamburger Button (mobile only) */}
          <Hamburger isOpen={isOpen} toggle={toggleMenu} />

          {/* Desktop Navigation Links */}
          <nav className="sm:flex hidden">
            {navItems('flex-row items-center gap-10 text-base')}
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ maxHeight: 0, width: '100vw' }}
        animate={{ maxHeight: isOpen ? 500 : 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed overflow-hidden w-full bg-[#030614] sm:hidden z-40"
      >
        <nav className="p-5">
          {navItems('flex-col items-start gap-9 text-base pl-3', isOpen)}
        </nav>
      </motion.div>
    </header>
  );
};

export default Navbar;
