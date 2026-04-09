import '../styles/style.css'

export default function Avatar({ name, avatar }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')

  return avatar ? (
    <img src={avatar} className='avatar' />
  ) : (
    <div className='avatar fallback'>{initials}</div>
  )
}
