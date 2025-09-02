import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import One from "/assets/icons/one.png";
import Two from "/assets/icons/two.png";
import Three from "/assets/icons/three.png";
type RankProfileProps = {
  rank: number;
  name: string;
  points: number | string;
  className?: string;
  target?: boolean;
  profilePicture?: string;
};

const RankProfile: React.FC<RankProfileProps> = ({
  rank,
  name,
  points,
  className = "",
  target = false,
  profilePicture,
}) => {
  const rankImages: { [key: number]: string } = {
    1: One,
    2: Two,
    3: Three,
  };
  return (
    <div
      className={`flex items-center relative gap-3 ${
        target && "bg-neutral-800/50 border-neutral-800 border"
      } rounded-xl py-2 px-3 ${className}`}
    >
      {/* Avatar + Name + Points */}
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src={rank > 3 ? profilePicture : rankImages[rank]} />
          <AvatarFallback className="bg-neutral-900 text-xs">{rank}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-white font-medium text-sm">{name}</span>
          <span className="text-neutral-400 text-xs">{points} Points</span>
        </div>
      </div>
    </div>
  );
};

export default RankProfile;
