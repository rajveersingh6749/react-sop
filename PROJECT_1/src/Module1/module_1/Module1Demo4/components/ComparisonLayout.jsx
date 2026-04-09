import DomTaskManager from './DomTaskManager'
import ReactTaskManager from './ReactTaskManager'
import '../styles/style.css'

export default function ComparisonLayout() {
  return (
    <div className='layout'>
      <div className='panel dom'>
        <h2>Vanilla JS (DOM)</h2>
        <DomTaskManager />
      </div>

      <div className='panel react'>
        <h2>React (State Driven)</h2>
        <ReactTaskManager />
      </div>
    </div>
  )
}
