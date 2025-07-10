import { PrinterIcon, Share, Timer, Utensils } from "lucide-react";
import Template from "../template/template";
import recipe from "../assets/baked-chicken-wings-asian-style-tomatoes-sauce-plate.png";
import ads from "../assets/Ads.png";
import { ingredientsMain, ingredientsSauce, otherRecipes, directions } from "../data/dummy-detail";

export default function RecipeDetail() {
  return (
    <Template recipeSection={true}>
      <section>
        {/* header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-6xl font-semibold leading-tight">Health Japanese Fried Rice</h1>
            <div className="mt-8 flex items-center gap-4">
              {/* Author Info */}
              <div className="flex items-center gap-4 pr-10">
                <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="John Smith" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-semibold">John Smith</p>
                  <p className="text-sm text-gray-500">15 March 2025</p>
                </div>
              </div>
              {/* Recipe Info */}
              <RecipeInfo icon={Timer} title="PREP TIME" value="30 minutes" />
              <RecipeInfo icon={Timer} title="COOK TIME" value="30 minutes" />
              <RecipeInfo icon={Utensils} title="CATEGORY" value="Chicken" />
            </div>
          </div>
          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#e7fafe] overflow-hidden">
                <PrinterIcon className="size-4" />
              </div>
              <p className="text-sm font-semibold">Print Recipe</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#e7fafe] overflow-hidden">
                <Share className="size-4" />
              </div>
              <p className="text-sm font-semibold">Share</p>
            </div>
          </div>
        </div>
        {/* end header */}

        {/* Image & Nutrition */}
        <section>
          <div className="grid grid-cols-3 mt-12 gap-8 h-[70vh]">
            <div className="col-span-2 overflow-hidden rounded-4xl">
              <img src={recipe} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-1 flex flex-col justify-between bg-[#e7fafe] p-6 rounded-2xl">
              <div>
                <h2 className="text-2xl font-semibold">Nutrition Information</h2>
                {["Calories", "Total Fat", "Protein", "Carbohydrates", "Cholesterol"].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between border-b border-gray-300 py-3">
                    <p className="text-gray-500">{item}</p>
                    <p>{["100g", "10g", "7.9g", "22g", "37mg"][idx]}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-center mt-4">
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </section>

        {/* Ingredients */}
        <section>
          <div className="grid grid-cols-3 mt-12 gap-8">
            <div className="col-span-2">
              <h2 className="text-3xl font-semibold leading-tight">Ingredients</h2>
              <div className="mt-12">
                <h5 className="text-lg font-semibold">From main dish</h5>
                {ingredientsMain.map((item, idx) => (
                  <IngredientItem key={idx} label={item} />
                ))}
              </div>
              <div className="mt-12">
                <h5 className="text-lg font-semibold">For the sauce</h5>
                {ingredientsSauce.map((item, idx) => (
                  <IngredientItem key={idx} label={item} />
                ))}
              </div>
            </div>
            {/* Other Recipes */}
            <div className="col-span-1">
              <h5 className="text-3xl font-semibold">Other Recipe</h5>
              <div className="mt-12 space-y-4">
                {otherRecipes.map((recipe, idx) => (
                  <OtherRecipeCard key={idx} {...recipe} />
                ))}
              </div>
              <div className="mt-10">
                <img src={ads} alt="Advertisement" />
              </div>
            </div>
          </div>
        </section>

        {/* Directions */}
        <section>
          <div className="mt-12 grid grid-cols-3 gap-8">
            <div className="col-span-2">
              <h5 className="text-3xl font-semibold">Directions</h5>
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
    <div className="py-6 border-b border-gray-300">
      <div className="flex items-center cursor-pointer">
        <input type="checkbox" className="peer sr-only" />
        <div className="w-5 h-5 rounded-full border-2 border-gray-300 peer-checked:border-green-500 peer-checked:bg-green-500 transition-colors"></div>
        <span className="ml-6 text-black font-semibold">{stepNumber}. {description}</span>
      </div>
      <div className="ml-10 mt-6">
        <p className="text-gray-500 text-sm">{details}</p>
        {image && (
          <div className="mt-6 rounded-2xl overflow-hidden h-[50vh]">
            <img src={image} alt="" className="w-full h-full object-cover" />
          </div>
        )}
      </div>
    </div>
  );
}

const OtherRecipeCard = ({ image, title, author }: { image: string; title: string; author: string }) => {
  return (
    <div className="grid grid-cols-2 gap-4 items-center">
      <div className="overflow-hidden rounded-2xl">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">By {author}</p>
      </div>
    </div>
  );
}


const RecipeInfo = ({ icon: Icon, title, value }: { icon: any; title: string; value: string }) => {
  return (
    <div className="flex items-center gap-4 border-l-2 border-gray-300 px-10 text-sm">
      <Icon className="size-6" />
      <div>
        <p className="text-gray-500">{title}</p>
        <p>{value}</p>
      </div>
    </div>
  );
}

const IngredientItem = ({ label }: { label: string }) => {
  return (
    <div className="flex items-center cursor-pointer py-6 border-b border-gray-300">
      <input type="checkbox" className="peer sr-only" />
      <div className="w-5 h-5 rounded-full border-2 border-gray-300 peer-checked:border-green-500 peer-checked:bg-green-500 transition-colors"></div>
      <span className="ml-2 text-gray-700">{label}</span>
    </div>
  );
}
