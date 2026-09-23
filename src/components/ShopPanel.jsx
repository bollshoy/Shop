import useCart from "@/hooks/useCart.js"
import { useShop } from "@/hooks/useShop.js"

const ShopPanel = () => {
  const { cart, removeFromCart } = useCart();
  const {
    favorites,
    activePanel,
    notification,
    addToCart,
    setActivePanel,
  } = useShop();
  const products = activePanel === "cart" ? cart : favorites;

  return (
    <>
      {activePanel && (
        <div className="fixed inset-0 z-40 bg-black/50" onClick={() => setActivePanel(null)}>
          <aside
            className="absolute right-0 top-0 h-full w-full max-w-[380px] overflow-y-auto bg-second p-5 shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-heading">
                {activePanel === "cart" ? "Кошик" : "Обране"}
              </h2>
              <button
                type="button"
                onClick={() => setActivePanel(null)}
                className="cursor-pointer text-2xl text-heading"
                aria-label="Закрити"
              >
                ×
              </button>
            </div>

            {products.length === 0 ? (
              <p className="mt-8 text-center text-text">
                {activePanel === "cart"
                  ? "У кошику поки немає товарів"
                  : "В обраному поки немає товарів"}
              </p>
            ) : (
              <div className="mt-6 flex flex-col gap-4">
                {products.map((product) => (
                  <div key={product.id} className="flex gap-3 rounded-[4px] bg-bg p-3">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-16 w-16 object-contain"
                    />
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate font-bold text-heading">{product.title}</h3>
                      <p className="mt-1 text-sm text-first">${product.price}</p>
                      {activePanel === "cart" && (
                        <p className="text-xs text-text">Кількість: {product.quantity}</p>
                      )}
                      <div className="mt-2 flex gap-2">
                        {activePanel === "cart" ? (
                          <button
                            type="button"
                            onClick={() => removeFromCart(product.id)}
                            className="cursor-pointer text-xs text-text underline"
                          >
                            Видалити
                          </button>
                        ) : (
                          <button
                            type="button"
                            onClick={() => addToCart(product)}
                            className="cursor-pointer text-xs text-first underline"
                          >
                            Купити
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </aside>
        </div>
      )}

      {notification && (
        <div className="fixed bottom-5 right-5 z-50 max-w-[330px] rounded-[4px] bg-first px-4 py-3 text-sm text-heading shadow-lg">
          {notification}
        </div>
      )}
    </>
  );
};

export default ShopPanel;
