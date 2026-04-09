import UserCard from './UserCard'
import '../styles/style.css'

export default function UserGrid({ users }) {
  return (
    <div className='grid'>
      {users.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  )
}
