// sidebar.tsx
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Gem, Home, File, Settings, WandSparkles, LogOut } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import { SignOutButton } from '@clerk/nextjs'

const SideBar = ({ isMobile }: { isMobile: boolean }) => {
  const { user } = useUser();
  const pathname = usePathname();

  const routes = [
    { name: "Home", href: "/dashboard", icon: Home },
    { name: "Paraphrase", href: "/paraphrase", icon: WandSparkles },
    { name: "Documents", href: "/documents", icon: File },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  return (
    <div className="h-full flex flex-col justify-between bg-slate-800 text-white p-4">
      {!isMobile ? (
        /* Desktop Sidebar Content */
        <>
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-8 p-2">
              <span className="font-bold text-xl">PagePivot AI</span>
            </Link>
            <div className="space-y-1">
              {routes.map((route) => {
                const isActive = pathname === route.href;
                const Icon = route.icon;
                return (
                  <Link key={route.href} href={route.href} className="block">
                    <Button
                      variant={isActive ? "secondary" : "ghost"}
                      className={`w-full justify-start gap-3 text-lg ${
                        isActive ? "bg-slate-700" : "hover:bg-slate-700"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      {route.name}
                    </Button>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="space-y-4">
            <div className="px-2">
              <Progress value={40} className="h-2 bg-slate-600" />
              <p className="text-sm mt-2 text-slate-300">2/5 PDFs uploaded</p>
            </div>
            <Button
              variant="outline"
              className="w-full gap-2 bg-slate-700 text-white hover:bg-slate-600"
            >
              <Gem className="h-5 w-5" />
              Upgrade Plan
            </Button>
          </div>
        </>
      ) : (
        /* Mobile Sidebar Content */
        <>
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-2">
              <UserButton afterSignOutUrl="/" />
              <div className="flex flex-col">
                <span className="font-medium">{user?.fullName}</span>
                <span className="text-sm text-slate-400">
                  {user?.primaryEmailAddress?.emailAddress}
                </span>
              </div>
            </div>
            <div className="border-t border-slate-600 pt-4">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700 transition-colors"
                >
                  <route.icon className="h-5 w-5" />
                  {route.name}
                </Link>
              ))}
            </div>
          </div>
          <Button
            variant="ghost"
            className="w-full gap-3 justify-start text-red-400 hover:bg-slate-700"
          >
            <LogOut className="h-5 w-5" />
            <SignOutButton />
          </Button>
        </>
      )}
    </div>
  );
};

export default SideBar;