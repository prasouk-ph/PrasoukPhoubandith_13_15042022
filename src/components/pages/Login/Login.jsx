import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from './Input/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import './Login.css';

export const FormContext = createContext();

function Login() {
  let navigate = useNavigate();

  const [form, setForm] = useState({
      username: '',
      password: ''
  });

  function handleFormChange(event) {
    const { name, value } = event.target;

    const updatedForm = {
      ...form, // get a copy of form because can't edit it directly
      [name]: value // change property according to name and set new value
    };

    setForm(updatedForm); // replace form by updatedForm without editing form
  }

  function handleSubmit(event) {
    event.preventDefault()
    navigate("/user");
  }

  return (
    <main className="login-main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon className='sign-in-icon' icon={faUserCircle} />
        <h1>Sign In</h1>
        
        <form onSubmit={handleSubmit}>
          <FormContext.Provider value={{form: form, handleFormChange: handleFormChange}}> {/* give load state to every children */}
            <Input labelFor="username" name="username" inputType="text" inputId="username" />
            <Input labelFor="password" name="password" inputType="password" inputId="password" />
          </FormContext.Provider>
          
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          
          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
}

export default Login;