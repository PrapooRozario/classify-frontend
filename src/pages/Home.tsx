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
import ClassCard from "../components/ui/classCard";
import { Button } from "../components/ui/button";
import { PointChart } from "../components/pointChart";
const Home = () => {
  // Active Tasks status data
  const tasksStatus = [
    { id: 1, status: "Pending", value: 8 },
    { id: 2, status: "In Progress", value: 3 },
    { id: 3, status: "Completed", value: 1 },
  ];

  // Fake data (5 items)
  const classes = [
    {
      subjectName: "Math",
      classTime: "07:00AM - 08:30AM",
      instructorName: "Abdul Kalam",
      instructorImage:
        "https://as2.ftcdn.net/jpg/03/67/70/91/1000_F_367709147_W4Q2pRjMcz7jUkuH4e1BIhmtCDceu3FH.webp",
    },
    {
      subjectName: "Physics",
      classTime: "09:00AM - 10:30AM",
      instructorName: "Marie Curie",
      instructorImage:
        "https://as2.ftcdn.net/jpg/03/67/70/91/1000_F_367709147_W4Q2pRjMcz7jUkuH4e1BIhmtCDceu3FH.webp",
    },
    {
      subjectName: "Chemistry",
      classTime: "11:00AM - 12:30PM",
      instructorName: "Albert Einstein",
      instructorImage:
        "https://as2.ftcdn.net/jpg/03/67/70/91/1000_F_367709147_W4Q2pRjMcz7jUkuH4e1BIhmtCDceu3FH.webp",
    },
  ];
  const subjectColors = {
    Math: "bg-gradient-to-r from-neutral-800/10 to-yellow-950/5",
    Physics: "bg-gradient-to-r from-neutral-800/10 to-blue-950/5",
    Chemistry: "bg-gradient-to-r from-neutral-800/10 to-pink-900/5 ",
    Default: "bg-gradient-to-r from-neutral-800/10 to-neutral-900/5",
  };

  return (
    <div>
      {/* Header Section */}
      <div className="mb-6">
        <Text
          as="h1"
          className="text-white font-normal items-center mb-4 flex  gap-2 "
          variant="h1"
        >
          <span className="font-semibold">Hello,</span>
          <span className="flex items-center gap-1">
            Prapoo Rozario
            <img src={Hi} alt="Hi Emoji" className="md:w-12 md:h-12 w-8 h-8" />
          </span>
        </Text>

        {/* Marquee/Scrolling Message */}
        <Bg variant="2" className=" relative overflow-hidden">
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
            <RankProfile
              name="Prapoo Rozario"
              points={550}
              rank={1}
              target={true}
            />
            <RankProfile name="Shayan Sardar" points={227} rank={2} />
            <RankProfile name="Fahad Ahmed" points={43} rank={3} />
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 ">
        <div className="flex flex-col gap-6 md:col-span-2 ">
          <div>
            <BudgetChart />
          </div>

          <div>
            <PointChart />
          </div>
        </div>

        {/* Today's Classes Card  */}
        <Card
          HeaderText="Today's Classes"
          BadgeValue={12}
          Suffix=" Active"
          HeaderIcon={School}
          className="space-y-4 max-h-full w-full"
        >
          <div className="space-y-4">
            {classes.map((classItem, index) => (
              <ClassCard
                instructorName={classItem?.instructorName}
                subjectName={classItem?.subjectName}
                key={index}
                subjectTime={classItem.classTime}
                instructorImage={classItem.instructorImage}
                subjectColor={subjectColors[classItem.subjectName]}
                className="w-full flex-shrink-0"
              />
            ))}
          </div>

          <div className="mt-auto space-y-2">
            <Button
              variant="default"
              className="w-full py-4 cursor-pointer sm:py-5 md:py-6 text-sm sm:text-base"
            >
              All Classes
            </Button>
            <Text
              variant="small"
              className="text-neutral-400 text-xs 
             text-center"
            >
              Complete all your classes and unlock your points.
            </Text>
          </div>
        </Card>
      </div>
      <div className="mt-6">
        <Bg variant="2" className="py-3 px-6 w-fit mx-auto">
          <Text
            variant="p"
            className="uppercase text-white flex flex-col md:flex-row gap-2 items-center justify-center text-xs md:text-base text-center"
          >
            Is your exam knocking at the door? No worries!
            <Button className="uppercase cursor-pointer">Take Exam</Button>
            and boost your confidence!
          </Text>
        </Bg>
      </div>
    </div>
  );
};

export default Home;
