import { Children } from 'react'

const ChildComponent = ({ children }) => {
  // console.log(children)
  // console.log(children.innerText)

  return (
    <div>
      <h1>Total rows: {Children.count(children)}</h1>
      <h2>Hello</h2>
      <h3>{children}</h3>
    </div>
  )
}

export default ChildComponent
