import { Home, Calendar, CreditCard, BookOpen, Zap, type LucideIcon } from "lucide-react";

export type RouteType = {
  route: string;
  name: string;
  icon: LucideIcon;
};

const routesData: RouteType[] = [
  { route: "/", name: "Home", icon: Home },
  { route: "/schedule", name: "Schedule", icon: Calendar },
  { route: "/budget", name: "Budget", icon: CreditCard },
  { route: "/planner", name: "Planner", icon: BookOpen },
  { route: "/exam", name: "Exam", icon: Zap },
];

export default routesData;
