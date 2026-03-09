import { createContext, useContext, useState } from 'react'

const UserContext = createContext()

const Component1 = () => {
  const [user] = useState('Nate')

  return (
    <>
      <UserContext.Provider value={user}>
        <h1>{`Hello ${user}!`}</h1>
        {/* <Component2 user={user} /> */}
        <Component2 />
      </UserContext.Provider>
    </>
  )
}

const Component2 = () => {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
      {/* <Component3 user={user} /> */}
    </>
  )
}
// const Component2 = ({ user }) => {
//   return (
//     <>
//       <h1>Component 2</h1>
//       <Component3 user={user} />
//     </>
//   )
// }

const Component3 = () => {
  const user = useContext(UserContext)

  return (
    <>
      <h1>Component 3</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  )
}
// const Component3 = ({ user }) => {
//     return (
//         <>
//         <h1>Component 3</h1>
//         <h2>{`Hello ${user} again!`}</h2>
//         </>
//     )
// }

export default Component1
