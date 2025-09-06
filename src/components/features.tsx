import { ArrowUpRight } from "lucide-react";
import { cn } from "../lib/utils";
import { BorderBeam } from "./magicui/border-beam";
import { InteractiveGridPattern } from "./magicui/interactive-grid-pattern";
import Bg from "./ui/bg";
import { Button } from "./ui/button";
import Text from "./ui/text";
import { featuresData } from "../data/featuresData";
import { Link } from "react-router";

const Features = () => {
  return (
    <div id="features">
      <Text
        variant="h1"
        className="!text-4xl text-center border-b border-dashed border-neutral-800 bg-gradient-to-b from-transparent to-neutral-900 font-light w-fit mx-auto sm:!text-5xl md:!text-6xl lg:!text-7xl leading-snug lg:leading-tight"
      >
        Features
      </Text>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  gap-6">
        {featuresData.map((feature, i) => (
          <Bg
            key={i}
            variant="1"
            className="relative p-6 overflow-hidden border-none"
          >
            <div>
              <Text variant="h3" className=" relative z-20 mb-4 capitalize">
                {feature.title}
              </Text>
              <Text variant="small" className=" relative z-20 m-auto">
                {feature.description}
              </Text>
            </div>
            <Link to={feature.buttonLink}>
              <Button className="relative z-20 mt-6 cursor-pointer uppercase font-light overflow-hidden flex items-center gap-2 !px-4 !py-2">
                <BorderBeam
                  duration={8}
                  colorFrom="#171717"
                  colorTo="#373737"
                  size={60}
                />
                {feature.buttonText}
                <ArrowUpRight size={20} />
              </Button>
            </Link>
            <InteractiveGridPattern
              className={cn(
                "[mask-image:radial-gradient(400px_circle_at_center,#171717,transparent)]",
                "inset-x-0 inset-y-[-30%] h-[200%]"
              )}
            />
            <BorderBeam
              duration={8}
              colorFrom="#171717"
              colorTo="#373737"
              size={100}
            />
          </Bg>
        ))}
      </div>
    </div>
  );
};

export default Features;
