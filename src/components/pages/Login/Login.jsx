import React, { createContext, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Input from './Input/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import './Login.css';
import { addItem } from '../../../services/LocaleStorage'
// import { login } from "../../../api/api";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { logIn } from '../../../store/store'

export const FormContext = createContext('');


function Login() {
  let navigate = useNavigate();

  const isLogged = useSelector((state) => state.login.isLogged);
  const dispatch = useDispatch()

  const [loginFailure, setLoginFailure] = useState()
  const [formValue, setFormValue] = useState({
      email: 'steve@rogers.com',
      password: 'password123'
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

    if (formValue.email === 'steve@rogers.com' && formValue.password === 'password123') {
      let token = 'ok'

      dispatch(logIn())

      addItem("token", token)
      navigate("/user");
    } else {
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
            
            {loginFailure && (<p className="error-message">Email ou mot de passe incorrect !</p>)}
          </FormContext.Provider>
        </form>
      </section>
    </main>
  ) :
  (<Navigate to="/user" />)
}

export default Login;