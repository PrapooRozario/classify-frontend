import One from "/assets/icons/one.png";
import Two from "/assets/icons/two.png";
import Three from "/assets/icons/three.png";
import {
  ChartNoAxesColumn,
  ListTodo,
  Presentation,
  TrendingUp,
} from "lucide-react";
import Card from "../components/ui/card";
import Text from "../components/ui/text";
import RankProfile from "../components/ui/rankProfile";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "../components/ui/chart";
import { Bar, BarChart, XAxis, ResponsiveContainer } from "recharts";
import Bg from "../components/ui/bg";
import { Separator } from "../components/ui/separator";

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
    desktop: { label: "Completed", color: "#474747" },
    mobile: { label: "Missed", color: "#282828" },
  } satisfies ChartConfig;

  const tasksStatus = [
    { id: 1, status: "Pending", value: 8 },
    { id: 2, status: "In Progress", value: 3 },
    { id: 3, status: "Completed", value: 1 },
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <Text
          as="h1"
          className="text-white font-normal mb-2"
          variant="h1"
        >
          <span className="font-semibold">Hello,</span> Prapoo Rozario
        </Text>
        <Text
          variant="p"
          as="p"
        >
          Here's everything you need to stay focused, creative, and ahead of
          your goals.
        </Text>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-6">
        {/* Leaderboard Card */}
        <Card
          HeaderIcon={ChartNoAxesColumn}
          BadgeIcon={TrendingUp}
          Prefix="TOP "
          BadgeValue={1}
          HeaderText="Leaderboard"
        >
          <div className="space-y-3 mt-4 sm:mt-6">
            <RankProfile name="Prapoo Rozario" points={550} rank={One} target />
            <RankProfile name="Shayan Sardar" points={227} rank={Two} />
            <RankProfile name="Fahad Ahmed" points={43} rank={Three} />
          </div>
        </Card>

        {/* Active Classes Card */}
        <Card
          HeaderIcon={Presentation}
          HeaderText="Active Classes"
          BadgeValue={56}
          Prefix="+"
          Suffix="%"
          BadgeIcon={TrendingUp}
        >
          <div className="flex flex-col gap-3 mt-2">
            <div>
              <Text
                variant="h1"
                as="p"
                className="text-white font-semibold"
              >
                16
                <span className="text-neutral-400 text-base sm:text-lg md:text-xl">
                  /20
                </span>
              </Text>
              <Text
                variant="small"
                className="text-neutral-400 text-xs sm:text-sm"
              >
                Completed Classes
              </Text>
            </div>
            <div>
              <ChartContainer config={chartConfig}>
                <ResponsiveContainer maxHeight={180}>
                  <BarChart data={chartData}>
                    <XAxis
                      dataKey="week"
                      tickMargin={1}
                      axisLine={false}
                      tickLine={false}
                      tickFormatter={(value) => value.slice(0, 3)}
                      fontSize={12}
                      className="text-xs sm:text-sm"
                      
                    />
                    <ChartTooltip
                      cursor={false}
                      content={
                        <ChartTooltipContent
                          className="bg-neutral-900 border-none text-xs sm:text-sm"
                          labelClassName="text-white"
                          indicator="dashed"
                        />
                      }
                    />
                    <Bar dataKey="Completed" fill="#474747" radius={4} />
                    <Bar dataKey="Missed" fill="#282828" radius={4} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </div>
        </Card>

        {/* Active Tasks Card */}
        <Card
          HeaderText="Active Tasks"
          HeaderIcon={ListTodo}
          BadgeIcon={TrendingUp}
          BadgeValue={55}
          Prefix="+"
          Suffix="%"
        >
          <div className="mb-4 sm:mb-5">
            <Text
              variant="h1"
              as="p"
              className="text-white font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl"
            >
              1
              <span className="text-neutral-400 text-base sm:text-lg md:text-xl">
                /12
              </span>
            </Text>
            <Text
              variant="small"
              className="text-neutral-400 text-xs sm:text-sm"
            >
              Completed Tasks
            </Text>
          </div>

          <div className="space-y-2 sm:space-y-3">
            {tasksStatus?.map((status) => (
              <Bg
                variant="2"
                className="flex justify-between items-center px-3 sm:px-4 py-2 sm:py-3 relative"
                key={status.id}
              >
                <Text
                  variant="small"
                  className="text-neutral-400 text-xs sm:text-sm"
                >
                  {status.status}
                </Text>
                <Separator
                  orientation="vertical"
                  className="bg-neutral-800 absolute right-10 sm:right-12 h-4 sm:h-5"
                />
                <Text
                  variant="p"
                  className="text-white font-semibold absolute right-3 sm:right-5 text-sm sm:text-base"
                >
                  {status.value}
                </Text>
              </Bg>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Home;
