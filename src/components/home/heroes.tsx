import { PlayCircleIcon, Timer, Utensils } from "lucide-react";
import hero from "../../assets/baked-chicken-wings-asian-style-tomatoes-sauce-plate.png";
import recipe from "../../assets/recipe.png";
import { Button } from "../ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const heroesData = [
  {
    title: "Spicy Delicious Chicken Wings",
    description:
      "Discover the perfect blend of heat and flavor with our signature spicy chicken wings recipe. A guaranteed crowd-pleaser for any occasion, perfect for game day or a family dinner.",
    author: {
      name: "John Smith",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      date: "15 March 2025",
    },
    image: hero,
  },
  {
    title: "Fresh & Vibrant Summer Salads",
    description:
      "Elevate your meals with our collection of fresh and vibrant summer salads. Packed with seasonal ingredients and topped with delicious, light dressings that are easy to make.",
    author: {
      name: "Jane Doe",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      date: "28 April 2025",
    },
    image: "https://images.unsplash.com/photo-1744116432662-dbe90acb4a63?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "The Ultimate Homemade Beef Burger",
    description:
      "Craft the perfect homemade beef burger with our step-by-step guide. Juicy, flavorful, and customizable with all your favorite toppings for a satisfying meal.",
    author: {
      name: "Peter Jones",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      date: "10 June 2025",
    },
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=2072&auto=format&fit=crop",
  },
];
export default function Heroes() {
	return (
		<section className="py-2 px-4 md:px-0 min-h-screen">
			<div className="container mx-auto rounded-4xl overflow-hidden ">
				<Swiper spaceBetween={30} slidesPerView={1} loop>
					{heroesData.map((item, idx) => (
						<SwiperSlide key={idx}>
							<div className="grid grid-cols-1 md:grid-cols-2 ">
								{/* Left (Text) */}
								<div className="bg-[#e7fafe] p-6 md:p-10 flex flex-col justify-between gap-6 ">
									<div className="flex items-center gap-2 bg-white py-2 px-3 w-fit rounded-full">
										<img src={recipe} alt="" className="h-6 w-6" />
										<p className="text-xs md:text-sm font-semibold">
											Hot recipe
										</p>
									</div>
									<p className="text-3xl md:text-6xl font-bold leading-tight">
										{item.title}
									</p>
									<p className="text-gray-700 text-sm md:text-base">
										{item.description}
									</p>
									<div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
										<Button className="flex items-center gap-2 rounded-full bg-slate-100 text-black font-semibold">
											<Timer className="size-5 md:size-6" />
											30 minutes
										</Button>
										<Button className="flex items-center gap-2 rounded-full bg-slate-100 text-black font-semibold">
											<Utensils className="size-5 md:size-6" />
											30 minutes
										</Button>
									</div>
									<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
										<div className="flex items-center gap-4">
											<div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-300 overflow-hidden">
												<img
													src={item.author.avatar}
													alt={item.author.name}
													className="w-full h-full object-cover"
												/>
											</div>
											<div>
												<p className="font-semibold text-sm md:text-base">
													{item.author.name}
												</p>
												<p className="text-xs md:text-sm text-gray-500">
													{item.author.date}
												</p>
											</div>
										</div>
										<Button className="text-white font-semibold flex items-center gap-2 px-6 py-4 md:px-8 md:py-6 rounded-2xl mt-2 sm:mt-0">
											View recipe{" "}
											<PlayCircleIcon className="size-5 md:size-6" />
										</Button>
									</div>
								</div>
								{/* Right (Image) */}
								<div className="bg-black overflow-hidden min-h-[220px] md:min-h-0 flex items-center justify-center h-[200px">
									<img
										src={item.image}
										alt=""
										className="w-full h-full object-cover max-h-[320px] md:max-h-none"
									/>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}
