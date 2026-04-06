import './Button.css'
import classNames from 'classnames'

const Button = ({ children, isNormal, isSuccess, isAlert }) => {
  return (
    <div>
      <button
        className={classNames('container', {
          success: isSuccess,
          alert: isAlert,
          normal: isNormal,
        })}
      >
        {children}
      </button>
    </div>
  )
}

export default Button
