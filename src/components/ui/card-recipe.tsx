import { Clock, Heart, Utensils } from "lucide-react";
import { Link } from "react-router-dom";

type CardRecipeProps = {
  title: string;
  image: string;
  duration: string;
  category: string;
  shadow?: boolean;
  bgColor?: string;
};

export const CardRecipe = ({ title, image, duration, category, shadow = true, bgColor }: CardRecipeProps) => {
    return (
      <Link to="/recipe-detail">
        <div className={`rounded-2xl px-3 py-4 md:px-4 md:py-6 font-sans justify-between ${shadow ? "shadow-lg" : ""}`}
        style={bgColor ? { backgroundColor: bgColor } : undefined}
        >
          <div className="relative">
            <img src={image} alt={title} className="h-36 md:h-56 w-full rounded-xl object-cover"/>
            <div className="absolute right-2 md:right-3 top-2 md:top-3 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white shadow-md">
              <Heart size={22} className="text-red-500 md:size-7" fill="currentColor" />
            </div>
          </div>
          <div className="mt-3 md:mt-4">
            <h2 className="text-base md:text-2xl font-semibold text-gray-800">
              {title}
            </h2>
            <div className="mt-3 md:mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-2 md:gap-6 text-gray-700">
              <div className="flex items-center gap-2">
                <Clock size={16} className="md:size-5" />
                <span className="text-xs md:text-base">{duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Utensils size={16} className="md:size-5" />
                <span className="text-xs md:text-base">{category}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
};