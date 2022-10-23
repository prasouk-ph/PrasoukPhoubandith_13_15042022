import React, { useContext } from "react";
import { FormContext } from "../Login";
import './Input.css';

function Input({ name, inputType, inputId }) {
  const { formValue, handleFormChange } = useContext(FormContext);

  return (
    <div className="input-wrapper">
      <label htmlFor={name}>{name}</label>
      <input className={`${name}-input`} type={inputType} id={inputId} name={name} value={formValue[name]} onChange={handleFormChange} placeholder={formValue.inputType} />
    </div>
  );
}

export default Input;