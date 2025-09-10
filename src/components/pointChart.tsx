import React from "react";
import { Bar, BarChart, XAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "./ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Coins } from "lucide-react";
import Card from "./ui/card";
const chartData = [
  { date: "2024-01-15", value: 186 },
  { date: "2024-01-10", value: 305 },
  { date: "2024-01-05", value: 237 },
  { date: "2024-01-12", value: 73 },
  { date: "2024-01-18", value: 209 },
  { date: "2024-01-25", value: 214 },
];

const chartConfig = {
  value: {
    label: "Points",
    color: "#373737",
  },
} satisfies ChartConfig;

export function PointChart() {
  const [timeRange, setTimeRange] = React.useState("all_time");

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    } else if (timeRange === "all_time") {
      return chartData;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <Card
      HeaderText="Points Overview"
      HeaderIcon={Coins}
      className="w-full h-[400px]"
      Element={
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex border-neutral-800 bg-neutral-900"
            aria-label="Select a value"
          >
            <SelectValue placeholder="All Time" />
          </SelectTrigger>
          <SelectContent className="rounded-xl bg-neutral-900 border-neutral-800 text-white">
            <SelectItem value="all_time">All Time</SelectItem>
            <SelectItem value="90d">Last 3 months</SelectItem>
            <SelectItem value="30d">Last 30 days</SelectItem>
            <SelectItem value="7d">Last 7 days</SelectItem>
          </SelectContent>
        </Select>
      }
      Badge={false}
    >
      <ChartContainer className="aspect-auto h-[250px]" config={chartConfig}>
        <BarChart data={filteredData}>
          <XAxis
            dataKey="date"
            tickLine={false}
            axisLine={false}
            tickMargin={5}
            minTickGap={35}
            tickFormatter={(value) =>
              new Date(value).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })
            }
          />
          <ChartTooltip
            cursor={false}
            content={
              <ChartTooltipContent
                className="bg-neutral-900 gap-2 border-none text-xs "
                hideLabel
              />
            }
          />
          <Bar dataKey="value" fill="var(--color-value)" radius={8} />
        </BarChart>
      </ChartContainer>
    </Card>
  );
}
