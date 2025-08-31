import React from "react";
import { type LucideIcon } from "lucide-react";

interface BadgeProps {
  value: string | number;
  icon?: LucideIcon;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
  prefix?: string;
  suffix?: string;
}

const Badge: React.FC<BadgeProps> = ({
  value,
  icon,
  size = "md",
  onClick,
  className = "",
  prefix = "",
  suffix = "",
}) => {
  // Size configurations
  const sizeClasses = {
    sm: "text-xs px-2 py-1 gap-1",
    md: "text-xs px-3 py-1 gap-1",
    lg: "text-sm px-4 py-2 gap-2",
  };

  const iconSizes = {
    sm: 12,
    md: 14,
    lg: 16,
  };

  return (
    <div
      className={`
        flex items-center border font-semibold 
        hover:bg-neutral-800 transition duration-200 
        cursor-pointer border-neutral-800 rounded-xl w-fit
        text-neutral-400
        ${sizeClasses[size]}
        ${className}
      `}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
    >
      <p className="leading-none">{prefix}{value}{suffix}</p>
      {icon &&
        React.createElement(icon, {
          size: iconSizes[size],
          className: "text-white",
        })}
    </div>
  );
};

export default Badge;
