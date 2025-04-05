
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3 } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export function GasChart() {
  // Sample gas usage data
  const gasData = [
    {
      name: "TokenX",
      deployment: 1850000,
      execution: 85000,
    },
    {
      name: "DEX",
      deployment: 3200000,
      execution: 195000,
    },
    {
      name: "NFT",
      deployment: 2450000,
      execution: 124000,
    },
    {
      name: "DAO",
      deployment: 2800000,
      execution: 145000,
    },
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background p-2 border rounded shadow">
          <p className="font-medium">{label}</p>
          <p className="text-sm text-[#7C5DFA]">
            Deployment: {payload[0].value.toLocaleString()} gas
          </p>
          <p className="text-sm text-[#4CAF50]">
            Execution: {payload[1].value.toLocaleString()} gas
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5" />
          Gas Optimization
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={gasData}
              margin={{
                top: 10,
                right: 10,
                left: 10,
                bottom: 20,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" />
              <XAxis 
                dataKey="name" 
                tick={{ fill: '#9E9E9E', fontSize: 12 }}
                axisLine={{ stroke: '#333' }}
              />
              <YAxis 
                tick={{ fill: '#9E9E9E', fontSize: 12 }} 
                tickFormatter={(value) => `${value / 1000}k`}
                axisLine={{ stroke: '#333' }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="deployment" fill="#7C5DFA" radius={[4, 4, 0, 0]} />
              <Bar dataKey="execution" fill="#4CAF50" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center mt-4 gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#7C5DFA]"></div>
            <span className="text-xs text-muted-foreground">Deployment</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#4CAF50]"></div>
            <span className="text-xs text-muted-foreground">Execution</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
