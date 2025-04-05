
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, AlertTriangle, AlertOctagon, CheckCircle2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface SecurityIssueProps {
  title: string;
  description: string;
  severity: "critical" | "high" | "medium" | "low";
  contract: string;
}

const SecurityIssue = ({ title, description, severity, contract }: SecurityIssueProps) => {
  const getSeverityIcon = () => {
    switch (severity) {
      case "critical":
        return <AlertOctagon className="h-5 w-5 text-red-500" />;
      case "high":
        return <AlertTriangle className="h-5 w-5 text-amber-500" />;
      case "medium":
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case "low":
        return <AlertTriangle className="h-5 w-5 text-blue-500" />;
    }
  };

  const getSeverityClass = () => {
    switch (severity) {
      case "critical":
        return "text-red-500 border-red-500";
      case "high":
        return "text-amber-500 border-amber-500";
      case "medium":
        return "text-yellow-500 border-yellow-500";
      case "low":
        return "text-blue-500 border-blue-500";
    }
  };

  return (
    <div className="border-b pb-3 mb-3 last:border-b-0 last:pb-0 last:mb-0">
      <div className="flex items-start gap-2">
        {getSeverityIcon()}
        <div>
          <div className="flex items-center gap-2">
            <h4 className="font-medium">{title}</h4>
            <span className={cn("text-xs border rounded-full px-2 py-0.5", getSeverityClass())}>
              {severity.charAt(0).toUpperCase() + severity.slice(1)}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
          <p className="text-xs text-muted-foreground mt-1">Contract: {contract}</p>
        </div>
      </div>
    </div>
  );
};

export function SecurityAudit() {
  const securityScore = 84;
  
  // Sample security issues
  const securityIssues = [
    {
      id: 1,
      title: "Reentrancy Vulnerability",
      description: "Contract state not properly updated before calling external contracts",
      severity: "critical" as const,
      contract: "DEX Protocol",
    },
    {
      id: 2,
      title: "Integer Overflow",
      description: "Possible integer overflow in token transfer function",
      severity: "high" as const,
      contract: "TokenX",
    },
    {
      id: 3,
      title: "Unchecked Return Value",
      description: "Return value from external call not checked",
      severity: "medium" as const,
      contract: "NFT Marketplace",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5" />
          Security Analysis
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium">Overall Security Score</h3>
              <span className={cn("text-sm font-bold", 
                securityScore > 80 ? "text-green-500" : 
                securityScore > 60 ? "text-yellow-500" : 
                "text-red-500"
              )}>
                {securityScore}%
              </span>
            </div>
            <Progress 
              value={securityScore} 
              className="h-2"
              indicatorClassName={cn(
                securityScore > 80 ? "bg-green-500" : 
                securityScore > 60 ? "bg-yellow-500" : 
                "bg-red-500"
              )}
            />
            <div className="flex justify-between mt-1">
              <span className="text-xs text-muted-foreground">0%</span>
              <span className="text-xs text-muted-foreground">100%</span>
            </div>
          </div>
          
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium">Active Issues</h3>
              {securityIssues.length > 0 ? (
                <span className="text-sm text-red-500 font-bold">{securityIssues.length} Issues</span>
              ) : (
                <span className="text-sm text-green-500 font-bold flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4" />
                  No Issues
                </span>
              )}
            </div>
            <div className="space-y-4">
              {securityIssues.map((issue) => (
                <SecurityIssue
                  key={issue.id}
                  title={issue.title}
                  description={issue.description}
                  severity={issue.severity}
                  contract={issue.contract}
                />
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
