import { recipes } from "../../data/dummy-more-recipe";
import { CardRecipe } from "../ui/card-recipe";

export default function MoreRecipes() {
  return (
    <section className="py-16 md:py-28 px-4 md:px-0">
      <div className="container mx-auto pb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h3 className="text-2xl md:text-4xl font-semibold leading-tight">
            Try this delicious recipe <br className="hidden md:block" /> to make
            your day
          </h3>
          <p className="text-gray-700 mt-2 md:mt-8 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut <br className="hidden md:block" /> labore et
            dolore magna aliqut enim ad minim{" "}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-4 md:gap-6 mt-8 md:mt-12">
          {recipes.map((recipe) => (
            <CardRecipe
              key={recipe.id}
              title={recipe.title}
              image={recipe.image}
              duration={recipe.duration}
              category={recipe.category}
              shadow={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
