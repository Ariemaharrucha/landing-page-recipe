import Template from "@/template/template";
import chefCooking from "../assets/chef-cooking.png";
import { Facebook, Twitter, Instagram } from "lucide-react";
export default function BlogPost() {
  return (
    <Template recipeSection={true}>
      <div className="">
        <h1 className="text-2xl md:text-6xl font-semibold leading-tight text-center">Full Guide to Becoming a Professional Chef</h1>
        <div className="flex items-center justify-center mt-6 md:mt-8">
          <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-4 pr-0 md:pr-10">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-300 overflow-hidden">
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="John Smith"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-semibold text-sm md:text-base">John Smith</p>
            </div>
            <div className="border-l-0 sm:border-l-2 border-gray-300 pl-0 sm:pl-4">
              <p className="text-xs md:text-sm text-gray-500">15 March 2025</p>
            </div>
          </div>
        </div>
        <p className="max-w-2xl md:max-w-4xl px-4 md:px=0 mx-auto mt-6 md:mt-8 text-gray-500 text-center text-sm md:text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, aliquam? Blanditiis dicta dolorem nulla voluptatem dignissimos architecto ducimus ratione magni aspernatur quae, suscipit modi temporibus maxime ut rerum at voluptas.</p>
      </div>
      <div className="mt-8 md:mt-12 rounded-xl md:rounded-2xl mx-4 md:mx-0 overflow-hidden">
        <img src={chefCooking} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="mt-8 md:mt-12 ">
        <div className="grid grid-cols-1 lg:grid-cols-3 mb-10 md:mb-20 gap-8 md:gap-12">
            <div className="col-span-1 lg:col-span-2 space-y-10 md:space-y-16">
                <div className="px-2 md:px-6">
                    <h2 className="text-xl md:text-3xl font-semibold">How did you start out in the food industry?</h2>
                    <p className="text-gray-500 mt-2 md:mt-4 text-sm md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus iure amet molestias, temporibus harum, earum odit perspiciatis, illo vero illum est cumque aliquam. Cum, eveniet eum porro ducimus rem fugit?</p>
                </div>
                <div className="px-2 md:px-6">
                    <h2 className="text-xl md:text-3xl font-semibold">How did you start out in the food industry?</h2>
                    <p className="text-gray-500 mt-2 md:mt-4 text-sm md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus iure amet molestias, temporibus harum, earum odit perspiciatis, illo vero illum est cumque aliquam. Cum, eveniet eum porro ducimus rem fugit?</p>
                </div>
                <div className="px-2 md:px-6">
                    <h2 className="text-xl md:text-3xl font-semibold">How did you start out in the food industry?</h2>
                    <div className="rounded-xl md:rounded-2xl overflow-hidden mt-6 md:mt-12">
                        <img src={chefCooking} alt="" className="w-full h-full object-cover" />
                    </div>
                    <p className="text-gray-500 mt-4 md:mt-6 text-sm md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus iure amet molestias, temporibus harum, earum odit perspiciatis, illo vero illum est cumque aliquam. Cum, eveniet eum porro ducimus rem fugit?</p>
                </div>
                <div className="bg-gray-400/40 p-4 md:p-10">
                    <p className="text-xl md:text-4xl font-semibold italic">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."</p>
                </div>
                <div className="px-2 md:px-6">
                    <h2 className="text-xl md:text-3xl font-semibold">How did you start out in the food industry?</h2>
                    <p className="text-gray-500 mt-2 md:mt-4 text-sm md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus iure amet molestias, temporibus harum, earum odit perspiciatis, illo vero illum est cumque aliquam. Cum, eveniet eum porro ducimus rem fugit?</p>
                </div>
            </div>
            <div className="col-span-1">
                <h5 className="text-base md:text-lg font-semibold text-center">SHARE ON THIS</h5>
                <div className="flex flex-row lg:flex-col items-center justify-center gap-4 mt-4 md:mt-6">
                    <Facebook className="size-5 md:size-6" />
                    <Twitter className="size-5 md:size-6" />
                    <Instagram className="size-5 md:size-6" />
                </div>
            </div>
        </div>
      </div>
    </Template>
  );
}
