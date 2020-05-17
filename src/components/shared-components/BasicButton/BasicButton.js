import React from 'react';

const BasicButton = ({ label, action }) => {
  return(
    <button className="basicButton" onClick={action}>
      {label}
    </button>
  )
}

export default BasicButton;