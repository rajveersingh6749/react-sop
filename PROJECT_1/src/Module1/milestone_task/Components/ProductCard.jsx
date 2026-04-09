import '../styles/style.css'

export default function ProductCard({ name, price, imageURL, description }) {
  return (
    <div className='card'>
      <div className='image-container'>
        <span className='badge'>New</span>
        <img src={imageURL} alt={name} />
      </div>

      <div className='card-content'>
        <h2 className='product-name'>{name}</h2>
        <p className='description'>{description}</p>

        <div className='card-footer'>
          <span className='price'>${price}</span>
          <button className='btn'>View</button>
        </div>
      </div>
    </div>
  )
}
