import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="border-b border-gray-800">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-4">
        <ul className="flex flex-col md:flex-row items-center">
          <li>
            <Link
              to="/"
              className="text-2xl text-orange-500 font-bold uppercase tracking-wide"
            >
              Movies Page
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
