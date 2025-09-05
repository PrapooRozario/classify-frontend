import { Link } from "react-router";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Bg from "./ui/bg";
import Text from "./ui/text";
import Classify from "/classify.svg";
import { routes } from "../data/footerData";

const Footer = () => {
  return (
    <footer>
      <Bg
        variant="1"
        className="flex flex-col md:flex-row gap-6 md:gap-0 items-center justify-between py-6 px-6 overflow-hidden"
      >
        {/* Logo */}
        <Link to="/">
          <img src={Classify} alt="Logo of Classify" />
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-6 flex-wrap justify-center">
          {routes.map((route, index) => (
            <Link
              to={route.route}
              key={index}
              className="text-neutral-400 hover:text-white uppercase transition duration-200 text-sm"
            >
              {route.name}
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 items-center">
          <Link to="https://x.com">
            <FaXTwitter className=" text-neutral-300 hover:text-white transition duration-200" />
          </Link>
          <Link to="https://x.com">
            <FaInstagram className=" text-neutral-300 hover:text-white transition duration-200" />
          </Link>
          <Link to="https://github.com">
            <FaGithub className=" text-neutral-300 hover:text-white transition duration-200" />
          </Link>
        </div>
        <Text
          variant="h1"
          className="scale-[600%] tracking-wide absolute -z-10 bg-gradient-to-b from-neutral-500 to-neutral-800 top-1/2 md:top-0 bg-clip-text left-1/2 -translate-x-1/2 text-transparent uppercase"
        >
          Classify
        </Text>
      </Bg>
    </footer>
  );
};

export default Footer;
