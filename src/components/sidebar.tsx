import { Link } from "react-router";
import routesData from "../data/routesData";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { motion } from "framer-motion";
import { useState } from "react";
import { PanelRight, PanelRightClose} from "lucide-react"; // toggle icons
import { Button } from "./ui/button";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const sidebarVariants = {
    hidden: { opacity: 0, x: -200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <div>
      {/* Toggle Button */}
      <Button
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-5 left-5 z-50 rounded-xl bg-neutral-900/50 hover:bg-neutral-900 cursor-pointer text-white"
      >
        {isOpen ? <PanelRightClose size={40} /> : <PanelRight size={40} />}
      </Button>

      {/* Sidebar */}
      <motion.div
        className="bg-neutral-900/50 border-neutral-900 border rounded-xl fixed -translate-y-1/2 top-1/2 overflow-clip"
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        variants={sidebarVariants}
      >
        <div className="flex flex-col">
          {routesData.map((route, index) => (
            <motion.div key={index} variants={itemVariants} className="relative">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    to={route.route}
                    className="relative flex items-center justify-center border-b p-10 border-neutral-900 overflow-hidden hover:bg-neutral-900 duration-200 transition"
                  >
                    <span className="relative z-10">
                      <route.icon className="w-6 h-6 text-white" />
                    </span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right" className="text-md">
                  <span>{route.name}</span>
                </TooltipContent>
              </Tooltip>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Sidebar;
