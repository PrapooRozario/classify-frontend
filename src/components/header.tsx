import { ArrowUpRight } from "lucide-react";
import { BorderBeam } from "./magicui/border-beam";
import { Button } from "./ui/button";
import Classify from "/classify.svg";
const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <img src={Classify} alt="Logo of Classify" />
      </div>
      <div className="flex gap-4">
        <Button className="relative cursor-pointer uppercase font-light overflow-hidden">
          <BorderBeam
            duration={8}
            colorFrom="#171717"
            colorTo="#373737"
            size={60}
          />
          Sign In
          <ArrowUpRight size={20} />
        </Button>
        <Button className="relative cursor-pointer uppercase font-light overflow-hidden">
          <BorderBeam
            duration={8}
            colorFrom="#171717"
            colorTo="#373737"
            size={60}
          />
          Sign Up
          <ArrowUpRight size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
