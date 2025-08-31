import One from "/assets/icons/one.png";
import Two from "/assets/icons/two.png";
import Three from "/assets/icons/three.png";
import { ChartNoAxesColumn, TrendingUp } from "lucide-react";
import Card from "../components/ui/card";
import Text from "../components/ui/text";
import RankProfile from "../components/ui/rankProfile";
const Home = () => {
  return (
    <div>
      <div>
        <Text as={"h1"} className="text-white font-normal mb-4" variant="h1">
          <span className="font-semibold">Hello,</span> Prapoo Rozario{" "}
        </Text>
        <Text variant="p" as={"p"}>
          Here’s everything you need to stay focused, creative, and ahead of
          your goals.
        </Text>
      </div>
      <div className="mt-8">
        <Card
          HeaderIcon={ChartNoAxesColumn}
          BadgeIcon={TrendingUp}
          BadgeValue={1}
          Suffix="%"
        >
          {/* Content */}
          <div>
            <RankProfile
              name="Prapoo Rozario"
              points={550}
              rank={One}
              target={true}
            />
            <RankProfile name="Shayan Sardar" points={227} rank={Two} />
            <RankProfile name="Fahad Ahmed" points={43} rank={Three} />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Home;
