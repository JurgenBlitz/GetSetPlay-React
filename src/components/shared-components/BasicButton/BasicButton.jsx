import React from 'react';
import './BasicButton.css';

// This button will handle basic actions like Accept, Save, etc.

const BasicButton = ({ className, label, type, action }) => {
  return(
    <button className={className} type={type} onClick={action}>
      {label}
    </button>
  )
}

export default BasicButton;