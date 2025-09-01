import React from "react";
import Badge from "./badge";
import type { LucideIcon } from "lucide-react";
import Bg from "./bg";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  HeaderIcon?: LucideIcon;
  BadgeIcon?: LucideIcon;
  Badge?: boolean;
  BadgeSize?: "sm" | "md" | "lg";
  BadgeClassName?: string;
  BadgeValue?: number;
  HeaderText?: string;
  Prefix?: string;
  Suffix?: string;
};

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  HeaderIcon: HeaderIconComp,
  HeaderText = "Card Title",
  BadgeIcon,
  BadgeSize,
  BadgeClassName,
  BadgeValue = 1,
  Prefix = "",
  Suffix = "",
  Badge: keepBadge = true,
}) => {
  return (
    <Bg variant="1" className={`max-h-[350px] overflow-hidden ${className}`}>
      {/* Glow Effects */}
      <div className="bg-white absolute w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] md:w-[30px] md:h-[30px] lg:w-[35px] lg:h-[35px] blur-[40px] sm:blur-[50px] md:blur-[60px] lg:blur-[80px] rounded-full -left-5 sm:-left-6 md:-left-8 lg:-left-10"></div>
      <div className="bg-white absolute w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] md:w-[30px] md:h-[30px] lg:w-[35px] lg:h-[35px] blur-[40px] sm:blur-[50px] md:blur-[60px] lg:blur-[80px] rounded-full -right-5 sm:-right-6 md:-right-8 lg:-right-10 bottom-1"></div>

      {/* Header */}
      <div className="mb-4 flex md:flex-row md:justify-between md:items-center flex-col">
        <p className="font-medium text-neutral-400 flex items-center gap-1">
          {HeaderIconComp && <HeaderIconComp className="w-4 h-4" />}
          <span className="truncate">{HeaderText}</span>
        </p>
        {keepBadge && (
          <div className="flex-shrink-0 mt-2 md:mt-0">
            <Badge
              prefix={Prefix}
              suffix={Suffix}
              value={BadgeValue}
              className={BadgeClassName}
              icon={BadgeIcon}
              size={BadgeSize}
            />
          </div>
        )}
      </div>

      {children}
    </Bg>
  );
};

export default Card;
