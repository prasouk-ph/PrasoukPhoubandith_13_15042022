import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { createContext, useState } from 'react'
import Layout from './components/Layout/Layout'
import Home from './components/pages/Home/Home'
import Login from './components/pages/Login/Login'
import User from './components/pages/User/User'
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

export const LoginStateContext = createContext('');

function App() {
  const [isLogged, setIsLogged] = useState(true);
  const [userFirstName, setUserFirstName] = useState("Tony");
  const [userLastName, setUserLastName] = useState("Jarvis");

  return (
    <Router>
      <LoginStateContext.Provider value={{isLogged: isLogged, setIsLogged: setIsLogged, userFirstName: userFirstName, setUserFirstName: setUserFirstName, userLastName: userLastName, setUserLastName: setUserLastName}}>
        <Routes>     
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user" element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute>
              }
            />
            {/* <Route path="/transactions" element={
              <ProtectedRoute>
                <Transactions />
              </ProtectedRoute>
              }
            /> */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </LoginStateContext.Provider>
    </Router>
  );
}

export default App;
