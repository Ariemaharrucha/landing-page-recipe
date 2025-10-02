import recipe from "../../assets/Ads.png";
import { recipes } from "../../data/dummy-recipe";
import { CardRecipe } from "../ui/card-recipe";

export default function Recipes() {
  return (
    <section className="px-4 md:px-0">
      <div className="container mx-auto pb-8">
        <h3 className="text-2xl md:text-4xl font-semibold text-center">
          Simple and tasty recipes
        </h3>
        <p className="text-center text-gray-700 mt-4 md:mt-8 text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut <br className="hidden md:block" /> labore et
          dolore magna aliqut enim ad minim{" "}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-12 lg:gap-16 mt-8 md:mt-12">
          {recipes.map((recipe) => (
            <CardRecipe
              key={recipe.id}
              title={recipe.title}
              image={recipe.image}
              duration={recipe.duration}
              category={recipe.category}
              bgColor="#E0F7FA"
            />
          ))}
          <img
            src={recipe}
            alt=""
            className="w-full h-full object-cover rounded-2xl min-h-[180px]"
          />
        </div>
      </div>
    </section>
  );
}
