import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { createContext, useState } from 'react'
import Layout from './components/Layout/Layout'
import Home from './components/pages/Home/Home'
import Login from './components/pages/Login/Login'
import User from './components/pages/User/User'
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage'

export const LoginStateContext = createContext('');

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [userFirstName, setUserFirstName] = useState("Tony");
  const [userLastName, setUserLastName] = useState("Jarvis");

  return (
    <Router>
      <LoginStateContext.Provider value={{loginState: isLogged, setIsLogged: setIsLogged, userFirstName: userFirstName, setUserFirstName: setUserFirstName, userLastName: userLastName, setUserLastName: setUserLastName}}> {/* should pass an object to pass multiple things */}
        <Routes>     
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user" element={<User />} />
            <Route path="*" element={<NotFoundPage />}/>
          </Route>
        </Routes>
      </LoginStateContext.Provider>
    </Router>
  );
}

export default App;
