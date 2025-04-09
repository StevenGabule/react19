import React from 'react'
import Product from './Product';

function generateVoteCount() {
	return Math.floor((Math.random() * 50) + 15);
}

export interface ProductProp {
	id: number;
	title: string;
	description: string;
	url: string;
	votes: number;
	submitterAvatarUrl: string;
	productImageUrl: string;
}

const _products: ProductProp[] = [
	{
		id: 1,
		title: 'Yellow Pail',
		description: 'On-demand sand castle construction expertise.',
		url: '#',
		votes: generateVoteCount(),
		submitterAvatarUrl: './images/avatars/daniel.jpg',
		productImageUrl: './images/products/image-aqua.png',
	},
	{
		id: 2,
		title: 'Supermajority: The Fantasy Congress League',
		description: 'Earn points when your favorite politicians pass legislation.',
		url: '#',
		votes: generateVoteCount(),
		submitterAvatarUrl: 'images/avatars/kristy.png',
		productImageUrl: 'images/products/image-rose.png',
	},
	{
		id: 3,
		title: 'Tinfoild: Tailored tinfoil hats',
		description: 'We already have your measurements and shipping address.',
		url: '#',
		votes: generateVoteCount(),
		submitterAvatarUrl: 'images/avatars/veronika.jpg',
		productImageUrl: 'images/products/image-steel.png',
	},
	{
		id: 4,
		title: 'Haught or Naught',
		description: 'High-minded or absent-minded? You decide.',
		url: '#',
		votes: generateVoteCount(),
		submitterAvatarUrl: 'images/avatars/molly.png',
		productImageUrl: 'images/products/image-yellow.png',
	},
];

const ProductLists: React.FC = () => {
	const [products, setProducts] = React.useState<ProductProp[]>(_products);
	const handleProductVote = (pid: number, typeVote: boolean) => {
		const nextProducts = products.map((product) => {
			if(product.id === pid) {
				return Object.assign({}, product, {
					votes: typeVote ? product.votes + 1 : product.votes - 1
				});
			} else {
				return product;
			}
		})
		setProducts(nextProducts);
	}

	return (
		<div className='ui unstackable items'>
			{products.sort((a,b) => b.votes - a.votes).map((product) =>
				<Product
					key={product.id}
					{...product}
					onVote={handleProductVote}
				/>)}
		</div>
	)
}

export default ProductLists