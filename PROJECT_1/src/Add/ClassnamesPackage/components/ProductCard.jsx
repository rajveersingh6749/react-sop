import classNames from 'classnames'
import Badge from './Badge'
import Button from './Button'
import '../styles/style.css'

const ProductCard = ({ product, isSelected }) => {
  const cardClass = classNames('product-card', {
    featured: product.isFeatured,
    selected: isSelected,
    'out-of-stock': product.stock === 0,
  })

  const stockStatus =
    product.stock === 0
      ? 'out-of-stock'
      : product.stock < 10
        ? 'low-stock'
        : 'in-stock'

  return (
    <div className={cardClass}>
      <h2>{product.name}</h2>
      <p>{product.description}</p>

      <Badge status={stockStatus} />

      <div className='actions'>
        <Button variant='primary' disabled={product.stock === 0}>
          Buy Now
        </Button>

        <Button variant='secondary'>Details</Button>
      </div>
    </div>
  )
}

export default ProductCard
