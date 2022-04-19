import React, { useContext } from "react";
import { FormContext } from "../Login";
import './Input.css';

function Input({ labelFor, name, inputType, inputId }) {
  const FormContextProvider = useContext(FormContext);

  return (
    <div className="input-wrapper">
      <label htmlFor={labelFor}>{name}</label>
      <input className={`${name}-input`} type={inputType} id={inputId} name={name} value={FormContextProvider.form[name]} onChange={FormContextProvider.handleFormChange} />
    </div>
  );
}

export default Input;