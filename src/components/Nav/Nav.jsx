import search from "@/assets/icons/search.svg"
import ShopPanel from "@/components/ShopPanel.jsx"
import { icons } from "@/data/icons.js"
import { useShop } from "@/hooks/useShop.js"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { Link } from "react-router-dom"
import logo from "/public/logo.svg"
const Nav = () => {
  const { cart, favorites, setActivePanel } = useShop();
  const cartCount = cart.reduce((total, product) => total + product.quantity, 0);

  return (
    <>
      <div className="flex items-center justify-between pt-10">
      {/*  logo*/}
      <div>
        <Link to="/" className="">
          <LazyLoadImage alt="logo" src={logo} width="80" height="40" />
        </Link>
      </div>
      {/*  search*/}
      <div className="flex-1 max-w-[500px] px-8">
        <div className="relative w-full">
          <img
            src={search}
            loading="lazy"
            alt="Search"
            className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 object-contain opacity-40 cursor-pointer"
          />

          <input
            type="text"
            placeholder="Search for anything..."
            className="w-full rounded-xl bg-second py-3 pl-12 pr-4 text-sm text-text placeholder-text outline-none transition-all focus:bg-[#1f1f21]"
          />
        </div>
      </div>
      {/*  icons*/}
        <div className="flex items-center gap-5">
          {icons.map((icon) => (
            <button
              type="button"
              key={icon.icon}
              onClick={() => setActivePanel(icon.alt === "shop" ? "cart" : "favorites")}
              className="relative cursor-pointer"
              aria-label={icon.alt === "shop" ? "Відкрити кошик" : "Відкрити обране"}
            >
              <LazyLoadImage alt={icon.alt} src={icon.icon} />
              {((icon.alt === "shop" && cartCount > 0) ||
                (icon.alt === "like" && favorites.length > 0)) && (
                <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-first px-1 text-[10px] font-bold text-heading">
                  {icon.alt === "shop" ? cartCount : favorites.length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
      <ShopPanel />
    </>
  );
};

export default Nav;
