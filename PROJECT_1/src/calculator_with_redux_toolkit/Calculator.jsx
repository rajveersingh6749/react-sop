import React from 'react'
import Calc from './features/calculator/Calc.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'

const Calculator = () => {
  return (
    <div>
      <Provider store={store}>
        <Calc />
      </Provider>
    </div>
  )
}

export default Calculator
