import { HelmetProvider } from 'react-helmet-async'
import ReactHelmets from './ReactHelmets'

const ReactHelmetsApp = () => {
  return (
    <div>
      <HelmetProvider>
        <ReactHelmets />
      </HelmetProvider>
    </div>
  )
}

export default ReactHelmetsApp
