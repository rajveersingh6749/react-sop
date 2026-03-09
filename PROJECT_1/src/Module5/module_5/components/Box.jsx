import { Children } from 'react'

const Box = ({ children }) => {
  const element = Children.only(children)

  return <div>{element}</div>
}

export default Box
