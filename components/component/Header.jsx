import Link from "next/link";
import { FishIcon } from "@/components/component/Icons";
const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-white-50 fixed top-0 w-full">
      <Link className="flex itejustify-center" href="#hero">
        <FishIcon className="h-6 w-6" />
        <span className="sr-only">PokiNaya</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          href="#menu"
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Menu
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#about"
        >
          About Us
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#reviews"
        >
          Reviews
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#locations"
        >
          Location
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#contact"
        >
          Find Us
        </Link>
      </nav>
    </header>
  );
};

export default Header;
