import PropTypes from 'prop-types'
import TeamCard from './TeamCard'
import '../../styles/style.css'

export default function TeamList({ members, onSelect }) {
  return (
    <div className='grid'>
      <div className='card_container'>
        {members.map((member) => (
          <TeamCard key={member.id} member={member} onSelect={onSelect} />
        ))}
      </div>
    </div>
  )
}

TeamList.propTypes = {
  members: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelect: PropTypes.func,
}
