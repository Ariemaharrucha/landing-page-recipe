import { PlayCircleIcon, Timer, Utensils } from "lucide-react";
import hero from "../../assets/baked-chicken-wings-asian-style-tomatoes-sauce-plate.png";
import recipe from "../../assets/recipe.png";
import { Button } from "../ui/button";
export default function Heroes() {
  return (
    <section className="py-6 px-4 md:px-0">
      <div className="container mx-auto rounded-4xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left (Text) */}
          <div className="bg-[#e7fafe] p-6 md:p-10 flex flex-col justify-between gap-6">
            <div className="flex items-center gap-2 bg-white py-2 px-3 w-fit rounded-full">
              <img src={recipe} alt="" className="h-6 w-6" />
              <p className="text-xs md:text-sm font-semibold">Hot recipe</p>
            </div>
            <p className="text-3xl md:text-6xl font-bold leading-tight">
              Spicy delicious chicken wings
            </p>
            <p className="text-gray-700 text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium labore nihil corrupti nulla numquam dicta. Suscipit asperiores aut incidunt, iste ab nobis nemo exercitationem explicabo, vero distinctio nostrum voluptate totam!
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
                    src="https://randomuser.me/api/portraits/men/1.jpg"
                    alt="John Smith"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-sm md:text-base">John Smith</p>
                  <p className="text-xs md:text-sm text-gray-500">15 March 2025</p>
                </div>
              </div>
              <Button className="text-white font-semibold flex items-center gap-2 px-6 py-4 md:px-8 md:py-6 rounded-2xl mt-2 sm:mt-0">
                View recipe <PlayCircleIcon className="size-5 md:size-6" />
              </Button>
            </div>
          </div>
          {/* Right (Image) */}
          <div className="bg-black overflow-hidden min-h-[220px] md:min-h-0 flex items-center justify-center">
            <img src={hero} alt="" className="w-full h-full object-cover max-h-[320px] md:max-h-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
