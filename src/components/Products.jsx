// import pc from "@/assets/pc.png";
import likeIcon from "@/assets/icons/like.svg"
import useCart from "@/hooks/useCart.js"
import useProducts from "@/hooks/useProducts.js"
import { useShop } from "@/hooks/useShop.js"
import { LazyLoadImage } from "react-lazy-load-image-component"

const Products = () => {
  const { product, fetching, hasMore, loadMore } = useProducts();
  const { addToCart } = useCart();
  const { favorites, toggleFavorite } = useShop();
  return (
    <section className="mt-5 w-full min-w-0 rounded-[4px] bg-second px-4 py-5 sm:px-6 sm:py-6 lg:mt-6 lg:px-5 lg:py-5">
      <h2 className="text-center text-lg font-bold text-heading sm:text-xl">
        Товари
      </h2>

      <div className="mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [scrollbar-width:thin] sm:gap-4 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-5">
        {product.map((product) => (
          <article
            key={product.id}
            className="min-w-[min(82vw,260px)] snap-start overflow-hidden rounded-[7px] bg-bg sm:min-w-[260px] md:min-w-0"
          >
            <div className="relative flex aspect-[2.1/1] min-h-[100px] items-center justify-center bg-heading p-3 sm:min-h-[110px]">
              <button
                type="button"
                aria-label="Додати до обраного"
                onClick={() => toggleFavorite(product)}
                className="absolute right-2 top-2 z-10 cursor-pointer rounded-full bg-bg/80 p-2"
              >
                <img
                  src={likeIcon}
                  alt=""
                  className={`h-4 w-4 ${favorites.some((item) => item.id === product.id) ? "brightness-150 sepia" : "opacity-70"}`}
                />
              </button>
              <LazyLoadImage
                src={product.image}
                alt={product.title}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="min-w-0 p-3">
              <h3 className="truncate text-sm font-bold text-heading">
                {product.title}
              </h3>
              <p className="mt-1 text-xs text-text">{product.category}</p>

              <div className="mt-6 flex min-w-0 items-end justify-between gap-2">
                <div className="flex shrink-0 items-center gap-2 whitespace-nowrap">
                  <span className="text-lg font-bold text-first">
                    ${product.price}
                  </span>
                  {product.oldPrice && (
                    <span className="text-xs text-text line-through">
                      {product.oldPrice}
                    </span>
                  )}
                </div>
                {product.purchased && (
                  <span className="truncate text-[10px] text-text">
                    {product.purchased}
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={() => addToCart(product)}
                className="mt-4 w-full cursor-pointer rounded-[4px] bg-first px-3 py-2 text-sm font-bold text-heading transition-colors hover:bg-[#7c4bd1]"
              >
                Купити
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-5 flex justify-center">
        <button
          type="button"
          onClick={loadMore}
          disabled={fetching || !hasMore}
          className="cursor-pointer rounded-[4px] bg-first px-5 py-2 text-sm font-bold text-heading transition-colors hover:bg-[#7c4bd1]"
        >
          {fetching
            ? "Завантаження..."
            : hasMore
              ? "Дивитися більше"
              : "Немає більше товарів"}
        </button>
      </div>
    </section>
  );
};

export default Products;
