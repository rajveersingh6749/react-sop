import { useState } from 'react'
import classNames from 'classnames'
import ProductCard from './ProductCard'
import '../styles/style.css'

const ProductList = ({ products }) => {
  const [filter, setFilter] = useState('all')
  const [selectedId, setSelectedId] = useState(null)

  const filteredProducts = products.filter((p) => {
    if (filter === 'featured') return p.isFeatured
    if (filter === 'in-stock') return p.stock > 0
    return true
  })

  return (
    <div>
      {/* Filters */}
      <div className='filters'>
        {['all', 'featured', 'in-stock'].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={classNames('filter-btn', {
              active: filter === type,
            })}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className='grid'>
        {filteredProducts.map((product) => (
          <div key={product.id} onClick={() => setSelectedId(product.id)}>
            <ProductCard
              product={product}
              isSelected={selectedId === product.id}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList
