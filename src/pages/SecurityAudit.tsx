
import React from "react";
import { Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import MainNav from "@/components/MainNav";

const SecurityAudit = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col theme-transition">
      <MainNav />
      
      <main className="flex-1">
        <div className="bg-white dark:bg-slate-900 py-6 border-b">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-xl font-medium">Security Audit</h2>
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="ghost" className="bg-background/50">Home</Button>
              <Button variant="ghost" className="bg-background/50">Automated Security</Button>
              <Button variant="ghost" className="bg-background/50">Implementation</Button>
              <Button variant="ghost" className="bg-background/50">Testing</Button>
              <Button variant="ghost" className="bg-background/50">Resources</Button>
              <Button variant="ghost" className="bg-background/50">Blog</Button>
              
              <div className="ml-auto flex gap-2 mt-2 sm:mt-0">
                <Button variant="outline">Documentation</Button>
                <Button>Get Started</Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-50 dark:bg-blue-950/10 z-0">
            <div className="absolute top-20 left-20 w-24 h-24 bg-blue-500/10 rounded-full"></div>
            <div className="absolute top-40 right-40 w-32 h-32 bg-blue-500/10 rounded-full"></div>
            <div className="absolute bottom-20 left-1/3 w-16 h-16 bg-blue-500/10 rounded-full"></div>
            <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-blue-500/10 rounded-full"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
            <div className="text-center mb-8">
              <div className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm mb-8">
                Cutting-edge Aptos Security
              </div>
            </div>
            
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold mb-6">
                Automated Security in<br />
                Aptos Move Smart Contracts
              </h1>
              
              <p className="text-xl text-muted-foreground mb-12">
                Build secure, tamper-proof smart contracts with automated protection
                mechanisms. Keep your blockchain applications safe from attacks.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
                  Learn About Automated Security <ArrowRight className="h-4 w-4" />
                </Button>
                
                <Button size="lg" variant="outline">
                  Get Started with Secure Coding
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SecurityAudit;
