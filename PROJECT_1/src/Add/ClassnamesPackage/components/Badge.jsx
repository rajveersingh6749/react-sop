import classNames from 'classnames'
import '../styles/style.css'

const Badge = ({ status }) => {
  const badgeClass = classNames('badge', {
    'badge-success': status === 'in-stock',
    'badge-warning': status === 'low-stock',
    'badge-danger': status === 'out-of-stock',
  })

  return <span className={badgeClass}>{status}</span>
}

export default Badge
