import { Home, Calendar, CreditCard, BookOpen, Zap, type LucideIcon } from "lucide-react";

export type RouteType = {
  route: string;
  name: string;
  icon: LucideIcon;
};

const routesData: RouteType[] = [
  { route: "/", name: "Go to Home", icon: Home },
  { route: "/schedule", name: "Add Schedule", icon: Calendar },
  { route: "/budget", name: "Add Budget", icon: CreditCard },
  { route: "/planner", name: "Add a Planner", icon: BookOpen },
  { route: "/exam", name: "Take an Exam", icon: Zap },
];

export default routesData;
