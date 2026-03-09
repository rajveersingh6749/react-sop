import { Children } from 'react'

const RowList = ({ children }) => {
  return (
    <div>
      {Children.map(children, (child) => (
        <div>{child}</div>
      ))}
    </div>
  )
}

export default RowList
