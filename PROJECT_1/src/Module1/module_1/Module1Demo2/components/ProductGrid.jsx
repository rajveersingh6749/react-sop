import ProductCard from './ProductCard'
import '../styles/style.css'

export default function ProductGrid({ products }) {
  return (
    <div className='grid'>
      {products.length > 0 ? (
        products.map((p) => <ProductCard key={p.id} product={p} />)
      ) : (
        <h2>No Products Found</h2>
      )}
    </div>
  )
}
