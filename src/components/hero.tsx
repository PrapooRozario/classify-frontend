import Text from "./ui/text";
import { Button } from "./ui/button";
import { BorderBeam } from "./magicui/border-beam";
import { CircleArrowOutUpRight, MoveDown } from "lucide-react";
import { SpinningText } from "./magicui/spinning-text";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="text-center px-4 md:px-0">
      {/* Heading */}
      <Text
        variant="h1"
        className="!text-4xl sm:!text-5xl md:!text-6xl lg:!text-7xl leading-snug lg:leading-tight bg-gradient-to-b from-neutral-100 font-light to-neutral-200 bg-clip-text text-transparent"
      >
        Manage Your Student Life <br className="hidden sm:block" />
        In <span className="font-semibold">One Place</span>
      </Text>

      {/* CTA Button */}
      <div className="w-fit mt-6 mx-auto">
        <Link to="/auth/signup">
          <Button className="!px-6 !py-4 md:!px-8 md:!py-6 relative cursor-pointer uppercase font-light overflow-hidden flex items-center gap-2">
            <BorderBeam
              duration={8}
              colorFrom="#171717"
              colorTo="#373737"
              size={60}
            />
            Get Started
            <CircleArrowOutUpRight size={20} />
          </Button>
        </Link>
      </div>

      {/* Spinning Text */}
      <div className="relative flex justify-center items-center md:mt-32 mt-28 md:mb-40 mb-32">
        <SpinningText
          reverse
          className="text-sm sm:text-base md:text-lg lg:text-xl font-light tracking-wide"
          duration={20}
          radius={6}
        >
          scroll down • see features • check them out •
        </SpinningText>

        {/* Optional Center Arrow */}
        <MoveDown className="absolute" />
      </div>
    </div>
  );
};

export default Hero;
