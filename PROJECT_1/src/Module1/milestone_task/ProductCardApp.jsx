import ProductGrid from './components/ProductGrid'
import './styles/style.css'

export default function ProductCardApp() {
  return (
    <div className='app'>
      <h1 className='title'>Featured Products</h1>
      <ProductGrid />
    </div>
  )
}
