import { PlayCircleIcon, Timer, Utensils } from "lucide-react";
import hero from "../../assets/baked-chicken-wings-asian-style-tomatoes-sauce-plate.png";
import recipe from "../../assets/recipe.png";
import { Button } from "../ui/button";
export default function Heroes() {
  return (
    <section className="py-6">
      <div className="container mx-auto rounded-4xl overflow-hidden  ">
        <div className="grid grid-cols-2">
          <div className="bg-[#e7fafe] p-10 col-span-1 flex flex-col justify-between">
            <div className="flex items-center gap-2 bg-white py-2 px-3 w-fit rounded-full">
              <img src={recipe} alt="" />
              <p className="text-sm font-semibold">Hot recipe</p>
            </div>
            <p className="text-6xl font-bold leading-tight">
              Spicy delicious chicken wings
            </p>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium labore nihil corrupti nulla numquam dicta. Suscipit
              asperiores aut incidunt, iste ab nobis nemo exercitationem
              explicabo, vero distinctio nostrum voluptate totam!
            </p>
            <div className="flex items-center gap-2">
              <Button className="flex items-center gap-2 rounded-full bg-slate-100 text-black font-semibold  ">
                <Timer className="size-6" />
                30 minutes
              </Button>
              <Button className="flex items-center gap-2 rounded-full bg-slate-100 text-black font-semibold  ">
                <Utensils className="size-6" />
                30 minutes
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
                  <img
                    src="https://randomuser.me/api/portraits/men/1.jpg"
                    alt="John Smith"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">John Smith</p>
                  <p className="text-sm text-gray-500">15 March 2025</p>
                </div>
              </div>
              <Button className="text-white font-semibold flex items-center gap-2 px-8 py-6 rounded-2xl">
                View recipe <PlayCircleIcon className="size-6" />
              </Button>
            </div>
          </div>
          <div className="col-span-1 bg-black overflow-hidden">
            <img src={hero} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
