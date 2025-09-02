import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, ReferenceDot } from 'recharts';
import { TrendingUp } from 'lucide-react';

const data = [
  { name: 'Jan', value: 8500 },
  { name: 'Feb', value: 9200 },
  { name: 'March', value: 11756 },
  { name: 'Apr', value: 9800 },
  { name: 'May', value: 10200 },
];

const StatisticsCard = () => {
  return (
    <div className="bg-card rounded-lg p-4 w-72"> 
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-muted-foreground text-xs font-medium mb-1">
          Statistics
        </h3>
        <h2 className="text-foreground text-base font-semibold">
          Account reached
        </h2>
      </div>

      {/* Main Statistics */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-foreground text-2xl font-bold">
            11,756
          </span>
          <div className="flex items-center gap-1 bg-green-50 text-green-600 px-2 py-0.5 rounded-md text-xs font-medium">
            <TrendingUp className="w-3 h-3" />
            <span>23%</span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="h-32 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }}
              tickMargin={6}
            />
            <YAxis hide />
            <Area
              type="monotone"
              dataKey="value"
              stroke="hsl(var(--primary))"
              strokeWidth={1.5}
              fill="url(#colorGradient)"
            />
            <ReferenceDot
              x="March"
              y={11756}
              r={3}
              fill="hsl(var(--primary))"
              stroke="hsl(var(--background))"
              strokeWidth={1.5}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Month Indicator */}
      <div className="flex justify-center mt-3">
        <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
          March
        </div>
      </div>
    </div>
  );
};

export default StatisticsCard;
