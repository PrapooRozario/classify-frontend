import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "../components/ui/chart";
import { Bar, BarChart, XAxis, ResponsiveContainer } from "recharts";
const ActiveClassesChart = () => {
  // Weekly chart data for Active Classes
  const chartData = [
    { week: "Sunday", Completed: 12, Missed: 3 },
    { week: "Monday", Completed: 15, Missed: 5 },
    { week: "Tuesday", Completed: 9, Missed: 2 },
    { week: "Wednesday", Completed: 18, Missed: 6 },
    { week: "Thursday", Completed: 11, Missed: 4 },
    { week: "Friday", Completed: 14, Missed: 7 },
    { week: "Saturday", Completed: 10, Missed: 3 },
  ];

  // Chart configuration for Completed vs Missed
  const chartConfig = {
    desktop: { label: "Completed", color: "#474747" },
    mobile: { label: "Missed", color: "#282828" },
  } satisfies ChartConfig;
  return (
    <div>
      <ChartContainer config={chartConfig}>
        <ResponsiveContainer maxHeight={180}>
          <BarChart data={chartData}>
            <XAxis
              dataKey="week"
              tickMargin={1}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              fontSize={12}
              className="text-xs sm:text-sm"
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  className="bg-neutral-900 border-none text-xs sm:text-sm"
                  labelClassName="text-white"
                  indicator="dashed"
                />
              }
            />
            <Bar dataKey="Completed" fill="#474747" radius={4} />
            <Bar dataKey="Missed" fill="#282828" radius={4} />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
};

export default ActiveClassesChart;
