import { Button } from "@/components/ui/button";
import Template from "../template/template";
import ads from "../assets/Ads.png";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext} from "@/components/ui/pagination";
import { articles } from "../data/dummy-artikel";
import { ArticleCard, MiniArticleCard } from "@/components/ui/card-article";

export default function Blog() {
  return (
    <Template>
      <section className="px-4 md:px-0">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-semibold leading-tight text-center">
            Blog & Article
          </h1>
          <p className="text-gray-700 text-center mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quod.
          </p>
          <div className="w-full bg-white rounded-2xl p-2 h-fit flex flex-col sm:flex-row items-center gap-2 sm:gap-0 sm:justify-between mt-8 md:mt-12 border border-gray-300">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full sm:w-auto flex-1 px-4 md:px-6 py-2 rounded-2xl outline-none text-sm md:text-base"
            />
            <Button
              size="lg"
              className="w-full sm:w-auto mt-2 sm:mt-0 py-4 md:py-6 px-6 md:px-12"
            >
              Subscribe
            </Button>
          </div>
        </div>

        {/* Artikel Grid */}
        <div className="mt-8 md:mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="col-span-1 lg:col-span-2">
              {articles.map((article) => (
                <ArticleCard key={article.id} {...article} />
              ))}
            </div>
            <div className="col-span-1">
              <h3 className="text-lg md:text-3xl font-semibold">
                Tasty Recipe
              </h3>
              <div className="mt-4 md:mt-8 space-y-4">
              {articles.slice(0, 2).map((article) => (
                <MiniArticleCard key={article.id} {...article} />
              ))}
              </div>
              <div className="mt-6 md:mt-10">
                <img src={ads} alt="Advertisement" className="w-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-12">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationLink href="#" className="bg-black text-white">
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  className="border border-gray-300"
                >
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  className="border border-gray-300"
                >
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </section>
    </Template>
  );
}