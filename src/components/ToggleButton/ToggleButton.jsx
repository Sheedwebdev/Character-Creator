import React from 'react';

import styles from './ToggleButton.module.css';

/* Make sure to add radio buttons for better accessibility for keyboard users!!! 
Make sure to implement radio buttons on Wave 2 of doing this workshop!!! */ 

const ToggleButton = ({
  label,
  color,
  children,
  isSelected,
  ...delegated
}) => {
  return (
    <button
      {...delegated}
      aria-pressed={isSelected}
      className={styles.toggleButton}
      style={{ backgroundColor: color }}
    >
      <span className="visually-hidden">{label}</span>
      {children}
    </button>
  );
};

export default ToggleButton; 
/* The ToggleButton Component will be imported 
into the ControlPane Component and embedded into the 
ButtonRow Component */ 

/* Code Snippet */

/* <ButtonRow>
        {options.map(({ id, label, color, children }) => (
          <ToggleButton
            key={id}
            isSelected={currentOption === id}
            onClick={() => handleSelectOption(id)}
            label={label}
            color={color}
          >
            {children}
          </ToggleButton>
        ))}
      </ButtonRow>
 */ 

