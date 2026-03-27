import PropTypes from 'prop-types'
import './UserList.css'

// const UserList = ({ users }) => {
//   console.log('Users: ', users)

//   return (
//     <div>
//       <h2>Users</h2>

//       {users.map((user) => (
//         <div key={user.id} className='cd'>
//           <p>
//             <b>Name: </b>
//             {user.name}
//           </p>
//           <p>
//             <b>Username: </b>
//             {user.username}
//           </p>
//           <p>
//             <b>Phone: </b>
//             {user.phone}
//           </p>
//           <p>
//             <b>Email: </b>
//             {user.email}
//           </p>
//         </div>
//       ))}
//     </div>
//   )
// }

const UserList = ({ name, age, phone }) => {
  return (
    <div>
      <p>
        <b>Hello,</b> {name}
      </p>
      <p>
        <b>You are </b>
        {age} years old
      </p>
      <p>
        <b>Your Contact Number is </b>
        {phone}
      </p>
    </div>
  )
}

UserList.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  phone: PropTypes.number.isRequired,
}

// UserList.propTypes = {
//   users: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string,
//       phone: PropTypes.string,
//       address: PropTypes.object,
//     }).isRequired,
//   ),
// }

export default UserList
