
import React, { useState } from 'react';

type InputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

const InputField:React.FC<InputProps>= (props) => {

  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(event.target.value);
  };

  return (
    <div>
      <label>{props.label}</label>
      <input type="text" value={props.value} onChange={handleChange} />
    </div>
  );
};

export default InputField;


