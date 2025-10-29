import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  type = 'button',
  className = '',
  ...props 
}) => {
  const baseStyles = 'font-cabin font-body rounded-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-barqar-green text-barqar-black hover:bg-opacity-90 focus:ring-barqar-green/50',
    secondary: 'bg-barqar-blue text-white hover:bg-opacity-90 focus:ring-barqar-blue/50',
    outline: 'border-2 border-barqar-green text-barqar-green hover:bg-barqar-green hover:text-barqar-black focus:ring-barqar-green/50',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  };
  
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

