import { Heart, Clock, Utensils } from "lucide-react";

export default function RecipeSection() {
    return (
        <section className="py-14">
            <div className="container mx-auto pb-8">
                <h3 className=" text-4xl text-center font-semibold leading-tight">
                    You may like these recipe too
                </h3>
                <div className="grid grid-cols-4 items-center gap-6 mt-12">
                    <CardRecipe />
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
      <div className="rounded-2xl px-4 py-6 font-sans">
        {/* Container untuk Gambar dan Tombol Hati */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1998&auto=format&fit=crop"
            alt="Big and Juicy Wagyu Beef Cheeseburger"
            className="h-56 w-full rounded-xl object-cover"
          />
          {/* Tombol Hati */}
          <div className="absolute right-3 top-3 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md">
            <Heart size={28} className="text-red-500" fill="currentColor" />
          </div>
        </div>
  
        {/* Konten Teks */}
        <div className="mt-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Big and Juicy Wagyu Beef Cheeseburger
          </h2>
  
          {/* Info Tambahan */}
          <div className="mt-4 flex items-center gap-6 text-gray-700">
            <div className="flex items-center gap-2">
              <Clock size={20} />
              <span>30 Minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <Utensils size={20} />
              <span>Snack</span>
            </div>
          </div>
        </div>
      </div>
    );
};