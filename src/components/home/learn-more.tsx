import { Button } from "../ui/button";
import learnMore from "../../assets/portrait-happy-male-chef.png";

export default function LearnMore() {
  return (
    <section className="py-16 md:py-32 px-4 md:px-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4 items-center">
          <div className="col-span-1 px-2 md:px-6 order-2 md:order-1">
            <h3 className="text-2xl md:text-5xl font-semibold leading-tight">
              Everyone can be <br className="hidden md:block" /> a chef in their
              own kitchen
            </h3>
            <p className="text-gray-700 mt-2 md:mt-4 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim .
            </p>
            <Button
              size="lg"
              className="mt-8 md:mt-28 py-4 md:py-6 px-8 md:px-12 rounded-2xl w-full md:w-auto"
            >
              Learn more{" "}
            </Button>
          </div>
          <div className="col-span-1 overflow-hidden rounded-2xl bg-[#e7fafe] order-1 md:order-2 min-h-[220px] flex items-center justify-center">
            <img
              src={learnMore}
              alt=""
              className="w-full h-full object-cover max-h-[320px] md:max-h-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
