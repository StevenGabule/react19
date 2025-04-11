import { useEffect, useState } from 'react';
import { Product } from '../../states/actions/ecom_index';
import { getOrder } from '../../services/api';
import { Loader } from '../../shared/Loader';

export interface Order {
	products: Product[];
}

const getOrderId = () => {
	const urlParams = new URLSearchParams(window.location.search);
	return urlParams.get('orderId');
}

export const OrderSummary = () => {
	const [order, setOrder] = useState<Order>()

	useEffect(() => {
		const fetchData = async() => {
			const orderId = getOrderId()
			
			if(!orderId) return;

			const order = await getOrder(orderId);
			if(order.success) {
				setOrder(order);
			}
		}
		fetchData();
	}, [])

	if(!order) {
		return <Loader />
	}

	return (
		<section className='nes-container with-title'>
			<h1 className="title">Order Summary</h1>
			<div className="nes-container is-rounded order-summary-container">
				<ul className="nes-list is-circle">
					{order.products.map((product) => <li key={product.name}>{product.name}</li>)}
				</ul>
			</div>
		</section>
	)
}