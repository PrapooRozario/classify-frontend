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
    <div className="sticky top-4 sm:top-8 lg:top-20 w-full lg:w-auto flex flex-col gap-2">
      {/* Toggle Button */}
      <Button
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className={`z-50 rounded-xl bg-neutral-900/50 cursor-pointer
          hover:bg-neutral-900 border border-neutral-800/50 text-white transition
          w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12`}
      >
        {isOpen ? (
          <PanelRightClose className="w-4 h-4 " />
        ) : (
          <PanelRight className="w-4 h-4" />
        )}
      </Button>

      <motion.div
        animate={{
          opacity: isOpen ? 1 : 0,
          scale: isOpen ? 1 : 0.95,
        }}
        transition={{ duration: 0.2 }}
        className={isOpen ? "visible" : "invisible lg:block"}
      >
        {/* Main Sidebar */}
        <div className="bg-neutral-900/50 border-neutral-800/50 border rounded-xl p-1.5 sm:p-2 lg:p-2 gap-1.5 sm:gap-2">
          {/* Primary Routes - Responsive grid for mobile */}
          <div className="space-y-4">
            {routesData.map((route, index) => (
              <div key={index} className="relative">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      to={route.route}
                      className={`relative rounded-lg sm:rounded-xl flex items-center justify-center 
                        p-3 sm:p-4 lg:p-6 border-neutral-900 overflow-hidden transition-all duration-200
                        ${
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
                    className="text-xs sm:text-sm lg:text-md"
                  >
                    <span>{route.name}</span>
                  </TooltipContent>
                </Tooltip>
              </div>
            ))}
          </div>
        </div>

        {/* Secondary Routes */}
      </motion.div>
      <motion.div
        animate={{
          opacity: isOpen ? 1 : 0,
          scale: isOpen ? 1 : 0.95,
        }}
        transition={{ duration: 0.2 }}
        className={`grid md:grid-cols-2  gap-2 ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        {routesData2.map((route, index) => (
          <div
            className="rounded-xl bg-neutral-900/50 cursor-pointer
          hover:bg-neutral-900 border border-neutral-800/50 text-white transition 
          w-full h-[40px]"
            key={index}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  to={route.route}
                  className="flex items-center justify-center w-full h-full"
                >
                  <route.icon className="w-4 h-4 text-white" />
                </Link>
              </TooltipTrigger>
              <TooltipContent
                side="bottom"
                sideOffset={8}
                className="text-xs sm:text-sm lg:text-md"
              >
                <span>{route.name}</span>
              </TooltipContent>
            </Tooltip>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Sidebar;
