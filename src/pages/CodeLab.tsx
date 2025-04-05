
import React from "react";
import { Code, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import MainNav from "@/components/MainNav";

const CodeLab = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col theme-transition">
      <MainNav />
      
      <main className="flex-1">
        <div className="bg-white dark:bg-slate-900 py-6 border-b">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center">
                <Code className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-xl font-medium">CodeLab</h2>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="ghost" className="bg-background/50">Features</Button>
              <Button variant="ghost" className="bg-background/50">Demo</Button>
              <Button variant="ghost" className="bg-background/50">Insights</Button>
              <Button variant="ghost" className="bg-background/50">Resources</Button>
              <Button className="ml-auto">Try Smart CodeLab</Button>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="text-indigo-400 text-sm font-medium mb-4">AI-Powered Development</div>
              
              <h1 className="text-4xl font-bold mb-6">
                Smart CodeLab:
                <span className="text-indigo-400 block">AI-Powered</span> Online IDE
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8">
                Write, run, and debug code with real-time AI assistance—anytime,
                anywhere. Experience the future of coding with intelligent suggestions
                and automated optimizations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex items-center gap-2">
                  Try Smart CodeLab Now <ArrowRight className="h-4 w-4" />
                </Button>
                
                <Button variant="outline">
                  Learn More About Features
                </Button>
              </div>
            </div>
            
            <div className="bg-slate-950 rounded-lg shadow-lg overflow-hidden border border-slate-800">
              <div className="flex items-center gap-2 p-2 bg-slate-900">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              
              <pre className="p-6 text-sm font-mono overflow-auto">
                <code className="text-white">
{`function analyzeCode(codeInput) {
  // AI-powered code analysis
  const suggestions = aiModel.analyze(codeInput);
  
  if (suggestions.length > 0) {
    return {
      optimized: applyOptimizations(codeInput, suggestions),
      improvements: suggestions.map(s => s.description)
    };
  }
  
  return {
    optimized: codeInput,
    improvements: []
  };
}`}
                </code>
              </pre>
              
              <div className="p-4 bg-blue-900/30 border-t border-blue-900/50">
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center mt-1">
                    <Code className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs mb-1">Smart AI suggestion:</div>
                    <div className="text-white text-sm">
                      Consider adding error handling for invalid inputs with try/catch block
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CodeLab;
