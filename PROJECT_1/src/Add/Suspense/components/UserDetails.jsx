import { use } from 'react'
import { usersPromise } from './FetchData'
import { Link } from 'react-router-dom'
import './UserDetails.css'

const UserDetails = () => {
  const users = use(usersPromise)

  return (
    <div>
      <h2>User List</h2>
      <ul className='user_details'>
        {users.map((user) => (
          <Link to='' key={user.id} className='user_details_link'>{user.title}</Link>
        ))}
      </ul>
    </div>
  )
}

export default UserDetails
