import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SlideIn = ({ 
  children, 
  isVisible,
  direction = 'right',
  className = '',
}) => {
  const directions = {
    right: { x: '100%' },
    left: { x: '-100%' },
    top: { y: '-100%' },
    bottom: { y: '100%' },
  };

  const variants = {
    hidden: directions[direction],
    visible: { 
      x: 0,
      y: 0,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 120,
      }
    },
    exit: {
      ...directions[direction],
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 120,
      }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SlideIn;

