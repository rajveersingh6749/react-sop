import { lazy, Suspense } from 'react'
// import UserDetails from './components/UserDetails'
const UserDetails = lazy(() => import('./components/UserDetails'))
import './SuspenseUserDetails.css'

const SuspenseUserDetails = () => {
  return (
    <div>
      <h1 className='suspenseUserDetails'>Suspense and Lazy Loading use() API</h1>
      <Suspense fallback={<div>Loading user details...</div>}>
        <UserDetails />
      </Suspense>
    </div>
  )
}

export default SuspenseUserDetails
