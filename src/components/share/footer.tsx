import logo from "../../assets/Foodieland..png";
import { Button } from "../ui/button";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-10 border-b-[1px] border-black">
          <div>
            <img src={logo} alt="" className="" />
            <p className="text-gray-700 mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div>
            <ul className="flex space-x-6">
              <li className="inline-block px-4 py-2 text-gray-700">Home</li>
              <li className="inline-block px-4 py-2 text-gray-700">About</li>
              <li className="inline-block px-4 py-2 text-gray-700">Services</li>
              <li className="inline-block px-4 py-2 text-gray-700">Contact</li>
            </ul>
          </div>
        </div>
        <div className="py-6">
          <div className="flex items-center">
            <div className="mx-auto">
              © 2020 Flowbase. Powered by{" "}
              <span className="font-semibold text-orange-500">Webflow</span>
            </div>
            <div className="space-x-2 flex items-center">
              {/* social media */}
              <Button variant="ghost" size="icon">
                {/* facebook */}
                <FacebookIcon className="size-6" />
              </Button>
              <Button variant="ghost" size="icon">
                {/* instagram */}
                <InstagramIcon className="size-6" />
              </Button>
              <Button variant="ghost" size="icon">
                {/* twitter */}
                <TwitterIcon className="size-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
