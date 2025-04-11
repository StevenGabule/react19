import React from 'react';
import { Category } from '../../states/actions/ecom_index'
import { useProducts } from '../../hooks/useProducts';
import { ProductCard } from '../../components/product/ProductCard';

interface HomeProps {
	useProductsHook?: () => {
		categories: Category[]
		isLoading: boolean;
		error: boolean
	}
}
export const Home: React.FC<HomeProps> = ({useProductsHook = useProducts}) => {
	const {categories, isLoading, error} = useProductsHook();

	if(isLoading) return <>Loading...</>
	if(error) return <>Error</>

	return (
		<>
			{categories.map((category) => (
				<section key={category.name} className='nes-container with-title showcase'>
					<h2 className='title'>{category.name}</h2>
					<section className="items">
						{category.items.map((item: any) => <ProductCard key={item.name} datum={item} /> )}
					</section>
				</section>
			))}
		</>
	)
}