import { Navigate } from 'react-router-dom'
import { useSelector } from "react-redux";


function ProtectedRoute({ children }) {
  const isLogged = useSelector((state) => state.isLogged);

  return (!isLogged ? (<Navigate to="/login" />)
    : (children)
  )
}

export default ProtectedRoute;