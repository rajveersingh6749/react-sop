import { useState } from 'react'
import Card1 from './components/Card1'

const Module6demo1 = () => {
  const [user, setUser] = useState('')

  const formattedUser = user.toUpperCase()
  console.log(formattedUser)

  return (
    <div>
      <h1>Demo 1</h1>
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

      <Card1 user={formattedUser} />
    </div>
  )
}

export default Module6demo1
