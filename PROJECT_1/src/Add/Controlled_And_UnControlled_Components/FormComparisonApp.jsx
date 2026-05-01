import ControlledForm from './components/ControlledForm'
import UncontrolledForm from './components/UncontrolledForm'
import './styles/style.css'

export default function FormComparisonApp() {
  return (
    <div className='app'>
      <h1>Controlled vs Uncontrolled Demo</h1>

      <div className='grid'>
        <ControlledForm />
        <UncontrolledForm />
      </div>
    </div>
  )
}
