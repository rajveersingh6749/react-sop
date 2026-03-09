import { Link, Outlet } from "react-router-dom"
import './About.css'

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <div className="about_section">
        <Link to='education' className="about_link">Education</Link>
        <Link to='skills' className="about_link">Skills</Link>
        <Link to='work' className="about_link">Work</Link>
        <Link to='contact' className="about_link">Contact Details</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default About
