
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileCode2, MoreVertical, Shield, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

type ProjectStatus = "inProgress" | "deployed" | "audited" | "error";

interface ProjectCardProps {
  title: string;
  description: string;
  status: ProjectStatus;
  lastUpdated: string;
  securityScore?: number;
  issues?: {
    critical: number;
    warnings: number;
  };
}

const getStatusColor = (status: ProjectStatus) => {
  switch (status) {
    case "inProgress":
      return "bg-amber-500 text-white";
    case "deployed":
      return "bg-green-500 text-white";
    case "audited":
      return "bg-purple-500 text-white";
    case "error":
      return "bg-red-500 text-white";
  }
};

const getStatusText = (status: ProjectStatus) => {
  switch (status) {
    case "inProgress":
      return "In Progress";
    case "deployed":
      return "Deployed";
    case "audited":
      return "Audited";
    case "error":
      return "Error";
  }
};

const ProjectCard = ({
  title,
  description,
  status,
  lastUpdated,
  securityScore,
  issues,
}: ProjectCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center gap-2">
          <FileCode2 className="h-5 w-5 text-muted-foreground" />
          <h3 className="font-bold">{title}</h3>
        </div>
        <Badge className={cn("ml-auto", getStatusColor(status))}>
          {getStatusText(status)}
        </Badge>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        
        <div className="flex flex-col gap-3">
          {securityScore !== undefined && (
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Security Score</span>
              <div className="flex items-center gap-1">
                <Shield className={cn("h-4 w-4", securityScore > 80 ? "text-green-500" : securityScore > 50 ? "text-amber-500" : "text-red-500")} />
                <span className={cn("text-sm font-medium", securityScore > 80 ? "text-green-500" : securityScore > 50 ? "text-amber-500" : "text-red-500")}>
                  {securityScore}%
                </span>
              </div>
            </div>
          )}
          
          {issues && (issues.critical > 0 || issues.warnings > 0) && (
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Issues</span>
              <div className="flex items-center gap-2">
                {issues.critical > 0 && (
                  <Badge variant="destructive" className="text-xs">
                    {issues.critical} Critical
                  </Badge>
                )}
                {issues.warnings > 0 && (
                  <Badge variant="outline" className="text-xs text-amber-500 border-amber-500">
                    {issues.warnings} Warnings
                  </Badge>
                )}
              </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">Updated {lastUpdated}</span>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="ghost">
            <MoreVertical className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="default">View</Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export function ProjectCards() {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: "TokenX Contract",
      description: "ERC-20 token with vesting and governance",
      status: "inProgress" as ProjectStatus,
      lastUpdated: "2 hours ago",
      securityScore: 65,
      issues: {
        critical: 0,
        warnings: 3,
      },
    },
    {
      id: 2,
      title: "DEX Protocol",
      description: "Decentralized exchange with AMM functionality",
      status: "deployed" as ProjectStatus,
      lastUpdated: "12 hours ago",
      securityScore: 92,
      issues: {
        critical: 0,
        warnings: 1,
      },
    },
    {
      id: 3,
      title: "NFT Marketplace",
      description: "NFT marketplace with royalty support",
      status: "error" as ProjectStatus,
      lastUpdated: "1 day ago",
      securityScore: 45,
      issues: {
        critical: 2,
        warnings: 4,
      },
    },
    {
      id: 4,
      title: "DAO Governance",
      description: "On-chain governance with proposal system",
      status: "audited" as ProjectStatus,
      lastUpdated: "3 days ago",
      securityScore: 88,
      issues: {
        critical: 0,
        warnings: 2,
      },
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          status={project.status}
          lastUpdated={project.lastUpdated}
          securityScore={project.securityScore}
          issues={project.issues}
        />
      ))}
    </div>
  );
}
