import React from 'react'

const Button: React.FC<React.DOMAttributes<HTMLElement>> = ({
  children,
  ...props
}) => {
  return (
    <button
      className="bg-blue-gradient rounded-[10px] py-[20px] px-[33px] font-poppins text-[16px] capitalize cursor-pointer"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button