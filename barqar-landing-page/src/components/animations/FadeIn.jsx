import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FadeIn = ({ 
  children, 
  delay = 0, 
  duration = 0.6,
  direction = 'up',
  className = '',
  once = true,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: 0.1,
  });

  const directions = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
  };

  const variants = {
    hidden: { 
      opacity: 0,
      ...directions[direction]
    },
    visible: { 
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;

