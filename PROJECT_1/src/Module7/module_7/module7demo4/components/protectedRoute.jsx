import { Navigate, useLocation } from 'react-router-dom'

const ProtectedRoute = ({ isLoggedIn, children }) => {
  const currentLocation = useLocation()
  console.log('Current Location of the URL: ', currentLocation)

  if (!isLoggedIn) {
    return <Navigate to='/module7demo4/login' replace={true} />
  }
  return children
}

export default ProtectedRoute
