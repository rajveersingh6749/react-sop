import ProductCard from './ProductCard'
import '../styles/style.css'

export default function ProductGrid() {
  return (
    <div className='grid'>
      <ProductCard
        name='iPhone 15 Pro'
        price={999}
        imageURL='https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800'
        description='A17 Pro chip, titanium design, advanced camera system.'
      />

      <ProductCard
        name='MacBook Pro M3'
        price={1999}
        imageURL='https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800'
        description="Powerful performance with Apple's latest M3 chip."
      />

      <ProductCard
        name='Sony WH-1000XM5'
        price={399}
        imageURL='https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=800'
        description='Industry-leading noise cancellation headphones.'
      />
    </div>
  )
}
