import '../styles/style.css'

export default function Header({ title }) {
  return (
    <div className='header'>
      <h1 className='site_title'>{title}</h1>
      <p>{new Date().toLocaleDateString()}</p>
    </div>
  )
}
