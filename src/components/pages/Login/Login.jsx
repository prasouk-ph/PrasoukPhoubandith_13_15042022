import { Link } from 'react-router-dom'
import Input from './Input/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import './Login.css';

function Home() {
return (
  <main class="main bg-dark">
    <section class="sign-in-content">
      <FontAwesomeIcon className='sign-in-icon' icon={faUserCircle} />
      <h1>Sign In</h1>
      
      <form>
        <Input labelFor="username" labelName="Username" inputType="text" inputId="username" />
        <Input labelFor="password" labelName="Password" inputType="password" inputId="password" />
        
        <div class="input-remember">
          <input type="checkbox" id="remember-me" />
          <label for="remember-me">Remember me</label>
        </div>
        
        <Link to="/" class="sign-in-button">Sign In</Link>

        {/* <!-- PLACEHOLDER DUE TO STATIC SITE -->
        <a href="./user.html" class="sign-in-button">Sign In</a>
        <!-- SHOULD BE THE BUTTON BELOW -->
        <!-- <button class="sign-in-button">Sign In</button> -->
        <!--  --> */}
      </form>
    </section>
  </main>
  );
}

export default Home;