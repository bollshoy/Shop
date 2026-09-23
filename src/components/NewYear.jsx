import newYearBanner from "@/assets/newYearBanner.png"
import nintenda from "@/assets/nintendaSwitch.png"
import sneakers from "@/assets/sneakers.png"
import { Link } from "react-router-dom"

const NewYear = () => {
	return (
		<section className="relative grid min-h-[520px] overflow-hidden rounded-[4px] bg-second sm:min-h-[560px] lg:min-h-[403px] lg:grid-cols-2">
			<div className="relative flex min-h-[280px] flex-col justify-center overflow-hidden px-7 py-12 sm:px-12 lg:min-h-0 lg:px-20">
				<p className="relative z-10 text-[clamp(2.5rem,8vw,4.5rem)] font-light uppercase leading-[0.9] tracking-[0.02em] text-first">
					New Year
				</p>
				<h1 className="relative z-10 mt-3 text-[clamp(4.5rem,14vw,7rem)] font-light uppercase leading-[0.85] tracking-[0.02em] text-first">
					Sale
				</h1>

				<Link
					to="#"
					className="relative z-10 mt-8 w-fit rounded-[4px] bg-first px-4 py-2 text-sm font-bold text-heading transition-colors hover:bg-[#7c4bd1]"
				>
					See more
				</Link>

				<img
					src={sneakers}
					alt="Кросівки"
					className="pointer-events-none absolute bottom-3 left-[-3%] w-[32%] max-w-[170px] object-contain sm:bottom-6 sm:w-[28%] lg:bottom-8 lg:left-[-2%] lg:w-[34%]"
				/>
				<img
					src={nintenda}
					alt="Ігрова консоль Nintendo"
					className="pointer-events-none absolute right-[-2%] bottom-[-2%] w-[42%] max-w-[250px] object-contain sm:right-2 sm:w-[38%] lg:right-[-3%] lg:w-[45%]"
				/>
			</div>

			<div className="relative min-h-[280px] overflow-hidden bg-[#eeeeee]">
				<img
					src={newYearBanner}
					alt="Святковий Санта"
					className="absolute inset-0 h-full w-full object-cover object-center"
				/>
			</div>
		</section>
	);
};

export default NewYear;