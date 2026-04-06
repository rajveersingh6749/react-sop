import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'
import DoubleClickCounter from './components/DoubleClickCounter'
import withCounter from './hoc/withCounter'
import './styles/style.css'

const EnhancedClickCounter = withCounter(ClickCounter)
const EnhancedHoverCounter = withCounter(HoverCounter)
const EnhancedDoubleClickCounter = withCounter(DoubleClickCounter)

const HigherOrderComponent = () => {
  return (
    <div className='container'>
      <h1>Higher Order Component Demo</h1>
      
      <div className='grid'>
        <EnhancedClickCounter />
        <EnhancedHoverCounter />
        <EnhancedDoubleClickCounter />
      </div>
    </div>
  )
}

export default HigherOrderComponent
