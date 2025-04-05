
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Shield, Gauge, Code, FileCode2 } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { User } from "lucide-react";

const MainNav = () => {
  const location = useLocation();
  const path = location.pathname;
  
  return (
    <header className="sticky top-0 z-20 w-full border-b bg-background px-4 py-3 flex items-center justify-between theme-transition">
      <div className="flex items-center">
        <Link to="/" className="flex items-center gap-2 mr-8">
          <Shield className="h-6 w-6 text-smartcontract-purple" />
          <span className="font-bold text-lg text-primary">Smart Contract Copilot</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-4">
          <Link to="/" className={cn("px-3 py-2 text-sm rounded-md transition-colors", 
            path === "/" ? "text-primary font-medium" : "text-muted-foreground hover:text-primary hover:bg-accent/50")}>
            Home
          </Link>
          <Link to="/features" className={cn("px-3 py-2 text-sm rounded-md transition-colors", 
            path === "/features" ? "text-primary font-medium" : "text-muted-foreground hover:text-primary hover:bg-accent/50")}>
            Features
          </Link>
          <Link to="/testimonials" className={cn("px-3 py-2 text-sm rounded-md transition-colors", 
            path === "/testimonials" ? "text-primary font-medium" : "text-muted-foreground hover:text-primary hover:bg-accent/50")}>
            Testimonials
          </Link>
          <Link to="/contact" className={cn("px-3 py-2 text-sm rounded-md transition-colors", 
            path === "/contact" ? "text-primary font-medium" : "text-muted-foreground hover:text-primary hover:bg-accent/50")}>
            Contact
          </Link>
          <Link to="/pricing" className={cn("px-3 py-2 text-sm rounded-md transition-colors", 
            path === "/pricing" ? "text-primary font-medium" : "text-muted-foreground hover:text-primary hover:bg-accent/50")}>
            Pricing
          </Link>
        </nav>
      </div>
      
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <Button variant="default" className="bg-blue-600 hover:bg-blue-700 text-white">
          Connect Petra Wallet
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <User className="h-4 w-4" />
          Logout
        </Button>
      </div>
    </header>
  );
};

export default MainNav;
