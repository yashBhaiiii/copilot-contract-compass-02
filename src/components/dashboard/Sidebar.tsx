
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Activity,
  BarChart3,
  FileCode2,
  Home,
  Settings,
  Shield,
  Users,
  Wallet,
} from "lucide-react";

type SidebarItemProps = {
  icon: React.ElementType;
  label: string;
  to: string;
  active?: boolean;
};

const SidebarItem = ({ icon: Icon, label, to, active }: SidebarItemProps) => {
  return (
    <Link
      to={to}
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
        active
          ? "bg-sidebar-accent text-sidebar-accent-foreground"
          : "text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
      )}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </Link>
  );
};

export function Sidebar() {
  const location = useLocation();
  const pathname = location.pathname;

  const mainNavItems = [
    { icon: Home, label: "Dashboard", to: "/" },
    { icon: FileCode2, label: "Projects", to: "/projects" },
    { icon: Shield, label: "Security", to: "/security" },
    { icon: BarChart3, label: "Performance", to: "/performance" },
    { icon: Activity, label: "Activity", to: "/activity" },
  ];

  const secondaryNavItems = [
    { icon: Users, label: "Team", to: "/team" },
    { icon: Wallet, label: "Billing", to: "/billing" },
    { icon: Settings, label: "Settings", to: "/settings" },
  ];

  return (
    <div className="flex h-screen w-64 flex-col border-r border-sidebar-border bg-sidebar">
      <div className="flex h-14 items-center border-b border-sidebar-border px-4">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-smartcontract-purple" />
          <span className="font-bold text-sidebar-foreground">
            Contract Copilot
          </span>
        </div>
      </div>
      <div className="flex-1 overflow-auto py-4">
        <nav className="flex flex-col gap-1 px-2">
          {mainNavItems.map((item) => (
            <SidebarItem
              key={item.to}
              icon={item.icon}
              label={item.label}
              to={item.to}
              active={
                item.to === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.to)
              }
            />
          ))}
        </nav>
        <div className="mt-6">
          <div className="px-4 py-2">
            <h3 className="text-xs font-medium uppercase text-sidebar-foreground/50">
              Settings
            </h3>
          </div>
          <nav className="flex flex-col gap-1 px-2">
            {secondaryNavItems.map((item) => (
              <SidebarItem
                key={item.to}
                icon={item.icon}
                label={item.label}
                to={item.to}
                active={pathname.startsWith(item.to)}
              />
            ))}
          </nav>
        </div>
      </div>
      <div className="border-t border-sidebar-border p-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-sidebar-accent flex items-center justify-center">
            <span className="text-xs font-medium text-white">JD</span>
          </div>
          <div>
            <p className="text-sm font-medium text-sidebar-foreground">
              John Doe
            </p>
            <p className="text-xs text-sidebar-foreground/70">
              Pro Plan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
