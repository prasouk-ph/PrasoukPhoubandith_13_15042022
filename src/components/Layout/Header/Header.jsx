import { Link } from 'react-router-dom'
import logo from '../../../assets/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faSignOut } from "@fortawesome/free-solid-svg-icons";
import './Header.css';

function Header() {
  const isLogged = true

  return (
    <nav className='main-nav'>
      <Link className='main-nav-logo' to="/">
        <img className='main-nav-logo-image' src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
        
      <nav>
        {isLogged ? 
          (
            <div>
              <Link className='main-nav-item' to="/user" style={{ marginRight: 11}}>
                <FontAwesomeIcon className='userIcon' icon={faUserCircle} style={{ marginRight: 5}}/>
                Tony
              </Link>
              <Link className='main-nav-item' to="/">
                <FontAwesomeIcon className='signOutIcon' icon={faSignOut} style={{ marginRight: 5, }} />
                Sign Out
              </Link>
            </div>)
          :
          <Link className='main-nav-item' to="/login">
            <FontAwesomeIcon className='userIcon' icon={faUserCircle} style={{ marginRight: 5}}/>
            Sign In
          </Link>
          }
      </nav>
    </nav>
  );
}

export default Header;
