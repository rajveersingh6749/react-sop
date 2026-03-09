import { useState } from 'react'
import Card1 from './components/Card1'
import { UserContext } from './UserContext'

const Module6demo2 = () => {
  const [user, setUser] = useState('')

  const formattedUser = user.toUpperCase()
  console.log(formattedUser)

  return (
    <div>
      <UserContext.Provider value={{ formattedUser }}>
        <h1>Demo 2</h1>
        <label>
          Pass prop:{' '}
          <input
            type='text'
            value={user}
            placeholder='enter text'
            onChange={(e) => setUser(e.target.value)}
          />
        </label>
        <h2>{`Hello, ${formattedUser}`}</h2>
        <Card1 />
      </UserContext.Provider>
    </div>
  )
}

export default Module6demo2
