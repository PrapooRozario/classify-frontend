import { Home, Calendar, CreditCard, BookOpen, Zap, type LucideIcon, User, ChartNoAxesColumn } from "lucide-react";

export type RouteType = {
  route: string;
  name: string;
  icon: LucideIcon;
};

export type RouteType2 = {
  route: string;
  name: string;
  icon: LucideIcon;
};

const routesData: RouteType[] = [
  { route: "/dashboard", name: "Go to Home", icon: Home },
  { route: "/dashboard/schedule", name: "Add Schedule", icon: Calendar },
  { route: "/budget", name: "Add Budget", icon: CreditCard },
  { route: "/planner", name: "Add a Planner", icon: BookOpen },
  { route: "/exam", name: "Take an Exam", icon: Zap },
];

const routesData2: RouteType2[] = 
[{ route: "/profile", name: "Go to Profile", icon: User }, 
{ route: "/leaderboard", name: "Go to Leaderboard", icon: ChartNoAxesColumn }
];
export {routesData, routesData2};



