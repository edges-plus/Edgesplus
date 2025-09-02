import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";

const data = [
  { name: "Under review", value: 410, percentage: 27 },
  { name: "Approved", value: 340, percentage: 15 },
  { name: "Rejected", value: 590, percentage: 30 },
  { name: "Pending", value: 142, percentage: 23 },
];

const COLORS = [
  "hsl(var(--chart-secondary))",
  "hsl(var(--chart-primary))",
  "hsl(var(--chart-4))",
  "hsl(var(--chart-3))",
];

// Label that shows the % value from the dataset
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, payload }) => {
  const radius = innerRadius + (outerRadius - innerRadius) / 2;
  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

  return (
    <text
      x={x}
      y={y}
      fill="hsl(var(--foreground))"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize="10"
      fontWeight="600"
    >
      {payload.percentage}%
    </text>
  );
};

const MonthlyActivityCard = () => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const averageRange = (total / data.length / 1000).toFixed(2);

  return (
    <div className="bg-card rounded-lg p-3">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-muted-foreground text-[10px] font-medium mb-1">
          Statistics
        </h3>
        <h2 className="text-foreground text-sm font-semibold">
          Monthly activity
        </h2>
      </div>

      {/* Chart */}
      <div className="flex flex-col items-center mb-4">
        <div className="relative w-40 h-40">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={70}
                paddingAngle={2}
                dataKey="percentage"
                cornerRadius={4}
                labelLine={false}
                label={renderCustomizedLabel}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-foreground text-lg font-bold">
              {averageRange}
            </div>
            <div className="text-muted-foreground text-[10px]">Avg. range</div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="space-y-2">
        {data.map((item, index) => (
          <div key={item.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: COLORS[index] }}
              />
              <span className="text-foreground text-[11px] font-medium">
                {item.name}
              </span>
            </div>
            <span className="text-muted-foreground text-[11px] font-medium">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthlyActivityCard;
