
import React from "react";
import { Gauge, Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import MainNav from "@/components/MainNav";

const GasOptimizer = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col theme-transition">
      <MainNav />
      
      <main className="flex-1">
        <div className="bg-white dark:bg-slate-900 py-12 border-b">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                <Gauge className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-xl font-medium">Gas Optimizer</h2>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="ghost" className="bg-background/50">About Gas</Button>
              <Button variant="ghost" className="bg-background/50">Optimization</Button>
              <Button variant="ghost" className="bg-background/50">Implementation</Button>
              <Button variant="ghost" className="bg-background/50">Resources</Button>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm mb-8">
              <span className="inline-block w-4 h-4 rounded-full bg-blue-500"></span>
              Master gas efficiency in Aptos Move
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Gas Optimization in Aptos Move:<br />
              From Concept to Implementation
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn how to reduce transaction fees and improve
              execution efficiency in your Move smart contracts.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
            <Button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700">
              Get Started with Optimization <ArrowRight className="h-4 w-4" />
            </Button>
            
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="h-4 w-4" /> Download Optimization Checklist
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50%</div>
              <div className="text-sm text-muted-foreground">Average Gas Reduction</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">2x</div>
              <div className="text-sm text-muted-foreground">Transaction Throughput</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">30%</div>
              <div className="text-sm text-muted-foreground">Lower Transaction Costs</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GasOptimizer;
