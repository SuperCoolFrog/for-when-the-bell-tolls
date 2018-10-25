import React from 'react';
import './time-input.css';

const TimeInput = ({ label, value, onChange, errorMessage }) => {
  const id = `time-input-${label.replace(' ', '')}`;

  return (
    <div className='time-input-component'>
      <div className='time-input'>
        <label htmlFor={id}>
          {label}
        </label>
        <input id={id}  type='text' value={value} onChange={onChange}/>
      </div>
      <div className="error-message">
      { !!errorMessage && errorMessage }
      </div>
    </div>
  );
};

export default TimeInput;
