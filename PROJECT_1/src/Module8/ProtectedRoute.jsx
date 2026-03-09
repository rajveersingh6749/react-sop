import { Navigate } from 'react-router-dom'

function ProtectedRoute({ isLoggedIn, children }) {
  if (!isLoggedIn) {
    return <Navigate to='/module8' replace />
  }

  return children
}

export default ProtectedRoute
