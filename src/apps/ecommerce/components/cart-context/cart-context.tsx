import React from 'react';
import { ICartContextValue, Product } from '../../states/actions/ecom_index';

const saveProductsToLocalStorage = (products: Product[]) => {
	localStorage.setItem('products', JSON.stringify(products));
}

const CartContext = React.createContext({} as ICartContextValue);

export const CartProvider = ({ children }: React.PropsWithChildren<{}>) => {
	const [products, setProducts] = React.useState<Product[]>([]);

	React.useEffect(() => {
		try {
			const storedProducts = localStorage.getItem('products');
			const parsedProducts = storedProducts ? JSON.parse(storedProducts) : [];
			setProducts(parsedProducts);
		} catch (error) { }
	}, [])

	const totalPrice = () => products.reduce((total: number, product) => total + Number(product.price), 0)

	const addToCart = (newProduct: Product) => {
		if (products.find((product) => newProduct.name === product.name)) {
			return
		}

		const newProducts = [...products, newProduct];
		setProducts(newProducts);
		saveProductsToLocalStorage(newProducts);
	}

	const removeFromCart = (product: Product) => {
		const newProducts = products.filter((p) => p.name !== product.name);
		setProducts(newProducts);
		saveProductsToLocalStorage(newProducts);
	}

	const clearCart = () => {
		setProducts([]);
		saveProductsToLocalStorage([]);
	}

	return (
		<CartContext.Provider
			value={{
				addToCart,
				clearCart,
				products,
				removeFromCart,
				totalPrice
			}}
		>
			{children}
		</CartContext.Provider>
	)
}

export const useCart = () => React.useContext(CartContext);