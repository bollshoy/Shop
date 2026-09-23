import { categories } from "@/data/categories";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <aside className="flex min-h-[300px] w-full flex-col rounded-[4px] bg-second p-4 sm:min-h-[320px] sm:p-5 lg:min-h-[363px] lg:w-[258px] lg:shrink-0 lg:p-4">
      <h2 className="text-base font-bold uppercase text-heading sm:text-xl">
        Категорії товарів
      </h2>

      <nav className="mt-7" aria-label="Product categories">
        <ul className="flex flex-col gap-2">
          {categories.map((category, index) => (
            <li key={category}>
              <Link
                to="#"
                aria-current={index === 0 ? "page" : undefined}
                className={`text-[13px] leading-4 transition-colors hover:text-heading ${
                  index === 0 ? "text-first" : "text-text"
                }`}
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto flex items-center justify-between gap-4 text-[11px] leading-4 text-text">
        <Link to="#" className="transition-colors hover:text-heading">
          Help
        </Link>
        <Link
          to="#"
          className="underline underline-offset-2 transition-colors hover:text-heading"
        >
          Terms &amp; Conditions
        </Link>
      </div>
    </aside>
  );
};

export default SideBar;
