import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import Bg from "./bg";
import { Separator } from "./separator";
import Text from "./text";

interface ClassCardProps {
  subjectName: string;
  subjectTime: string;
  instructorName: string;
  instructorImage?: string;
  className?: string;
  subjectColor?: string;
}

const ClassCard: React.FC<ClassCardProps> = ({
  subjectName,
  subjectTime,
  instructorName,
  instructorImage,
  subjectColor,
  className,
}) => {
  return (
    <Bg
      variant="2"
      className={`
        p-4 sm:p-5 md:p-6 
        hover:bg-neutral-800/60 transition duration-200 
        ${subjectColor} ${className}
      `}
    >
      <div>
        {/* Header section */}
        <div className="flex gap-3 sm:gap-4 items-center">
          <Avatar className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl">
            <AvatarImage className="object-cover" src={instructorImage} />
            <AvatarFallback className="bg-neutral-900 rounded-xl">
              {instructorName.slice(0, 2).toLocaleUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div>
            <Text variant="p" className="font-semibold text-white">
              {subjectName}
            </Text>
            <Text variant="small" className=" text-neutral-400">
              {subjectTime}
            </Text>
          </div>
        </div>

        {/* Separator */}
        <Separator className="bg-neutral-800 my-4" />

        {/* Instructor info */}
        <div className="md:flex justify-between items-center">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-neutral-400" />
            <Text variant="small" className=" text-neutral-400">
              Instructor
            </Text>
          </div>
          <Text variant="small" className=" text-white">
            {instructorName}
          </Text>
        </div>
      </div>
    </Bg>
  );
};

export default ClassCard;
