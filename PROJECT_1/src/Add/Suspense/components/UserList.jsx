import { use } from 'react'
import usersPromise from './FetchData'
import './UserList.css'

const UserList = () => {
  const users = use(usersPromise)

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default UserList
