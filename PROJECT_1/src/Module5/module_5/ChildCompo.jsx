import { Children } from 'react'

const ChildCompo = ({ children }) => {
  // console.log(children)
  // console.log(children.innerText)

  return (
    <div style={{ border: '1px solid black', padding: 10, width: '400px' }}>
      <h3>Total children: {Children.count(children)}</h3>

      <div>{children}</div>
    </div>
  )
}

export default ChildCompo
