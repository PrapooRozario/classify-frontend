import React from "react";
import Badge from "./badge";
import type { LucideIcon } from "lucide-react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  HeaderIcon?: LucideIcon;
  BadgeIcon?: LucideIcon;
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
}) => {
  return (
    <div
      className={`relative bg-gradient-to-t cursor-pointer from-neutral-900 to-neutral-900/50 
      p-6 rounded-2xl border border-neutral-800 w-full overflow-hidden ${className}`}
    >
      {/* Glow Effects */}
      <div className="bg-white absolute w-[35px] h-[35px] blur-[80px] rounded-full -left-10"></div>
      <div className="bg-white absolute w-[35px] h-[35px] blur-[80px] rounded-full -right-10 bottom-1 "></div>

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <p className="font-medium text-neutral-400 flex items-center gap-2 text-sm">
            {HeaderIconComp && <HeaderIconComp className="w-4 h-4" />}
          {HeaderText}
        </p>
        <Badge
          prefix={Prefix}
          suffix={Suffix}
          value={BadgeValue}
          className={BadgeClassName}
          icon={BadgeIcon}
          size={BadgeSize}
        />
      </div>

      {children}
    </div>
  );
};

export default Card;
