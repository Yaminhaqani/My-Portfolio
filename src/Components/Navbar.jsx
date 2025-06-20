import React, { useState } from 'react';
import Hamburger from './Hamburger';
import { navLinks } from '../Constants';
import { motion } from 'motion/react'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const navItems = (className = '') => {
    return (
      <ul className={`flex ${className}`}>
        {navLinks.map(({ id, href, name }) => (
          <li
            key={id}
            className='text-[#C4CBF5] font-medium hover:text-white'
          >
            <motion.a
              href={href}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              transition={{ type: 'spring', stiffness: 200, damping: 10 }}
              className='inline-block text-neutral-400 hover:text-white'
            >
              {name}
            </motion.a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <header className='fixed top-0 left-0  h-[8vh] right-0 z-50 bg-black'>
      <div className='max-w-7xl mx-auto px-5 sm:px-10'>
        <div className='flex justify-between items-center py-5 mx-auto'>
          {/* Site Logo */}
          <motion.a
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 10 }}
            href="/"
            className='text-neutral-400 font-bold text-xl hover:text-white transition-colors'
          >
            Yamin
          </motion.a>

          {/* Hamburger Button (mobile only) */}
          <Hamburger isOpen={isOpen} toggle={toggleMenu} />

          {/* Desktop Navigation Links */}
          <nav className='sm:flex hidden'>
            {navItems('flex-row items-center gap-10 text-base')}
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ maxHeight: 0, width: '100vw'}}
        animate={{ maxHeight: isOpen ? 500 : 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed overflow-hidden w-full bg-[#030614] sm:hidden z-40"
      >
        <nav className='p-5'>
          {navItems('flex-col items-start gap-9 text-base pl-3')}
        </nav>
      </motion.div>
    </header>
  );
};

export default Navbar;
