import './styles/style.css'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import PaymentPanel from './components/PaymentPanel'
import UserProfile from './components/UserProfile'
import ErrorBoundaryWrapper from './components/ErrorBoundaryWrapper'

export default function ErrorB() {
  return (
    <div className='app'>
      <Navbar />

      <div className='grid'>
        <ErrorBoundaryWrapper>
          <ProductList />
        </ErrorBoundaryWrapper>

        <ErrorBoundaryWrapper>
          <PaymentPanel />
        </ErrorBoundaryWrapper>

        <ErrorBoundaryWrapper>
          <UserProfile />
        </ErrorBoundaryWrapper>
      </div>
    </div>
  )
}
