import { Button } from "../ui/button";
import learnMore from "../../assets/portrait-happy-male-chef.png";

export default function LearnMore() {
    return (
        <section className="py-32">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 gap-4 items-center">
                    <div className="col-span-1 px-6">
                        <h3 className="text-5xl font-semibold leading-tight">Everyone can be <br /> a chef in their own kitchen</h3>
                        <p className="text-gray-700 mt-4">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim .</p>
                        <Button size="lg" className="mt-28 py-6 px-12 rounded-2xl">Learn more </Button>
                    </div>
                    <div className="col-span-1 overflow-hidden rounded-2xl bg-[#e7fafe]">
                        <img src={learnMore} alt="" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>  
        </section>
    );
}