
import { Heart, Clock, Utensils } from "lucide-react";
import { recipes } from "../../data/dummy-more-recipe";

export default function RecipeSection() {
    return (
        <section className="py-8 md:py-14">
            <div className="container mx-auto pb-8">
                <h3 className="text-2xl md:text-4xl text-center font-semibold leading-tight">
                    You may like these recipe too
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-4 md:gap-6 mt-8 md:mt-12">
                    {recipes.slice(0, 4).map((recipe) => (
                        <CardRecipe key={recipe.id} title={recipe.title} image={recipe.image} duration={recipe.duration} category={recipe.category} />
                    ))}
                </div>
            </div>
        </section>
    );
}

type RecipeProps = {
    title: string;
    image: string;
    duration: string;
    category: string;
}

const CardRecipe = ({ title, image, duration, category }: RecipeProps) => {
    return (
      <div className="rounded-2xl px-3 py-4 md:px-4 md:py-6 font-sans">
        {/* Container untuk Gambar dan Tombol Hati */}
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="h-36 md:h-56 w-full rounded-xl object-cover"
          />
          {/* Tombol Hati */}
          <div className="absolute right-2 md:right-3 top-2 md:top-3 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white shadow-md">
            <Heart size={22} className="text-red-500 md:size-7" fill="currentColor" />
          </div>
        </div>

        {/* Konten Teks */}
        <div className="mt-3 md:mt-4">
          <h2 className="text-base md:text-xl font-semibold text-gray-800">
            {title}
          </h2>

          {/* Info Tambahan */}
          <div className="mt-3 md:mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-2 md:gap-6 text-gray-700">
            <div className="flex items-center gap-2">
              <Clock size={16} className="md:size-5" />
              <span className="text-xs md:text-base"> {duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Utensils size={16} className="md:size-5" />
              <span className="text-xs md:text-base">{category}</span>
            </div>
          </div>
        </div>
      </div>
    );
};