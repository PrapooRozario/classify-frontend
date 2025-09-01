import One from "/assets/icons/one.png";
import Two from "/assets/icons/two.png";
import Three from "/assets/icons/three.png";
import { ChartNoAxesColumn, Presentation, TrendingUp } from "lucide-react";
import Card from "../components/ui/card";
import Text from "../components/ui/text";
import RankProfile from "../components/ui/rankProfile";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "../components/ui/chart";
import { Bar, BarChart, XAxis } from "recharts";
const Home = () => {
  const chartData = [
    { week: "Sunday", Completed: 12, Missed: 3 },
    { week: "Monday", Completed: 15, Missed: 5 },
    { week: "Tuesday", Completed: 9, Missed: 2 },
    { week: "Wednesday", Completed: 18, Missed: 6 },
    { week: "Thursday", Completed: 11, Missed: 4 },
    { week: "Friday", Completed: 14, Missed: 7 },
    { week: "Saturday", Completed: 10, Missed: 3 },
  ];

  const chartConfig = {
    desktop: {
      label: "Completed",
      color: "#474747",
    },
    mobile: {
      label: "Missed",
      color: "#282828",
    },
  } satisfies ChartConfig;

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
      {/* Blocks */}
      <div className="mt-8 flex gap-6">
        {/* Leaderboard Block */}
        <Card
          HeaderIcon={ChartNoAxesColumn}
          BadgeIcon={TrendingUp}
          BadgeValue={1}
          HeaderText="Leaderboard"
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
        {/* Active Class Block */}
        <Card
          HeaderIcon={Presentation}
          HeaderText="Active Class"
          BadgeValue={340}
          Prefix="+"
          Suffix=" Points"
          BadgeIcon={TrendingUp}
        >
          {/* Content */}
          <div className="flex flex-col gap-2">
            <Text variant="h1" as="p" className="text-white font-semibold">
              16<span className="text-neutral-400 text-2xl">/20</span>
            </Text>
            <Text variant="small" className="text-neutral-400">
              Completed Class
            </Text>
            <div>
              <ChartContainer config={chartConfig}>
                <BarChart accessibilityLayer data={chartData}>
                  <XAxis
                    dataKey="week"
                    tickMargin={1}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={
                      <ChartTooltipContent
                        className="bg-neutral-900 border-none"
                        labelClassName="text-white"
                        indicator="dashed"
                      />
                    }
                  />
                  <Bar dataKey="Completed" fill="#474747" radius={4} />
                  <Bar dataKey="Missed" fill="#282828" radius={4} />
                </BarChart>
              </ChartContainer>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Home;
