import PropTypes from 'prop-types'
import '../../styles/style.css'

export default function Button({ label, onClick, variant }) {
  return (
    <button className={`btn ${variant}`} onClick={onClick}>
      {label}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary']),
}

Button.defaultProps = {
  variant: 'primary',
}
