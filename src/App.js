import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/pages/Home/Home'
import Login from './components/pages/Login/Login'
import User from './components/pages/User/User'
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage'

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/user" element={<User />} />
                <Route path="*" element={<NotFoundPage />}/>
            </Route>
        </Routes>
    </Router>
  );
}

export default App;
