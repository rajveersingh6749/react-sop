import { Children } from 'react'

const List = ({ children }) => {
  const items = Children.toArray(children)

  return (
    <ul>
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  )
}

export default List
