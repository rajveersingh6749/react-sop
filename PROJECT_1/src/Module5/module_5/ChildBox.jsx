import { Children } from 'react'

export default function ChildBox({ children }) {
  return (
    <div style={{ border: '1px solid black', padding: 10, width: '400px' }}>
      <h3>Total children: {Children.count(children)}</h3>
      <div>{children}</div>
    </div>
  )
}
