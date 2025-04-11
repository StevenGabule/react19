import { useCart } from '../../components/cart-context'
import { CheckoutForm } from './CheckoutForm';
import { CheckoutList } from './CheckoutList'

export const Checkout = () => {
	const { products, totalPrice } = useCart();
	return (
		<section className='nes-container with-title'>
			<h1 className="title">Checkout</h1>
			<div className="nes-container checkout-list-wrapper">
				<p>You are going to buy:</p>
				<CheckoutList products={products} />
				<p>Total: {totalPrice()} Zm</p>
			</div>
			<p>Enter your payment credentials:</p>
			<CheckoutForm />
		</section>
	)
}