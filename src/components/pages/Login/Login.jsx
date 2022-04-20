import React, { createContext, useContext, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Input from './Input/Input';
import { LoginStateContext } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import './Login.css';

export const FormContext = createContext('');

function Login() {
  let navigate = useNavigate();
  const { isLogged, setIsLogged } = useContext(LoginStateContext);

  const [formValue, setFormValue] = useState({
      username: '',
      password: ''
  });

  function handleFormChange(event) {
    const { name, value } = event.target;

    const updatedForm = {
      ...formValue, // get a copy of form because can't edit an array directly
      [name]: value // change property according to name and set new value
    };

    setFormValue(updatedForm); // replace form by updatedForm without editing form
  }

  function handleSubmit(event) {
    event.preventDefault()
    setIsLogged(true)
    navigate("/user");
  }

  return !isLogged ?
  (
    <main className="login-main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon className='sign-in-icon' icon={faUserCircle} />
        <h1>Sign In</h1>
        
        <form onSubmit={handleSubmit}>
          <FormContext.Provider value={{formValue: formValue, handleFormChange: handleFormChange}}> {/* should pass an object to pass multiple things */}
            <Input name="username" inputType="text" inputId="username" />
            <Input name="password" inputType="password" inputId="password" />
          
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            
            <button className="sign-in-button" disabled={(formValue.username === "" || formValue.password === "") && true}>Sign In</button>
          </FormContext.Provider>
        </form>
      </section>
    </main>
  ) :
  (<Navigate to="/user" />)
}

export default Login;