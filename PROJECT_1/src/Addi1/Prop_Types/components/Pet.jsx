import PropTypes from 'prop-types'

function Pet({ animal, color, legs }) {
  return (
    <div>
      <h2>Pet Details</h2>
      <p>Animal: {animal}</p>
      <p>Color: {color}</p>
      <p>Number of Legs: {legs}</p>
    </div>
  )
}

// Define PropTypes
Pet.propTypes = {
  animal: PropTypes.string.isRequired, // Must be a string
  color: PropTypes.string, // Optional, but must be a string if provided
  legs: PropTypes.number.isRequired, // Must be a number
}

export default Pet
