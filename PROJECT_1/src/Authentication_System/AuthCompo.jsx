import Authentication from './features/Authentication'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import './AuthCompo.css'

const AuthCompo = () => {
  return (
    <div className='auth_container'>
      <Provider store={store}>
        <Authentication />
      </Provider>
    </div>
  )
}

export default AuthCompo
