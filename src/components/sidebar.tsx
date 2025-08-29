import { Link, useLocation } from "react-router";
import { routesData, routesData2 } from "../data/routesData";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useState } from "react";
import { PanelRight, PanelRightClose } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <div className="fixed -translate-y-1/2 top-1/2">
      {/* Toggle Button */}
      <Button
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed 
          -top-12 z-50 rounded-xl bg-neutral-900/50 cursor-pointer
          hover:bg-neutral-900 text-white transition`}
      >
        {isOpen ? <PanelRightClose size={32} /> : <PanelRight size={32} />}
      </Button>
      <motion.div animate={{ opacity: isOpen ? 1 : 0 }}>
        {/* Sidebar */}
        <div
          className={`bg-neutral-900/50 border-neutral-900 border rounded-xl p-2 gap-2`}
        >
          <div className="flex flex-col gap-2">
            {routesData.map((route, index) => (
              <div key={index} className="relative">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      to={route.route}
                      className={`relative rounded-xl flex items-center justify-center p-6 border-neutral-900 overflow-hidden ${
                        location.pathname === route.route
                          ? "bg-gradient-to-b from-neutral-900/50 to-neutral-900"
                          : "hover:bg-gradient-to-b from-neutral-900/50 to-neutral-900"
                      }`}
                    >
                      <span className="relative z-10">
                        <route.icon className="w-6 h-6 text-white" />
                      </span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent
                    side="right"
                    sideOffset={8}
                    className="text-md"
                  >
                    <span>{route.name}</span>
                  </TooltipContent>
                </Tooltip>
              </div>
            ))}
          </div>
          <div></div>
        </div>
        <div className="grid grid-cols-2 mt-3 gap-3">
          {routesData2.map((route, index) => (
            <motion.div
              className="bg-neutral-900/50  hover:bg-neutral-900 duration-200 transition cursor-pointer border-neutral-900 border rounded-xl w-fit h-fit p-3"
              key={index}
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link to={route.route}>
                    <route.icon className="w-4 h-4 text-white" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  side="bottom"
                  sideOffset={8}
                  className="text-md"
                >
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
