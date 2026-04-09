import PropTypes from 'prop-types'
import Avatar from './Avatar'
import StatusBadge from './StatusBadge'
import '../styles/style.css'

export default function UserCard({ name, role, status, avatar }) {
  return (
    <div className='card'>
      <Avatar name={name} avatar={avatar} />

      <div className='info'>
        <h3>{name}</h3>
        <p className='role'>{role}</p>

        <StatusBadge status={status} />
      </div>
    </div>
  )
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string,
  status: PropTypes.oneOf(['active', 'inactive']),
  avatar: PropTypes.string,
}

UserCard.defaultProps = {
  role: 'User',
  status: 'inactive',
}
