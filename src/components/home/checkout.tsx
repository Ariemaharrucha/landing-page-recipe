
import { InstagramIcon } from "lucide-react";
import post from "../../assets/Post.png";
import post2 from "../../assets/Post(1).png";
import post3 from "../../assets/Post(2).png";
import post4 from "../../assets/Post(3).png";
import { Button } from "../ui/button";

export default function Checkout() {
  return (
    <section className="py-16 md:py-28 px-4 md:px-0 bg-gradient-to-t from-[#e7fafe]/80 ">
      <div className="container mx-auto">
        <div className="">
          <h3 className="text-center text-2xl md:text-5xl font-semibold leading-tight">
            Check out @foodieland on Instagram
          </h3>
          <p className="text-center text-gray-700 mt-2 md:mt-4 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut <br className="hidden md:block" />
            labore et dolore magna aliqut enim ad minim
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8 mt-6 md:mt-12">
            <div className="col-span-1">
              <img src={post} alt="" className="w-full h-full object-cover rounded-xl min-h-[120px] md:min-h-[180px]" />
            </div>
            <div className="col-span-1">
              <img src={post2} alt="" className="w-full h-full object-cover rounded-xl min-h-[120px] md:min-h-[180px]" />
            </div>
            <div className="col-span-1">
              <img src={post3} alt="" className="w-full h-full object-cover rounded-xl min-h-[120px] md:min-h-[180px]" />
            </div>
            <div className="col-span-1">
              <img src={post4} alt="" className="w-full h-full object-cover rounded-xl min-h-[120px] md:min-h-[180px]" />
            </div>
          </div>
          <div className="flex items-center justify-center mt-6 md:mt-8">
            <Button size="lg" className="mt-8 md:mt-12 px-8 md:px-28 py-4 md:py-6 rounded-lg w-full sm:w-auto">
              visit our instagram <InstagramIcon className="size-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
