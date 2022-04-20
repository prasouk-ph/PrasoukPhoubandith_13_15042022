import { LoginStateContext } from '../../App'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({ children }) {
  const { isLogged } = useContext(LoginStateContext)

  return (!isLogged ? (<Navigate to="/login" />)
    : (children)
  )
}

export default ProtectedRoute;