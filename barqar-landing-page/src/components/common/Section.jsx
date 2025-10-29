import React from 'react';

const Section = ({ 
  children, 
  className = '', 
  background = 'light',
  padding = 'default',
  id,
  ...props 
}) => {
  const backgrounds = {
    light: 'bg-white',
    dark: 'bg-barqar-blue text-white',
    black: 'bg-barqar-black text-white',
    grey: 'bg-gray-50',
    gradient: 'bg-gradient-to-br from-barqar-blue to-barqar-black text-white',
  };

  const paddings = {
    none: '',
    small: 'py-12',
    default: 'py-20',
    large: 'py-32',
  };

  return (
    <section 
      id={id}
      className={`${backgrounds[background]} ${paddings[padding]} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;

