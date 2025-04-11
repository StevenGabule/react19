export interface Product {
	name: string;
	price: number;
	image: string;
}

export interface Category {
	name: string;
	items: Product[]
}

export interface ICartContextValue {
	addToCart: (product: Product) => void;
	totalPrice: () => number;
	removeFromCart: (product: Product) => void;
	clearCart: () => void;
	products: Product[]
}