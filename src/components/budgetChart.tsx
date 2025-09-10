import { Area, AreaChart, XAxis } from "recharts";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
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
import React from "react";
import { WalletCards } from "lucide-react";
import Card from "./ui/card";

const chartData = [
  { date: "2024-04-01", income: 222, expense: 150 },
  { date: "2024-04-02", income: 97, expense: 180 },
  { date: "2024-04-03", income: 167, expense: 120 },
  { date: "2024-04-04", income: 242, expense: 260 },
  { date: "2024-04-05", income: 373, expense: 290 },
  { date: "2024-04-06", income: 301, expense: 340 },
  { date: "2024-04-07", income: 245, expense: 180 },
  { date: "2024-04-08", income: 409, expense: 320 },
  { date: "2024-04-09", income: 59, expense: 110 },
  { date: "2024-04-10", income: 261, expense: 190 },
  { date: "2024-04-11", income: 327, expense: 350 },
  { date: "2024-04-12", income: 292, expense: 210 },
  { date: "2024-04-13", income: 342, expense: 380 },
  { date: "2024-04-14", income: 137, expense: 220 },
  { date: "2024-04-15", income: 120, expense: 170 },
  { date: "2024-04-16", income: 138, expense: 190 },
  { date: "2024-04-17", income: 446, expense: 360 },
  { date: "2024-04-18", income: 364, expense: 410 },
  { date: "2024-04-19", income: 243, expense: 180 },
  { date: "2024-04-20", income: 89, expense: 150 },
  { date: "2024-04-21", income: 137, expense: 200 },
  { date: "2024-04-22", income: 224, expense: 170 },
  { date: "2024-04-23", income: 138, expense: 230 },
  { date: "2024-04-24", income: 387, expense: 290 },
  { date: "2024-04-25", income: 215, expense: 250 },
  { date: "2024-04-26", income: 75, expense: 130 },
  { date: "2024-04-27", income: 383, expense: 420 },
  { date: "2024-04-28", income: 122, expense: 180 },
  { date: "2024-04-29", income: 315, expense: 240 },
  { date: "2024-04-30", income: 454, expense: 380 },
  { date: "2024-05-01", income: 165, expense: 220 },
  { date: "2024-05-02", income: 293, expense: 310 },
  { date: "2024-05-03", income: 247, expense: 190 },
  { date: "2024-05-04", income: 385, expense: 420 },
  { date: "2024-05-05", income: 481, expense: 390 },
  { date: "2024-05-06", income: 498, expense: 520 },
  { date: "2024-05-07", income: 388, expense: 300 },
  { date: "2024-05-08", income: 149, expense: 210 },
  { date: "2024-05-09", income: 227, expense: 180 },
  { date: "2024-05-10", income: 293, expense: 330 },
  { date: "2024-05-11", income: 335, expense: 270 },
  { date: "2024-05-12", income: 197, expense: 240 },
  { date: "2024-05-13", income: 197, expense: 160 },
  { date: "2024-05-14", income: 448, expense: 490 },
  { date: "2024-05-15", income: 473, expense: 380 },
  { date: "2024-05-16", income: 338, expense: 400 },
  { date: "2024-05-17", income: 499, expense: 420 },
  { date: "2024-05-18", income: 315, expense: 350 },
  { date: "2024-05-19", income: 235, expense: 180 },
  { date: "2024-05-20", income: 177, expense: 230 },
  { date: "2024-05-21", income: 82, expense: 140 },
  { date: "2024-05-22", income: 81, expense: 120 },
  { date: "2024-05-23", income: 252, expense: 290 },
  { date: "2024-05-24", income: 294, expense: 220 },
  { date: "2024-05-25", income: 201, expense: 250 },
  { date: "2024-05-26", income: 213, expense: 170 },
  { date: "2024-05-27", income: 420, expense: 460 },
  { date: "2024-05-28", income: 233, expense: 190 },
  { date: "2024-05-29", income: 78, expense: 130 },
  { date: "2024-05-30", income: 340, expense: 280 },
  { date: "2024-05-31", income: 178, expense: 230 },
  { date: "2024-06-01", income: 178, expense: 200 },
  { date: "2024-06-02", income: 470, expense: 410 },
  { date: "2024-06-03", income: 103, expense: 160 },
  { date: "2024-06-04", income: 439, expense: 380 },
  { date: "2024-06-05", income: 88, expense: 140 },
  { date: "2024-06-06", income: 294, expense: 250 },
  { date: "2024-06-07", income: 323, expense: 370 },
  { date: "2024-06-08", income: 385, expense: 320 },
  { date: "2024-06-09", income: 438, expense: 480 },
  { date: "2024-06-10", income: 155, expense: 200 },
  { date: "2024-06-11", income: 92, expense: 150 },
  { date: "2024-06-12", income: 492, expense: 420 },
  { date: "2024-06-13", income: 81, expense: 130 },
  { date: "2024-06-14", income: 426, expense: 380 },
  { date: "2024-06-15", income: 307, expense: 350 },
  { date: "2024-06-16", income: 371, expense: 310 },
  { date: "2024-06-17", income: 475, expense: 520 },
  { date: "2024-06-18", income: 107, expense: 170 },
  { date: "2024-06-19", income: 341, expense: 290 },
  { date: "2024-06-20", income: 408, expense: 450 },
  { date: "2024-06-21", income: 169, expense: 210 },
  { date: "2024-06-22", income: 317, expense: 270 },
  { date: "2024-06-23", income: 480, expense: 530 },
  { date: "2024-06-24", income: 132, expense: 180 },
  { date: "2024-06-25", income: 141, expense: 190 },
  { date: "2024-06-26", income: 434, expense: 380 },
];
const chartConfig = {
  income: {
    label: "Income",
    color: "#5a5a5a",
  },
  expense: {
    label: "Expense",
    color: "#313131",
  },
} satisfies ChartConfig;

export function BudgetChart() {
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
      HeaderText="Financial Overview"
      HeaderIcon={WalletCards}
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
            <SelectItem value="all_time" className="rounded-lg">
              All Time
            </SelectItem>
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      }
      Badge={false}
    >
      <ChartContainer config={chartConfig} className="aspect-auto h-[250px]">
        <AreaChart data={filteredData}>
          <defs>
            <linearGradient id="fillIncome" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={chartConfig.income.color}
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor={chartConfig.income.color}
                stopOpacity={0.1}
              />
            </linearGradient>
            <linearGradient id="fillExpense" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={chartConfig.expense.color}
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor={chartConfig.expense.color}
                stopOpacity={0.1}
              />
            </linearGradient>
          </defs>

          {/* Areas */}
          <Area
            dataKey="income"
            type="natural"
            fill="url(#fillIncome)"
            stroke={chartConfig.income.color}
            stackId="a"
          />
          <Area
            dataKey="expense"
            type="natural"
            fill="url(#fillExpense)"
            stroke={chartConfig.expense.color}
            stackId="a"
          />

          {/* X Axis */}
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

          {/* Tooltip */}
          <ChartTooltip
            cursor={false}
            content={
              <ChartTooltipContent
                className="bg-neutral-900 gap-2 border-none text-xs "
                labelFormatter={(value) =>
                  new Date(value).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })
                }
                indicator="dot"
              />
            }
          />

          {/* Legend */}
          <ChartLegend content={<ChartLegendContent />} />
        </AreaChart>
      </ChartContainer>
    </Card>
  );
}
