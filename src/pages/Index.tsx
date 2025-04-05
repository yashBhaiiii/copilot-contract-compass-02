
import React from "react";
import { Link } from "react-router-dom";
import { DashboardLayout } from "@/components/dashboard/Layout";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { ProjectCards } from "@/components/dashboard/ProjectCards";
import { SecurityAudit } from "@/components/dashboard/SecurityAudit";
import { ActivityTimeline } from "@/components/dashboard/ActivityTimeline";
import { GasChart } from "@/components/dashboard/GasChart";
import { Shield, Gauge, Code, FileCode2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  link 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  link: string;
}) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-md font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Link to={link} className="w-full">
          <Button variant="outline" className="w-full justify-between">
            View Feature <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

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
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <FeatureCard 
            icon={<FileCode2 className="h-5 w-5 text-muted-foreground" />}
            title="Contract Builder"
            description="Visually build and deploy smart contracts with our drag-and-drop interface."
            link="/builder"
          />
          
          <FeatureCard 
            icon={<Gauge className="h-5 w-5 text-muted-foreground" />}
            title="Gas Optimizer"
            description="Reduce gas costs and improve contract efficiency."
            link="/gas-optimizer"
          />
          
          <FeatureCard 
            icon={<Code className="h-5 w-5 text-muted-foreground" />}
            title="Smart CodeLab"
            description="AI-powered IDE for writing and debugging smart contracts."
            link="/codelab"
          />
          
          <FeatureCard 
            icon={<Shield className="h-5 w-5 text-muted-foreground" />}
            title="Security Audit"
            description="Automated security analysis for your smart contracts."
            link="/security-audit"
          />
        </div>
        
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
