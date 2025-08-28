import { Link, useLocation } from "react-router";
import routesData from "../data/routesData";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useState } from "react";
import { PanelRight, PanelRightClose } from "lucide-react";

const Sidebar = () => {
  const location = useLocation()
    const [isOpen, setIsOpen] = useState<boolean>(true);
  return (

    <div>
           {/* Toggle Button */}
      <Button
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed 
          top-16 z-50 rounded-xl bg-neutral-900/50 
          hover:bg-neutral-900 text-white transition`}
      >
        {isOpen ? <PanelRightClose size={32} /> : <PanelRight size={32} />}
      </Button>

      {/* Sidebar */}
      <motion.div
        className={`bg-neutral-900/50 border-neutral-900 border rounded-xl fixed -translate-y-1/2 top-1/2 p-2 gap-2 ${isOpen ? "": "hidden"} `}
        animate={{opacity: isOpen ? 1 : 0}}
      
      >
        <div className="flex flex-col gap-1">
          {routesData.map((route, index) => (
            <div key={index} className="relative">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    to={route.route}
                    className={`relative rounded-xl ${location.pathname === route.route ? "bg-neutral-900" : ""} flex items-center justify-center p-6 border-neutral-900 overflow-hidden hover:bg-neutral-900 duration-200 transition`}
                  >
                    <span className="relative z-10">
                      <route.icon className="w-6 h-6 text-white" />
                    </span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={8} className="text-md">
                  <span>{route.name}</span>
                </TooltipContent>
              </Tooltip>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Sidebar;
