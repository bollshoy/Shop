import pc from "@/assets/pc.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="relative min-h-[500px] flex-1 overflow-hidden rounded-[4px] bg-second px-5 py-8 sm:min-h-[520px] sm:px-8 sm:py-12 lg:min-h-[363px] lg:px-10 lg:py-36">
      <span className="pointer-events-none absolute top-5 left-5 whitespace-nowrap text-[clamp(3.5rem,12vw,6.5rem)] font-bold leading-none text-bg sm:left-8">
        Розпродаж 20%
      </span>

      <div className="relative z-20 max-w-[490px]">
        <p className="text-xs uppercase text-text sm:text-sm">
          Найкращий продаж 2026
        </p>
        <h1 className="mt-3 text-2xl font-bold uppercase leading-[1.2] text-heading sm:text-3xl lg:text-4xl lg:leading-[1.25]">
          Lennon R2D2
          <br />
          with Nvidia 5090 TI
        </h1>
        <Link
          to="#"
          className="mt-4 inline-flex rounded-[4px] bg-first px-5 py-2 text-sm font-bold text-heading transition-colors hover:bg-[#7c4bd1]"
        >
          Купити зараз
        </Link>
      </div>

      <img
        src={pc}
        alt="Gaming computer and laptop"
        className="pointer-events-none absolute bottom-0 right-[-8%] z-10 w-[90%] max-w-[490px] object-contain sm:right-[-3%] sm:w-[72%] lg:right-0 lg:w-[52%]"
      />
    </section>
  );
};

export default Banner;
