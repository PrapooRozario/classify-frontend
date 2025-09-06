import { Home, Calendar, CreditCard, BookOpen, Zap, type LucideIcon, User, ChartNoAxesColumn } from "lucide-react";

 type RouteType = {
  route: string;
  name: string;
  icon: LucideIcon;
};

 type RouteType2 = {
  route: string;
  name: string;
  icon: LucideIcon;
};

const routesData: RouteType[] = [
  { route: "/dashboard", name: "Go to Home", icon: Home },
  { route: "/dashboard/schedule", name: "Add Schedule", icon: Calendar },
  { route: "/dashboard/budget", name: "Add Budget", icon: CreditCard },
  { route: "/dashboard/planner", name: "Add a Planner", icon: BookOpen },
  { route: "/dashboard/exam", name: "Take an Exam", icon: Zap },
];

const routesData2: RouteType2[] = 
[{ route: "/dashboard/profile", name: "Go to Profile", icon: User }, 
{ route: "/dashboard/leaderboard", name: "Go to Leaderboard", icon: ChartNoAxesColumn }
];
export {routesData, routesData2};



