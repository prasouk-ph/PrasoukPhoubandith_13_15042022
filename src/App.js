import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { createContext, useState } from 'react'
import Layout from './components/Layout/Layout'
import Home from './components/pages/Home/Home'
import Login from './components/pages/Login/Login'
import User from './components/pages/User/User'
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import Transactions from './components/pages/Transactions/Transactions'
import { checkLoginStatus } from './services/login'

const accounts = [
  {
    id: 1,
    title: "Argent Bank Checking (x8349)",
    amount: "$2,082.79",
    description: "Available Balance"
  },
  {
    id: 2,
    title: "Argent Bank Savings (x6712)",
    amount: "$10,928.42",
    description: "Available Balance"
  },
  {
    id: 3,
    title: "Argent Bank Credit Card (x8349)",
    amount: "$184.30",
    description: "Current Balance"
  }
]

export const LoginStateContext = createContext({});
export const AccountsDataContext = createContext({});

function App() {
  const [isLogged, setIsLogged] = useState(checkLoginStatus);
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  
  return (
    <Router>
      <LoginStateContext.Provider value={{isLogged: isLogged, setIsLogged: setIsLogged, userFirstName: userFirstName, setUserFirstName: setUserFirstName, userLastName: userLastName, setUserLastName: setUserLastName}}>
        <AccountsDataContext.Provider value={accounts}>
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
              <Route path="/transactions/:id" element={
                <ProtectedRoute>
                  <Transactions />
                </ProtectedRoute>
                }
              />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </AccountsDataContext.Provider>
      </LoginStateContext.Provider>
    </Router>
  );
}

export default App;
