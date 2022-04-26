import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/pages/Home/Home'
import Login from './components/pages/Login/Login'
import User from './components/pages/User/User'
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import Transactions from './components/pages/Transactions/Transactions'
import { Provider } from "react-redux"; // on importe le Provider
import { store } from './store/store'


function App() {  
  return (
    <Router>
      <Provider store={store}>
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
      </Provider>
    </Router>
  );
}

export default App;
