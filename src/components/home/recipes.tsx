import { Heart, Clock, Utensils } from "lucide-react";
import recipe from "../../assets/Ads.png";

export default function Recipes() {
    return (
        <section className="px-4 md:px-0">
            <div className="container mx-auto pb-8">
                <h3 className="text-2xl md:text-4xl font-semibold text-center">Simple and tasty recipes</h3>
                <p className="text-center text-gray-700 mt-4 md:mt-8 text-sm md:text-base">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut <br className="hidden md:block" /> labore et dolore magna aliqut enim ad minim </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-12 lg:gap-16 mt-8 md:mt-12">
                    <CardRecipe />
                    <CardRecipe />
                    <CardRecipe />
                    <CardRecipe />
                    <CardRecipe />
                    <img src={recipe} alt="" className="w-full h-full object-cover rounded-2xl min-h-[180px]" />
                    <CardRecipe />
                    <CardRecipe />
                    <CardRecipe />
                </div>
            </div>
        </section>
    );
}

const CardRecipe = () => {
    return (
      <div className="rounded-2xl bg-[#E0F7FA] px-3 py-4 md:px-4 md:py-6 font-sans shadow-lg">
        {/* Container untuk Gambar dan Tombol Hati */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1998&auto=format&fit=crop"
            alt="Big and Juicy Wagyu Beef Cheeseburger"
            className="h-36 md:h-56 w-full rounded-xl object-cover"
          />
          {/* Tombol Hati */}
          <div className="absolute right-2 md:right-3 top-2 md:top-3 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white shadow-md">
            <Heart size={22} className="text-red-500 md:size-7" fill="currentColor" />
          </div>
        </div>

        {/* Konten Teks */}
        <div className="mt-3 md:mt-4">
          <h2 className="text-lg md:text-2xl font-bold text-gray-800">
            Big and Juicy Wagyu Beef Cheeseburger
          </h2>

          {/* Info Tambahan */}
          <div className="mt-3 md:mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-2 md:gap-6 text-gray-700">
            <div className="flex items-center gap-2">
              <Clock size={16} className="md:size-5" />
              <span className="text-xs md:text-base">30 Minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <Utensils size={16} className="md:size-5" />
              <span className="text-xs md:text-base">Snack</span>
            </div>
          </div>
        </div>
      </div>
    );
};