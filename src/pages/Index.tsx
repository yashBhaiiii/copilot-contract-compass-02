
import React from "react";
import { DashboardLayout } from "@/components/dashboard/Layout";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { ProjectCards } from "@/components/dashboard/ProjectCards";
import { SecurityAudit } from "@/components/dashboard/SecurityAudit";
import { ActivityTimeline } from "@/components/dashboard/ActivityTimeline";
import { GasChart } from "@/components/dashboard/GasChart";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Smart Contract Dashboard</h1>
        <p className="text-muted-foreground">
          Monitor your smart contracts, review security audits, and track performance metrics
        </p>
      </div>

      <div className="space-y-6">
        <StatsCards />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <h2 className="text-lg font-semibold mb-4">Active Projects</h2>
            <ProjectCards />
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
            <ActivityTimeline />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SecurityAudit />
          <GasChart />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
