import React, { useState } from 'react';
import './customCheckbox.css';

const CustomCheckbox = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className={`checkbox-container ${isChecked ? 'checked' : ''}`}>
      {label}
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
    </label>
  );
};

export default CustomCheckbox;
