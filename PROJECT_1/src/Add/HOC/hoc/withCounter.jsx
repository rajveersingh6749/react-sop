import { useState } from 'react'

const withCounter = (WrappedComponent) => {
  return function EnhancedComponent(props) {
    const [count, setCount] = useState(0)

    const increment = () => setCount((prev) => prev + 1)
    const decrement = () => setCount((prev) => prev - 1)

    return (
      <WrappedComponent
        {...props}
        count={count}
        increment={increment}
        decrement={decrement}
      />
    )
  }
}

export default withCounter
