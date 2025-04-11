import React from 'react'
import { Product } from '../../states/actions/ecom_index'
import { useCart } from '../cart-context'

interface ProductCardProps {
	datum: Product
}

export const ProductCard: React.FC<ProductCardProps> = ({ datum }) => {
	const { addToCart, products } = useCart();
	const isInCart = !!products.find((p) => datum.name === p.name)
	return (
		<div className='nes-container is-rounded item'>
			<img
				src={datum.image}
				alt={"goblin"}
				width={64}
				height={64}
				style={{ imageRendering: 'pixelated' }} />
			<p>{datum.name}</p>
			<p>{datum.price} Zm</p>
			{isInCart ? (
				<button className='nes-btn is-disabled'>
					Added to cart
				</button>
			) : (
				<button className='nes-btn is-primary' onClick={() => { addToCart(datum) }}>
					Add To Cart
				</button>
			)}
		</div>
	)
}