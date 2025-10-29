import React from 'react';

const Textarea = ({ 
  label, 
  name, 
  placeholder, 
  error, 
  required = false,
  rows = 4,
  className = '',
  ...props 
}) => {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={name} className="block text-sm font-body text-barqar-grey mb-2">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <textarea
        id={name}
        name={name}
        rows={rows}
        placeholder={placeholder}
        className={`
          w-full px-4 py-3 
          border-2 rounded-lg 
          font-cabin font-body
          transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-barqar-green focus:border-barqar-green
          resize-y
          ${error ? 'border-red-500' : 'border-gray-300'}
          ${className}
        `}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${name}-error` : undefined}
        {...props}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default Textarea;

