import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const NumberCounter = ({ 
  from = 0, 
  to, 
  duration = 2,
  suffix = '',
  className = '',
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, {
        duration,
        ease: 'easeOut',
      });

      return controls.stop;
    }
  }, [inView, count, to, duration]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      setDisplayValue(latest);
    });

    return unsubscribe;
  }, [rounded]);

  return (
    <span ref={ref} className={className}>
      {displayValue}{suffix}
    </span>
  );
};

export default NumberCounter;

