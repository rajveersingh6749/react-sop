import { Link } from 'react-router-dom'
import { Users } from '../Users'
import './Home.css'

const Home = () => {
  return (
    <div className='card'>
      <h1>List of Users:</h1>
      {Users.map((user) => (
        <div key={user.id}>
          <Link to={`/milestone7/user/${user.id}`} className='home_link'>
            {user.name}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Home
