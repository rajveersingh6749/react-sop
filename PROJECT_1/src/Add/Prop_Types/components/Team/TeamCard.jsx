import PropTypes from 'prop-types'
import Avatar from '../Common/Avatar'
import Button from '../Common/Button'
import '../../styles/style.css'

export default function TeamCard({ member, onSelect }) {
  return (
    <div className='card'>
      <Avatar src={member.avatar} size={"70"} />

      <h3>{member.name}</h3>
      <p>{member.role}</p>
      <p>Age: {member.age}</p>

      <div className='skills'>
        {member.skills.map((skill, index) => (
          <span key={index}>{skill}</span>
        ))}
      </div>

      <Button label='View Profile' onClick={() => onSelect(member.name)} />
    </div>
  )
}

TeamCard.propTypes = {
  member: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    age: PropTypes.number,
    isActive: PropTypes.bool,
    skills: PropTypes.arrayOf(PropTypes.string),
    avatar: PropTypes.string,
  }).isRequired,

  onSelect: PropTypes.func,
}
