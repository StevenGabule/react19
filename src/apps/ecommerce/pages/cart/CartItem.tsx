import React from 'react';
import { Product } from '../../states/actions/ecom_index';

interface CartItemProps {
	product: Product;
	removeFromCart: (product: Product) => void;
}

export const CartItem: React.FC<CartItemProps> = ({product, removeFromCart}) => {
	return (
		<div className='cart-item'>
			<img src={product.image} alt="goblin" style={{imageRendering: 'pixelated'}} width={64} height={64} />
			<p>{product.name}</p>
			<p>{product.price} Zm</p>
			<button 
				onClick={() => {
					removeFromCart(product)
				}}
				className='nes-btn is-error'
			>Remove</button>
		</div>
	)
}