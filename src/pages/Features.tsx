
import React from "react";
import { Link } from "react-router-dom";
import { Shield, Gauge, Code, FileCode2, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MainNav from "@/components/MainNav";

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  link, 
  color 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  link: string;
  color: string;
}) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${color} mb-4`}>
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        <p>Learn how our platform can help you build better smart contracts with advanced tools and features.</p>
      </CardContent>
      <CardFooter>
        <Link to={link} className="w-full">
          <Button className="w-full justify-between">
            Explore Feature <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

const Features = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col theme-transition">
      <MainNav />
      
      <main className="flex-1 p-6 md:p-8 max-w-7xl mx-auto w-full">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Smart Contract Copilot Features</h1>
          <p className="text-muted-foreground text-lg">
            Explore our comprehensive suite of tools designed to make smart contract development easier, safer, and more efficient.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard 
            icon={<FileCode2 className="h-6 w-6 text-white" />}
            title="Smart Contract Builder"
            description="Drag-and-drop interface to build your smart contracts visually."
            link="/builder"
            color="bg-purple-600"
          />
          
          <FeatureCard 
            icon={<Gauge className="h-6 w-6 text-white" />}
            title="Gas Optimizer"
            description="Optimize your smart contracts for lower gas fees and better performance."
            link="/gas-optimizer"
            color="bg-blue-600"
          />
          
          <FeatureCard 
            icon={<Code className="h-6 w-6 text-white" />}
            title="Smart CodeLab"
            description="AI-powered development environment for writing and debugging code."
            link="/codelab"
            color="bg-indigo-600"
          />
          
          <FeatureCard 
            icon={<Shield className="h-6 w-6 text-white" />}
            title="Security Audit"
            description="Automated security analysis to identify vulnerabilities in your contracts."
            link="/security-audit"
            color="bg-green-600"
          />
        </div>
      </main>
    </div>
  );
};

export default Features;
