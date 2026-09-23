import {
    createContext,
    createElement,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react"

const ShopContext = createContext(null);

export const ShopProvider = ({ children }) => {
	const [cart, setCart] = useState(() => {
		const savedCart = localStorage.getItem("store-cart");
		return savedCart ? JSON.parse(savedCart) : [];
	});
	const [favorites, setFavorites] = useState(() => {
		const savedFavorites = localStorage.getItem("store-favorites");
		return savedFavorites ? JSON.parse(savedFavorites) : [];
	});
	const [activePanel, setActivePanel] = useState(null);
	const [notification, setNotification] = useState("");

	useEffect(() => {
		localStorage.setItem("store-cart", JSON.stringify(cart));
	}, [cart]);

	useEffect(() => {
		localStorage.setItem("store-favorites", JSON.stringify(favorites));
	}, [favorites]);

	const showNotification = (message) => {
		setNotification(message);
		window.setTimeout(() => setNotification(""), 3500);
	};

	const addToCart = (product) => {
		setCart((currentCart) => {
			const existingProduct = currentCart.find((item) => item.id === product.id);

			if (existingProduct) {
				return currentCart.map((item) =>
					item.id === product.id
						? { ...item, quantity: item.quantity + 1 }
						: item,
				);
			}

			return [...currentCart, { ...product, quantity: 1 }];
		});
		showNotification("Товар додано до кошика");
	};

	const removeFromCart = (productId) => {
		setCart((currentCart) =>
			currentCart.filter((product) => product.id !== productId),
		);
	};

	const toggleFavorite = (product) => {
		const isFavorite = favorites.some((item) => item.id === product.id);

		setFavorites((currentFavorites) =>
			isFavorite
				? currentFavorites.filter((item) => item.id !== product.id)
				: [...currentFavorites, product],
		);

		if (!isFavorite) {
			showNotification("Товар додано до обраного. Перейдіть до обраного, щоб купити його");
		}
	};

	const value = useMemo(
		() => ({
			cart,
			favorites,
			activePanel,
			notification,
			addToCart,
			removeFromCart,
			toggleFavorite,
			setActivePanel,
		}),
		[cart, favorites, activePanel, notification],
	);

	return createElement(ShopContext.Provider, { value }, children);
};

export const useShop = () => {
	const context = useContext(ShopContext);

	if (!context) {
		throw new Error("useShop має використовуватися всередині ShopProvider");
	}

	return context;
};
