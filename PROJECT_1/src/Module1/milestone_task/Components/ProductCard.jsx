import './ProductCard.css'

const ProductCard = ({ name, image, price, desc }) => {
  return (
    <div className='product_card'>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <h3>{price}</h3>
      <p>{desc}</p>
    </div>
  )
}

export default ProductCard
