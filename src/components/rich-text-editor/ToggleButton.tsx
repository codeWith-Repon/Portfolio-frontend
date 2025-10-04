/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

interface ToggleButtonProps {
    icon: React.JSX.Element;
    onPressedChange: () => any;
    pressed: boolean;
}
const ToggleButton = ({ icon, pressed, onPressedChange }: ToggleButtonProps) => {
    
  return (
    <button
      type='button'
      onClick={() => onPressedChange()}
      className={` p-3 my-1 rounded-md cursor-pointer transition-colors ${
        pressed ? 'bg-gray-400' : 'bg-white'
      }`}
    >
      {icon}
    </button>
  );
};

export default ToggleButton;
