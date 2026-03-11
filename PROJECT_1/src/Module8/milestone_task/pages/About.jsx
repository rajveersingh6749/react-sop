import { usersPromise } from './fetchData'

import './About.css'
import { use } from 'react'

const About = () => {
  const results = use(usersPromise)

  console.log('About: ', results)

  return (
    <div>
      <h1>About</h1>
      <div className='about'>
        {results.map((user) => (
          <ul key={user.id} className='user_list'>
            <li>
              <b>Name: </b>
              {user.name}
            </li>
            <li>
              <b>Username: </b>
              {user.username}
            </li>
            <li>
              <b>Email: </b>
              {user.email}
            </li>
            <li>
              <b>Phone: </b>
              {user.phone}
            </li>
            <li>
              <b>Website: </b>
              {user.website}
            </li>
          </ul>
        ))}
      </div>
    </div>
  )
}

export default About
