
import { Button } from "../ui/button";
import logo from '../../assets/Foodieland..png';
import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="py-4 border-b-[1px] border-black sticky top-0 z-50 bg-white">
        <div className="flex items-center justify-between px-12">
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
                <ul className="flex space-x-6">
                    <li className="inline-block px-4 py-2 text-gray-700">Home</li>
                    <li className="inline-block px-4 py-2 text-gray-700">Recipes</li>
                    <li className="inline-block px-4 py-2 text-gray-700">About</li>
                    <li className="inline-block px-4 py-2 text-gray-700">Services</li>
                    <li className="inline-block px-4 py-2 text-gray-700">Contact</li>
                </ul>
            </div>
            <div className="space-x-2">
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
    </nav>
  );
}