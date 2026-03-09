import { Children } from 'react'

function separatorList({ children }) {
  const result = []

  Children.forEach(children, (child, index) => {
    result.push(child)
    result.push(index)
  })

  return result
}

export default separatorList
