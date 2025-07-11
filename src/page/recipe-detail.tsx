import { PrinterIcon, Share, Timer, Utensils } from "lucide-react";
import Template from "../template/template";
import recipe from "../assets/baked-chicken-wings-asian-style-tomatoes-sauce-plate.png";
import ads from "../assets/Ads.png";
import { ingredientsMain, ingredientsSauce, otherRecipes, directions } from "../data/dummy-detail";

export default function RecipeDetail() {
  return (
    <Template recipeSection={true}>
      <section className="px-4 md:px-0">
        {/* header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-6xl font-semibold leading-tight">Health Japanese Fried Rice</h1>
            <div className="mt-4 md:mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              {/* Author Info */}
              <div className="flex items-center gap-4 pr-0 md:pr-10 w-full sm:w-auto border-b sm:border-b-0 border-gray-200 pb-4 sm:pb-0">
                <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-gray-300 overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="John Smith" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-sm md:text-base">John Smith</p>
                  <p className="text-xs md:text-sm text-gray-500">15 March 2025</p>
                </div>
              </div>
              {/* Recipe Info */}
              <div className="flex gap-4 w-full sm:w-auto">
                <RecipeInfo icon={Timer} title="PREP TIME" value="30 minutes" />
                <RecipeInfo icon={Timer} title="COOK TIME" value="30 minutes" />
                <RecipeInfo icon={Utensils} title="CATEGORY" value="Chicken" />
              </div>
            </div>
          </div>
          {/* Action Buttons */}
          <div className="flex items-center gap-4 justify-center sm:justify-start md:justify-center mt-4 md:mt-0">
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-[#e7fafe] overflow-hidden">
                <PrinterIcon className="size-4" />
              </div>
              <p className="text-xs md:text-sm font-semibold">Print Recipe</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-[#e7fafe] overflow-hidden">
                <Share className="size-4" />
              </div>
              <p className="text-xs md:text-sm font-semibold">Share</p>
            </div>
          </div>
        </div>
        {/* end header */}

        {/* Image & Nutrition */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-3 mt-8 md:mt-12 gap-6 md:gap-8 min-h-[300px] md:h-[70vh]">
            <div className="col-span-1 lg:col-span-2 overflow-hidden rounded-2xl md:rounded-4xl">
              <img src={recipe} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-1 flex flex-col justify-between bg-[#e7fafe] p-4 md:p-6 rounded-2xl">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold">Nutrition Information</h2>
                {["Calories", "Total Fat", "Protein", "Carbohydrates", "Cholesterol"].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between border-b border-gray-300 py-2 md:py-3">
                    <p className="text-gray-500 text-sm md:text-base">{item}</p>
                    <p className="text-sm md:text-base">{["100g", "10g", "7.9g", "22g", "37mg"][idx]}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-center mt-4 text-sm md:text-base">
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </section>

        {/* Ingredients */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-3 mt-8 md:mt-12 gap-6 md:gap-8">
            <div className="col-span-1 lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-semibold leading-tight">Ingredients</h2>
              <div className="mt-8 md:mt-12">
                <h5 className="text-base md:text-lg font-semibold">From main dish</h5>
                {ingredientsMain.map((item, idx) => (
                  <IngredientItem key={idx} label={item} />
                ))}
              </div>
              <div className="mt-8 md:mt-12">
                <h5 className="text-base md:text-lg font-semibold">For the sauce</h5>
                {ingredientsSauce.map((item, idx) => (
                  <IngredientItem key={idx} label={item} />
                ))}
              </div>
            </div>
            {/* Other Recipes */}
            <div className="col-span-1">
              <h5 className="text-2xl md:text-3xl font-semibold">Other Recipe</h5>
              <div className="mt-8 md:mt-12 space-y-4">
                {otherRecipes.map((recipe, idx) => (
                  <OtherRecipeCard key={idx} {...recipe} />
                ))}
              </div>
              <div className="mt-6 md:mt-10">
                <img src={ads} alt="Advertisement" className="w-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Directions */}
        <section>
          <div className="mt-8 md:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="col-span-1 lg:col-span-2">
              <h5 className="text-2xl md:text-3xl font-semibold">Directions</h5>
              {directions.map((step) => (
                <DirectionStep key={step.stepNumber} {...step} />
              ))}
            </div>
          </div>
        </section>
      </section>
    </Template>
  );
}

const DirectionStep = ({ stepNumber, description, details, image }: { stepNumber: number; description: string; details: string; image?: string }) => {
  return (
    <div className="py-4 md:py-6 border-b border-gray-300">
      <div className="flex items-center cursor-pointer">
        <input type="checkbox" className="peer sr-only" />
        <div className="w-4 md:w-5 h-4 md:h-5 rounded-full border-2 border-gray-300 peer-checked:border-green-500 peer-checked:bg-green-500 transition-colors"></div>
        <span className="ml-4 md:ml-6 text-black font-semibold text-sm md:text-base">{stepNumber}. {description}</span>
      </div>
      <div className="ml-8 md:ml-10 mt-4 md:mt-6">
        <p className="text-gray-500 text-xs md:text-sm">{details}</p>
        {image && (
          <div className="mt-4 md:mt-6 rounded-2xl overflow-hidden min-h-[200px] md:h-[50vh]">
            <img src={image} alt="" className="w-full h-full object-cover" />
          </div>
        )}
      </div>
    </div>
  );
}

const OtherRecipeCard = ({ image, title, author }: { image: string; title: string; author: string }) => {
  return (
    <div className="grid grid-cols-2 gap-3 md:gap-4 items-center">
      <div className="overflow-hidden rounded-xl md:rounded-2xl aspect-square">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div>
        <h3 className="text-base md:text-xl font-semibold">{title}</h3>
        <p className="text-xs md:text-sm text-gray-500">By {author}</p>
      </div>
    </div>
  );
}

const RecipeInfo = ({ icon: Icon, title, value }: { icon: React.ElementType; title: string; value: string }) => {
  return (
    <div className="flex items-center gap-2 md:gap-4 border-l-0 sm:border-l-2 border-gray-300 px-0 sm:px-6 md:px-10 text-xs md:text-sm w-full sm:w-auto">
      <Icon className="size-5 md:size-6" />
      <div>
        <p className="text-gray-500">{title}</p>
        <p>{value}</p>
      </div>
    </div>
  );
}

const IngredientItem = ({ label }: { label: string }) => {
  return (
    <div className="flex items-center cursor-pointer py-4 md:py-6 border-b border-gray-300">
      <input type="checkbox" className="peer sr-only" />
      <div className="w-4 md:w-5 h-4 md:h-5 rounded-full border-2 border-gray-300 peer-checked:border-green-500 peer-checked:bg-green-500 transition-colors"></div>
      <span className="ml-2 text-gray-700 text-sm md:text-base">{label}</span>
    </div>
  );
}
