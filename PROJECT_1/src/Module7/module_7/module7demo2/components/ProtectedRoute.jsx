import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ children, isLoggedIn }) => {
  if (!isLoggedIn) {
    return <Navigate to='/module7demo2/login' replace={true} />
  }
  return children
}

export default ProtectedRoute