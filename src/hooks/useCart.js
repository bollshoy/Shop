import { useShop } from "./useShop.js"

const useCart = () => {
	const { cart, addToCart, removeFromCart } = useShop();

	return { cart, addToCart, removeFromCart };
};

export default useCart;
