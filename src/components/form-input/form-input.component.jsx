import React from 'react';
import './form-input.style.scss';

const FormInput = ({ handleChange, label, ...otherprops }) => {
  return (
    <div className={group}>
      <input type="text" className='form-input' onChange={handleChange} {...otherprops} />
    </div>
  )
}

export default FormInput;
