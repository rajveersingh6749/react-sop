import { useCallback, useMemo, useState } from 'react'
import Card1 from './components/Card1'
import { UserContext } from './UserContext'

const Mod_6 = () => {
  const [user] = useState('Millie')

  // const formattedUser = user.toUpperCase()
  // console.log(formattedUser)
  const formattedUser = useMemo(() => {
    console.log('Formatting user...')
    return user.toUpperCase()
  }, [user])

  // alert(`Hello ${formattedUser}`)
  const greetUser = useCallback(() => {
    alert(`Hello ${formattedUser}`)
  }, [formattedUser])

  return (
    <div>
      <UserContext.Provider value={{ formattedUser, greetUser }}>
        <h2>{`Hello, ${formattedUser}`}</h2>
        <Card1 />
        <Card1 user={formattedUser} />
      </UserContext.Provider>
    </div>
  )
}

export default Mod_6
