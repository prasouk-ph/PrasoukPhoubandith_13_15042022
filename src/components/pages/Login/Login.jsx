import React, { createContext, useContext, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Input from './Input/Input';
import { LoginStateContext } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import './Login.css';
import { addItem } from '../../../services/LocaleStorage'
import { login } from "../../../services/login";

export const FormContext = createContext('');

function Login() {
  let navigate = useNavigate();
  const { isLogged, setIsLogged } = useContext(LoginStateContext);
  const [formValue, setFormValue] = useState({
      email: '',
      password: ''
  });
  const [loginFailure, setLoginFailure] = useState()

  function handleFormChange(event) {
    const { name, value } = event.target;

    const updatedForm = {
      ...formValue, // get a copy of form because can't edit an array directly
      [name]: value // change property according to name and set new value
    };

    setFormValue(updatedForm); // replace form by updatedForm without editing form
  }


  async function handleSubmit(event) {
    event.preventDefault()
    try {
      const response = await login(formValue)
      
      const token = response.data.body.token

      if (token) {
        setIsLogged(true)
        addItem("token", token)
        navigate("/user");
      }
    } catch ({response}) {
      if (response.status !== 200)
        setLoginFailure(true)
    }
  }

  return !isLogged ?
  (
    <main className="login-main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon className='sign-in-icon' icon={faUserCircle} />
        <h1>Sign In</h1>
        
        <form onSubmit={handleSubmit}>
          <FormContext.Provider value={{formValue: formValue, handleFormChange: handleFormChange}}> {/* should pass an object to pass multiple things */}
            <Input name="email" inputType="text" inputId="email" />
            <Input name="password" inputType="password" inputId="password" />
          
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            
            <button className="sign-in-button" disabled={(formValue.email === "" || formValue.password === "") && true}>Sign In</button>
            
            {loginFailure && (<p className="error-message">Email ou mot de passe incorrecte !</p>)}
          </FormContext.Provider>
        </form>
      </section>
    </main>
  ) :
  (<Navigate to="/user" />)
}

export default Login;