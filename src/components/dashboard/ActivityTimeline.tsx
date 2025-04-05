
import React from "react";
import { cn } from "@/lib/utils";
import { FileCode2, Rocket, Shield, GitMerge, AlertOctagon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type ActivityType = "created" | "deployed" | "audited" | "updated" | "error";

interface TimelineItemProps {
  title: string;
  time: string;
  description: string;
  type: ActivityType;
  projectName: string;
}

const getActivityIcon = (type: ActivityType) => {
  switch (type) {
    case "created":
      return <FileCode2 className="h-5 w-5" />;
    case "deployed":
      return <Rocket className="h-5 w-5" />;
    case "audited":
      return <Shield className="h-5 w-5" />;
    case "updated":
      return <GitMerge className="h-5 w-5" />;
    case "error":
      return <AlertOctagon className="h-5 w-5" />;
  }
};

const getActivityColor = (type: ActivityType) => {
  switch (type) {
    case "created":
      return "bg-blue-500";
    case "deployed":
      return "bg-green-500";
    case "audited":
      return "bg-purple-500";
    case "updated":
      return "bg-amber-500";
    case "error":
      return "bg-red-500";
  }
};

const TimelineItem = ({ title, time, description, type, projectName }: TimelineItemProps) => {
  return (
    <div className="mb-4 grid grid-cols-[25px_1fr] items-start gap-2 pb-4 last:mb-0 last:pb-0">
      <div className={cn("rounded-full p-1 flex items-center justify-center", getActivityColor(type))}>
        {getActivityIcon(type)}
      </div>
      <div className="grid gap-1">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-medium">{title}</h3>
          <Badge variant="outline" className="text-xs">
            {projectName}
          </Badge>
        </div>
        <time className="text-xs text-muted-foreground">{time}</time>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export function ActivityTimeline() {
  // Sample activity data
  const activities = [
    {
      id: 1,
      title: "Contract Created",
      time: "2 hours ago",
      description: "Token contract created from template",
      type: "created" as ActivityType,
      projectName: "TokenX",
    },
    {
      id: 2,
      title: "Audit Completed",
      time: "5 hours ago",
      description: "Security audit passed with 2 warnings",
      type: "audited" as ActivityType,
      projectName: "DEX Protocol",
    },
    {
      id: 3,
      title: "Contract Deployed",
      time: "12 hours ago",
      description: "Successfully deployed to Ethereum mainnet",
      type: "deployed" as ActivityType,
      projectName: "DEX Protocol",
    },
    {
      id: 4,
      title: "Code Updated",
      time: "1 day ago",
      description: "Fixed array overflow vulnerability",
      type: "updated" as ActivityType,
      projectName: "NFT Marketplace",
    },
    {
      id: 5,
      title: "Deployment Failed",
      time: "1 day ago",
      description: "Insufficient gas for contract deployment",
      type: "error" as ActivityType,
      projectName: "NFT Marketplace",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="max-h-[400px] overflow-auto">
        <div className="space-y-2">
          {activities.map((activity) => (
            <TimelineItem
              key={activity.id}
              title={activity.title}
              time={activity.time}
              description={activity.description}
              type={activity.type}
              projectName={activity.projectName}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
