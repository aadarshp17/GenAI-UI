// src/Dropdown.js
import React, { useState } from 'react';
import './DropDown.css';

const DropDown = ({ options, onSelect }) => {
  const [selected, setSelected] = useState('Choose Model');
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        {selected}
        <span className={`arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </div>
      {isOpen && (
        <ul className="dropdown-list">
          {options.map((option, index) => (
            <li key={index} onClick={() => handleSelect(option)}>
                <img src={`../public/${index + 1}`} className="dropdown-image" />
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;