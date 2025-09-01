import One from "/assets/icons/one.png";
import Two from "/assets/icons/two.png";
import Three from "/assets/icons/three.png";
import Hi from "/assets/icons/hi.png";
import {
  ChartNoAxesColumn,
  ListTodo,
  Presentation,
  School,
  TrendingUp,
} from "lucide-react";
import Card from "../components/ui/card";
import Text from "../components/ui/text";
import RankProfile from "../components/ui/rankProfile";

import Bg from "../components/ui/bg";
import { Separator } from "../components/ui/separator";
import { Marquee } from "../components/magicui/marquee";
import { BudgetChart } from "../components/budgetChart";
import ActiveClassesChart from "../components/activeClassesChart";

const Home = () => {
  // Active Tasks status data
  const tasksStatus = [
    { id: 1, status: "Pending", value: 8 },
    { id: 2, status: "In Progress", value: 3 },
    { id: 3, status: "Completed", value: 1 },
  ];

  return (
    <div>
      {/* Header Section */}
      <div className="mb-6">
        <Text
          as="h1"
          className="text-white font-normal mb-4 flex items-center gap-2"
          variant="h1"
        >
          <span className="font-semibold">Hello, </span> Prapoo Rozario{" "}
          <img src={Hi} alt="Hi Emoji" className="w-12 h-12" />
        </Text>

        {/* Marquee/Scrolling Message */}
        <Bg variant="2" className="px-4 py-0.5 relative overflow-hidden">
          <Marquee>
            <Text variant="small" as="p" className="uppercase">
              Here's everything you need to stay focused, creative, and ahead of
              your goals.
            </Text>
          </Marquee>

          {/* Left and Right Fade for Marquee */}
          <div className="absolute -left-[275px] w-80 h-20 bg-neutral-900 blur-[10px]" />
          <div className="absolute -right-[275px] w-80 h-20 bg-neutral-900 blur-[10px]" />
        </Bg>
      </div>

      {/* Cards Grid Section */}
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
            {/* Completed Classes Summary */}
            <div>
              <Text variant="h1" as="p" className="text-white font-semibold">
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

            {/* Weekly Bar Chart for Completed vs Missed */}
            <ActiveClassesChart />
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
          {/* Completed Tasks Summary */}
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

          {/* Task Status Bars */}
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

      {/* Budget and Classes Section */}
      <div className="grid grid-cols-3 gap-6 mt-6">
        {/* Budget Chart - Spans two columns */}
        <div className="col-span-2">
          <BudgetChart />
        </div>

        {/* Today's Classes Card */}
        <div>
          <Card
            HeaderText="Today's Classes"
            BadgeValue={12}
            Suffix=" Active"
            HeaderIcon={School}
          >
            .
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
