import { Button } from "@/components/ui/button";
import Template from "../template/template";
import ads from "../assets/Ads.png";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination";

import { articles } from "../data/dummy-artikel";
import { Link } from "react-router-dom";

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

type ArticleProps = {
    title: string;
    image: string;
    description: string;
    author: string;
    authorImage: string;
    date: string;
}

const ArticleCard = ({
  title,
  image,
  description,
  author,
  authorImage,
  date,
}: ArticleProps) => {
  return (
    <Link to={`/blog-post`}>
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <div className="overflow-hidden rounded-xl md:rounded-2xl w-full md:w-2/4 h-[250px]">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-2 md:p-4 space-y-2 md:space-y-4 flex-1">
        <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
        <p className="text-xs md:text-sm text-gray-500">{description}</p>
        <div className="flex items-center gap-2 md:gap-4 pr-0 md:pr-10">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-300 overflow-hidden">
            <img
              src={authorImage}
              alt={author}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-semibold text-xs md:text-base">{author}</p>
          </div>
          <div className="border-l-0 md:border-l-2 border-gray-300 pl-0 md:pl-4">
            <p className="text-xs md:text-sm text-gray-500">{date}</p>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
}


const MiniArticleCard = ({
  title,
  image,
  author, 
}: Pick<ArticleProps, "title" | "image" | "author">) => {
  return (
    <div className="grid grid-cols-2 gap-2 items-center">
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
