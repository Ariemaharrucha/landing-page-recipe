import logo from "../../assets/Foodieland..png";
import { Button } from "../ui/button";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto px-4 md:px-2">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 py-8 md:py-10 border-b-[1px] border-black">
          <div className="flex-1 min-w-[180px]">
            <img src={logo} alt="" className="h-6 w-auto" />
            <p className="text-gray-700 mt-4 md:mt-6 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex-1 flex justify-start md:justify-end">
            <ul className="flex flex-col md:flex-row md:space-x-6 gap-2 md:gap-0 ">
              <li className="inline-block px-4 py-2 text-gray-700 cursor-pointer hover:text-black transition">Home</li>
              <li className="inline-block px-4 py-2 text-gray-700 cursor-pointer hover:text-black transition">About</li>
              <li className="inline-block px-4 py-2 text-gray-700 cursor-pointer hover:text-black transition">Services</li>
              <li className="inline-block px-4 py-2 text-gray-700 cursor-pointer hover:text-black transition">Contact</li>
            </ul>
          </div>
        </div>
        <div className="py-6">
          <div className="flex items-center">
            <div className="mx-auto ">
              © 2020 Flowbase. Powered by{" "}
              <span className="font-semibold text-orange-500">Webflow</span>
            </div>
            <div className="space-x-2 flex items-center">
              {/* social media */}
              <Button variant="ghost" size="icon">
                <FacebookIcon className="size-6" />
              </Button>
              <Button variant="ghost" size="icon">
                <InstagramIcon className="size-6" />
              </Button>
              <Button variant="ghost" size="icon">
                <TwitterIcon className="size-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
