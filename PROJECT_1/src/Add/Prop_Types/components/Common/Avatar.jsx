import PropTypes from 'prop-types'

export default function Avatar({ src, size }) {
  return (
    <img
      src={src}
      alt='avatar'
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        objectFit: 'cover',
      }}
    />
  )
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.number,
}

Avatar.defaultProps = {
  size: 60,
}
