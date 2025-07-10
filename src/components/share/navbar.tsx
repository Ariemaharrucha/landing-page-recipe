

import { useState } from "react";
import { Button } from "../ui/button";
import logo from '../../assets/Foodieland..png';
import { FacebookIcon, InstagramIcon, TwitterIcon, MenuIcon, XIcon } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="py-2 border-b-[1px] border-black sticky top-0 z-50 bg-white w-full">
      <div className="flex items-center justify-between px-4 md:px-12">
        <div className="flex items-center">
          <img src={logo} alt="" className="h-6 w-auto" />
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex font-medium">
            <li className="inline-block px-4 py-2 text-gray-700 cursor-pointer hover:text-black transition">Home</li>
            <li className="inline-block px-4 py-2 text-gray-700 cursor-pointer hover:text-black transition">Recipes</li>
            <li className="inline-block px-4 py-2 text-gray-700 cursor-pointer hover:text-black transition">About</li>
            <li className="inline-block px-4 py-2 text-gray-700 cursor-pointer hover:text-black transition">Services</li>
            <li className="inline-block px-4 py-2 text-gray-700 cursor-pointer hover:text-black transition">Contact</li>
          </ul>
        </div>
        {/* Social icons desktop */}
        <div className="hidden md:flex space-x-2">
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
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <Button variant="ghost" size="icon" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <XIcon className="size-6" /> : <MenuIcon className="size-6" />}
          </Button>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-black shadow-lg animate-fade-in z-40">
          <ul className="flex flex-col py-4 space-y-2 px-6">
            <li className="px-4 py-2 text-gray-700 cursor-pointer hover:text-black transition">Home</li>
            <li className="px-4 py-2 text-gray-700 cursor-pointer hover:text-black transition">Recipes</li>
            <li className="px-4 py-2 text-gray-700 cursor-pointer hover:text-black transition">About</li>
            <li className="px-4 py-2 text-gray-700 cursor-pointer hover:text-black transition">Services</li>
            <li className="px-4 py-2 text-gray-700 cursor-pointer hover:text-black transition">Contact</li>
          </ul>
          <div className="flex justify-center space-x-4 pb-4">
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
      )}
    </nav>
  );
}