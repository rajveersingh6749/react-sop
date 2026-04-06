import './UserList.css'

const UserList = ({ users }) => {
  return (
    <div>
      <h2>User List</h2>
      <ul className='demoSuspenseList'>
        {users.map((user) => (
          <li key={user.id}>{user.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default UserList
