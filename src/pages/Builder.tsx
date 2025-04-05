
import React from "react";
import { FileCode2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import MainNav from "@/components/MainNav";

const Builder = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col theme-transition">
      <MainNav />
      
      <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
        <div className="mb-8">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <FileCode2 className="h-6 w-6 text-purple-600" />
            Contract Builder
          </h1>
          <p className="text-muted-foreground">
            Drag and drop components to build your smart contracts visually
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-64 flex flex-col gap-2">
            <div className="bg-card rounded-md border p-4">
              <h2 className="font-medium mb-2">Templates</h2>
              <Button variant="outline" className="w-full justify-start">Templates</Button>
            </div>
            
            <div className="bg-card rounded-md border p-4 flex-1">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-medium">Contract Components</h2>
              </div>
              
              <div className="space-y-2">
                <div className="p-3 bg-purple-100 dark:bg-purple-950/30 rounded-md flex items-center justify-between text-sm hover:bg-purple-200 dark:hover:bg-purple-950/50 cursor-pointer transition-colors">
                  <span>Contracts</span>
                  <Plus className="h-4 w-4 text-purple-600" />
                </div>
                
                <div className="p-3 bg-cyan-100 dark:bg-cyan-950/30 rounded-md flex items-center justify-between text-sm hover:bg-cyan-200 dark:hover:bg-cyan-950/50 cursor-pointer transition-colors">
                  <span>Observations</span>
                  <Plus className="h-4 w-4 text-cyan-600" />
                </div>
                
                <div className="p-3 bg-amber-100 dark:bg-amber-950/30 rounded-md flex items-center justify-between text-sm hover:bg-amber-200 dark:hover:bg-amber-950/50 cursor-pointer transition-colors">
                  <span>Actions</span>
                  <Plus className="h-4 w-4 text-amber-600" />
                </div>
                
                <div className="p-3 bg-pink-100 dark:bg-pink-950/30 rounded-md flex items-center justify-between text-sm hover:bg-pink-200 dark:hover:bg-pink-950/50 cursor-pointer transition-colors">
                  <span>Values</span>
                  <Plus className="h-4 w-4 text-pink-600" />
                </div>
                
                <div className="p-3 bg-indigo-100 dark:bg-indigo-950/30 rounded-md flex items-center justify-between text-sm hover:bg-indigo-200 dark:hover:bg-indigo-950/50 cursor-pointer transition-colors">
                  <span>Payee</span>
                  <Plus className="h-4 w-4 text-indigo-600" />
                </div>
                
                <div className="p-3 bg-rose-100 dark:bg-rose-950/30 rounded-md flex items-center justify-between text-sm hover:bg-rose-200 dark:hover:bg-rose-950/50 cursor-pointer transition-colors">
                  <span>Party</span>
                  <Plus className="h-4 w-4 text-rose-600" />
                </div>
                
                <div className="p-3 bg-red-100 dark:bg-red-950/30 rounded-md flex items-center justify-between text-sm hover:bg-red-200 dark:hover:bg-red-950/50 cursor-pointer transition-colors">
                  <span>Token</span>
                  <Plus className="h-4 w-4 text-red-600" />
                </div>
                
                <div className="p-3 bg-emerald-100 dark:bg-emerald-950/30 rounded-md flex items-center justify-between text-sm hover:bg-emerald-200 dark:hover:bg-emerald-950/50 cursor-pointer transition-colors">
                  <span>Bounds</span>
                  <Plus className="h-4 w-4 text-emerald-600" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 border rounded-md bg-card p-4 min-h-[600px] relative">
            <div className="flex justify-between items-center mb-4">
              <div className="flex gap-2">
                <Button variant="outline" size="sm">New Canvas</Button>
                <Button variant="outline" size="sm">Load Canvas</Button>
                <Button variant="outline" size="sm">Save</Button>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Untitled Canvas</span>
              </div>
            </div>
            
            <div className="absolute inset-0 mt-16 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgb3BhY2l0eT0iLjA1Ij48cGF0aCBmaWxsPSIjODg4IiBkPSJNMCAwaDIwdjIwSDB6Ii8+PHBhdGggZD0iTTAgMGgyMHYyMEgwVjB6IiBzdHJva2U9IiM4ODgiLz48L2c+PC9zdmc+')] pointer-events-none z-0"></div>
          </div>
          
          <div className="w-full lg:w-80 bg-card rounded-md border p-4">
            <h2 className="font-medium mb-4">Generated Move Code</h2>
            <p className="text-sm text-muted-foreground mb-4">Supports one-to-many and many-to-one relationships</p>
            
            <div className="p-4 rounded-md bg-slate-100 dark:bg-slate-900 mb-4">
              <pre className="text-xs overflow-auto"><code>// No code generated yet</code></pre>
            </div>
            
            <div className="flex flex-col gap-2">
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Do Magic ✨
              </Button>
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">Copy Code</Button>
                <Button variant="outline" className="flex-1">Download</Button>
                <Button variant="outline" className="flex-1">Save Code</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Builder;
