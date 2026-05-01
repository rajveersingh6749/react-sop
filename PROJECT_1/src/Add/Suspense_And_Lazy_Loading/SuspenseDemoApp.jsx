import { lazy, Suspense, useState } from 'react'
import './styles/style.css'
import Navbar from './components/Navbar'
import Loader from './components/Loader'

const Dashboard = lazy(() => import('./components/Dashboard'))
const Analytics = lazy(() => import('./components/Analytics'))
const Profile = lazy(() => import('./components/Profile'))

export default function SuspenseDemoApp() {
  const [view, setView] = useState('dashboard')

  const renderView = () => {
    switch (view) {
      case 'dashboard':
        return <Dashboard />
      case 'analytics':
        return <Analytics />
      case 'profile':
        return <Profile />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className='app'>
      <h1>Suspense & Lazy Loading Demo</h1>

      <Navbar setView={setView} />

      <div className='content'>
        <Suspense fallback={<Loader />}>{renderView()}</Suspense>
      </div>
    </div>
  )
}
