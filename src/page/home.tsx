import Template from "../template/template";
import Heroes from "../components/home/heroes";
import Categories from "../components/home/categories";
import Recipes from "../components/home/recipes";
import LearnMore from "../components/home/learn-more";
import Checkout from "../components/home/checkout";
import MoreRecipes from "../components/home/more-recipe";
export default function Home() {
  return (
    <Template>
      <section>
        <Heroes />
        <Categories />
        <Recipes />
        <LearnMore />
        <Checkout />
        <MoreRecipes />
      </section>
    </Template>
  );
}
