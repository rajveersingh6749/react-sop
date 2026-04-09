import '../styles/style.css'

export default function StatusBadge({ status }) {
  return (
    <span className={`badge ${status}`}>
      {status === 'active' ? 'Active' : 'Inactive'}
    </span>
  )
}
