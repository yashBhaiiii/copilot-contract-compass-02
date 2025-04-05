
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Rocket, Code, AlertTriangle } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

const StatCard = ({ title, value, description, icon, trend }: StatCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground mt-1">{description}</p>
        {trend && (
          <div className="flex items-center gap-1 mt-2">
            <span
              className={`text-xs ${
                trend.isPositive ? "text-green-500" : "text-red-500"
              }`}
            >
              {trend.isPositive ? "+" : "-"}{trend.value}%
            </span>
            <span className="text-xs text-muted-foreground">from last month</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      <StatCard
        title="Total Projects"
        value="12"
        description="Active smart contract projects"
        icon={<Code className="h-4 w-4 text-muted-foreground" />}
        trend={{ value: 16, isPositive: true }}
      />
      <StatCard
        title="Deployments"
        value="32"
        description="Successful contract deployments"
        icon={<Rocket className="h-4 w-4 text-muted-foreground" />}
        trend={{ value: 8, isPositive: true }}
      />
      <StatCard
        title="Security Score"
        value="87%"
        description="Average security rating"
        icon={<Shield className="h-4 w-4 text-muted-foreground" />}
        trend={{ value: 4, isPositive: true }}
      />
      <StatCard
        title="Issues Resolved"
        value="24"
        description="Security issues fixed"
        icon={<AlertTriangle className="h-4 w-4 text-muted-foreground" />}
        trend={{ value: 12, isPositive: true }}
      />
    </div>
  );
}
