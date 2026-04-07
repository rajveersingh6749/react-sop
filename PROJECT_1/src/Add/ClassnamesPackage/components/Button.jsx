import classNames from 'classnames'
import '../styles/style.css'

const Button = ({ children, variant = 'primary', disabled }) => {
  const btnClass = classNames('btn', {
    'btn-primary': variant === 'primary',
    'btn-secondary': variant === 'secondary',
    disabled: disabled,
  })

  return (
    <button className={btnClass} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
