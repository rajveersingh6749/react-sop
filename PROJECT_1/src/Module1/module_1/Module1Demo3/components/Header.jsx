import '../styles/style.css'

export default function Header({ title }) {
  return (
    <div className='header'>
      <h1>{title}</h1>
      <p>{new Date().toLocaleDateString()}</p>
    </div>
  )
}
