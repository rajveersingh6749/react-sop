import classNames from 'classnames'

const BtnVariant = ({ children, variant }) => {
  return (
    <div>
      <button
        className={classNames('container', {
          success: variant === 'success',
          alert: variant === 'alert',
          normal: variant === 'normal',
        })}
      >
        {children}
      </button>
    </div>
  )
}

export default BtnVariant
