import React from 'react';
import { Product } from '../../states/actions/ecom_index';

interface CheckoutListProps {
	products: Product[];
}

export const CheckoutList: React.FC<CheckoutListProps> = ({products}) => {
	return (
		<ul className='nes-list is-circle'>
			{products.map((product) => <li key={product.name}>{product.name}</li>)}
		</ul>
	)
}