import { Cart } from './pages/cart'
import { Checkout } from './pages/checkout'
import { Home } from './pages/home'
import { OrderSummary } from './pages/order-summary'
import { Header } from './shared/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './style.css';

export const EcomApp = () => {
	return (
		<>
			<Header />
			<div className="container">
				<BrowserRouter>
					<Routes>
						<Route index element={<Home />} />
						<Route path='/cart' element={<Cart />} />
						<Route path='/checkout' element={<Checkout />} />
						<Route path='/order' element={<OrderSummary />} />
					</Routes>
				</BrowserRouter>
			</div>
		</>
	)
}