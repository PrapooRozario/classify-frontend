import React from "react";

type RankProfileProps = {
  rank: string;
  name: string;
  points: number | string;
  className?: string;
  target?: boolean;
};

const RankProfile: React.FC<RankProfileProps> = ({
  rank,
  name,
  points,
  className = "",
  target = false,
}) => {
  return (
    <div
      className={`flex items-center relative gap-3 mb-2 ${
        target && "bg-neutral-800/50 border-neutral-800 border"
      } rounded-xl py-2 px-3 ${className}`}
    >
      {/* Avatar + Name + Points */}
      <div className="flex items-center gap-3">
        <img src={rank} alt={`${name}`} className="w-10 h-10 rounded-full" />
        <div className="flex flex-col">
          <span className="text-white font-medium text-sm">{name}</span>
          <span className="text-neutral-400 text-xs">{points} Points</span>
        </div>
      </div>
   
    </div>
  );
};

export default RankProfile;
