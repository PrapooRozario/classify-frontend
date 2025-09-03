import { Link } from "react-router";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Bg from "./ui/bg";
import Text from "./ui/text";
import Classify from "/classify.svg";
import { routes } from "../data/footerData";

const Footer = () => {
  return (
    <footer>
      <Bg
        variant="1"
        className="mt-6 flex flex-col md:flex-row gap-6 md:gap-0 items-center justify-between py-6 px-4"
      >
        {/* Logo */}
        <Link to="/" className="flex gap-2 items-center">
          <img src={Classify} alt="Logo of Classify" />
          <Text variant="h1" className="md:block hidden uppercase">
            Classify
          </Text>
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-6 flex-wrap justify-center">
          {routes.map((route, index) => (
            <Link
              to={route.route}
              key={index}
              className="text-neutral-400 hover:text-white uppercase transition text-sm"
            >
              {route.name}
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 items-center">
          <Link to="/">
            <FaFacebook className="w-6 h-6 text-neutral-300 hover:text-white transition" />
          </Link>
          <Link to="/">
            <FaLinkedinIn className="w-6 h-6 text-neutral-300 hover:text-white transition" />
          </Link>
          <Link to="/">
            <FaGithub className="w-6 h-6 text-neutral-300 hover:text-white transition" />
          </Link>
        </div>
      </Bg>
    </footer>
  );
};

export default Footer;
