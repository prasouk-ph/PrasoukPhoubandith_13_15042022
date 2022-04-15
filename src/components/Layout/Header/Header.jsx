import { Link } from 'react-router-dom'
import logo from '../../../assets/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import './Header.css';

function Header() {
    return (
      <div className='header main-nav'>
        <Link className='main-nav-logo' to="/">
          <img className='main-nav-logo-image' src={logo} alt="Argent Bank Logo" />
          <h1 class="sr-only">Argent Bank</h1>
        </Link>
          
        <nav>
          <Link className='main-nav-item' to="/">
            <FontAwesomeIcon className='userIcon' icon={faUserCircle} style={{ marginRight: 5}}/>
            Sign In
          </Link>
        </nav>
      </div>
    );
}

export default Header;
