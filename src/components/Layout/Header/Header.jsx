import { Link } from 'react-router-dom'
import logo from '../../../assets/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faSignOut } from "@fortawesome/free-solid-svg-icons";
import './Header.css';
import { LoginStateContext } from '../../../App';
import { useContext, useEffect } from 'react';
import { removeItem } from '../../../services/LocaleStorage'
import { getUserData } from '../../../services/login'


function Header() {
  const { isLogged, setIsLogged, userFirstName, setUserFirstName, } = useContext(LoginStateContext);


  function handleSignOut() {
    removeItem("token")
    setIsLogged(false)
  }

  
  async function loadData() {
    try {
      const response = await getUserData()
      const { firstName } = response.data.body
      setUserFirstName(firstName)
      // setUserLastName(lastName)
    } catch ({response}) {
      console.log(response)
    }
  }

  useEffect(() => {
    loadData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userFirstName])

  return (
    <nav className='main-nav'>
      <Link className='main-nav-logo' to="/">
        <img className='main-nav-logo-image' src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
        
      <nav>
        {isLogged ? 
          (
            <div className='link-container'>
              <Link className='main-nav-item' to="/user" style={{ marginRight: 11}}>
                <FontAwesomeIcon className='userIcon' icon={faUserCircle} />
                <p className='link-content'>{userFirstName}</p>
              </Link>
              <Link className='main-nav-item' to="/" onClick={handleSignOut}>
                <FontAwesomeIcon className='signOutIcon link-icon' icon={faSignOut} />
                 <p className='link-content'>Sign Out</p>
              </Link>
            </div>)
          :
            <Link className='main-nav-item' to="/login">
              <FontAwesomeIcon className='userIcon link-icon' icon={faUserCircle} />
              <p className='link-content'>Sign In</p>
            </Link>
        } 
      </nav>
    </nav>
  );
}

export default Header;
