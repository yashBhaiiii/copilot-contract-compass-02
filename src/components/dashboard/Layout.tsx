
import React from "react";
import { Sidebar } from "./Sidebar";
import { Bell, Search } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search contracts, projects..."
              className="h-9 w-full rounded-md border border-input bg-background pl-8 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>
          <button className="rounded-full p-1.5 hover:bg-accent">
            <Bell className="h-5 w-5" />
          </button>
        </header>
        <div className="p-4 sm:p-6 animate-fade-in">
          {children}
        </div>
      </main>
    </div>
  );
}
