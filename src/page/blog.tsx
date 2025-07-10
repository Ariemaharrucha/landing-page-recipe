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
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function Blog() {
  return (
    <Template>
      <section>
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-semibold leading-tight text-center">
            Blog & Article
          </h1>
          <p className="text-gray-700 mt-4 text-center mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quod.
          </p>
          <div className="w-full bg-white rounded-2xl p-2 h-fit flex items-center justify-between mt-12 border border-gray-300">
            <input
              type="text"
              placeholder="Enter your email"
              className="px-6 py-2 rounded-2xl outline-none"
            />
            <Button size="lg" className="py-6 px-12">
              Subscribe
            </Button>
          </div>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <div className="flex gap-4">
                <div className="overflow-hidden rounded-2xl w-2/4 ">
                  <img
                    src={
                      "https://i.pinimg.com/736x/20/3c/b1/203cb19e92db4527b32c19d8fbf60810.jpg"
                    }
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 space-y-4">
                  <h3 className="text-xl font-semibold">
                    Crochet Projects for Noodle Lovers
                  </h3>
                  <p className="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minima placeat quia veritatis quos! Nihil veniam voluptas.
                  </p>
                  <div className="flex items-center gap-4 pr-10">
                    <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                      <img
                        src="https://randomuser.me/api/portraits/men/1.jpg"
                        alt="John Smith"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">John Smith</p>
                    </div>
                    <div className="border-l-2 border-gray-300 pl-4">
                      <p className="text-sm text-gray-500">15 March 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <h3 className="text-3xl font-semibold">Tasty Recipe</h3>
              <div className="mt-8">
                <div className="grid grid-cols-2 gap-4 items-center">
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={
                        "https://i.pinimg.com/736x/20/3c/b1/203cb19e92db4527b32c19d8fbf60810.jpg"
                      }
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Crochet Projects for Noodle Lovers
                    </h3>
                    <p className="text-sm text-gray-500">By John Smith</p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <img src={ads} alt="Advertisement" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationLink href="#" className="bg-black text-white">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="border border-gray-300">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="border border-gray-300">3</PaginationLink>
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
