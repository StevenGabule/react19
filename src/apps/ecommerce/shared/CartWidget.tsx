import { Link } from 'react-router-dom';
import { useCart } from '../components/cart-context'

export const CartWidget = () => {
	const {products} = useCart();

	return (
		<Link to='/' className='nes-badge is-icon'>
			<span className='is-error'>{products?.length || 0}</span>
		</Link>
	)
}