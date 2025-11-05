import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className, ...props }) => {
  const baseClasses = "px-7 py-3 font-semibold rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center space-x-2";
  
  const variantClasses = {
    primary: 'bg-secondary text-primary hover:bg-opacity-90 focus:ring-secondary focus:ring-offset-primary shadow-[0_0_15px_rgba(0,255,135,0.4)] hover:shadow-[0_0_25px_rgba(0,255,135,0.6)]',
    outline: 'bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary focus:ring-secondary focus:ring-offset-primary',
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;