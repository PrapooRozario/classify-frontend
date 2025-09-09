import type { ColorOption } from "../types/schedule";

export const times:string[] = [
    "6:00 AM",
    "7:00 AM",
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
    "9:00 PM",
    "10:00 PM",
    "11:00 PM",
    "12:00 AM",
];

export const days:string[] = [
      "Saturday",
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
];


export const colorOptions: ColorOption[] = [
  { value: "blue", label: "Blue", class: "to-blue-950/30" },
  { value: "green", label: "Green", class: "to-green-950/30" },
  { value: "red", label: "Red", class: "to-red-950/30" },
  { value: "purple", label: "Purple", class: "to-purple-950/30" },
  { value: "yellow", label: "Yellow", class: "to-yellow-950/30" },
  { value: "pink", label: "Pink", class: "to-pink-950/10" },
  { value: "indigo", label: "Indigo", class: "to-indigo-950/30" },
  { value: "teal", label: "Teal", class: "to-teal-950/30" },
];
