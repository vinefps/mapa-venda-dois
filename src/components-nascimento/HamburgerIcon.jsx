import React from 'react';

const HamburgerIcon = ({ isOpen }) => {
  return (
    <div className="hamburger-icon w-6 h-5 relative">
      <span 
        className={`
          block 
          absolute 
          h-0.5 
          w-full 
          bg-gray-700 
          rounded 
          transform 
          transition-all 
          duration-300 
          ${isOpen ? 'rotate-45 top-2' : 'top-0'}
        `}
      />
      <span 
        className={`
          block 
          absolute 
          h-0.5 
          w-full 
          bg-gray-700 
          rounded 
          top-2 
          transition-all 
          duration-300 
          ${isOpen ? 'opacity-0' : 'opacity-100'}
        `}
      />
      <span 
        className={`
          block 
          absolute 
          h-0.5 
          w-full 
          bg-gray-700 
          rounded 
          transform 
          transition-all 
          duration-300 
          ${isOpen ? '-rotate-45 top-2' : 'top-4'}
        `}
      />
    </div>
  );
};

export default HamburgerIcon;