import React from 'react';

const Container = ({ children, className = '', size = 'default' }) => {
  const sizes = {
    small: 'max-w-4xl',
    default: 'max-w-7xl',
    large: 'max-w-screen-2xl',
    full: 'max-w-full',
  };

  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${sizes[size]} ${className}`}>
      {children}
    </div>
  );
};

export default Container;

