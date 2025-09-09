import { colorOptions } from "../data/scheduleData";

export const getColorClass = (value: string): string => {
  const option = colorOptions.find((x) => x.value === value);
  return option ? option.class : "";
};
