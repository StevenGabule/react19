import { Product } from '../states/actions/ecom_index'

const BACKEND_URL_ENDPOINT = 'http://localhost:4000';

export interface CheckoutPayload {
	products: Product[];
}

export const getProducts = () => {
	return fetch(`${BACKEND_URL_ENDPOINT}/products`).then(res => res.json()).catch(console.error);
}

export const getOrder = (id: string) => {
	return fetch(`${BACKEND_URL_ENDPOINT}/${id}`).then(res => res.json()).catch(console.error);
}

export const submitCheckout = (data: CheckoutPayload) => {
	return fetch(`${BACKEND_URL_ENDPOINT}/checkout`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	.then((res) => res.json())
	.catch(console.error)
}