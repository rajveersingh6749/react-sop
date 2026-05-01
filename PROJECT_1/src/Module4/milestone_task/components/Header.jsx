import '../styles/style.css'

const Header = ({ reset }) => {
  return (
    <div className='header'>
      <h1 className='header_title'>Persistent Counter</h1>
      <button className='rst_btn' onClick={reset}>Reset</button>
    </div>
  )
}

export default Header
