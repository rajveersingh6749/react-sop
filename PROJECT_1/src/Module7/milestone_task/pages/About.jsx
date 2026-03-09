import { Users } from '../Users'
import './About.css'

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <div className='about'>
        {Users.map((user) => (
          <div key={user.id} className='user_list'>
            <p>
              <b>Name:</b>
              {user.name}
            </p>
            <p>
              <b>Age:</b>
              {user.age}
            </p>
            <p>
              <b>City:</b>
              {user.city}
            </p>
            <p>
              <b>Email:</b>
              {user.email}
            </p>
            <p>
              <b>Skill:</b>
              {user.skill}
            </p>
            <p>
              <b>Education:</b>
              {user.education}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
