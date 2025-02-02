"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Gem, Home, File, Settings, WandSparkles } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const SideBar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  const routes = [
    { name: "Home", href: "/dashboard", icon: Home },
    { name: "Paraphrase", href: "/paraphrase", icon: WandSparkles },
    { name: "My Documents", href: "/mydocuments", icon: File },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  return (
    <div className="shadow-md h-screen p-4 flex flex-col justify-between bg-slate-600 text-white">
      {/* Top Section */}
      <div>
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 mb-8 p-2">
          <span className="font-bold text-lg">PagePivot AI</span>
        </Link>

        {/* Navigation Links */}
        <div className="space-y-1">
          {routes.map((route) => {
            const isActive = pathname === route.href;
            const Icon = route.icon;

            return (
              <Link key={route.href} href={route.href} className="block">
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className={`w-full justify-start gap-2 ${
                    isActive ? "bg-accent text-white" : "text-gray-300"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {route.name}
                </Button>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="space-y-4">
        {/* Free Version Indicator */}
        <div className="px-2 text-sm text-gray-300">Free Version</div>

        {/* Progress Bar */}
        <div className="px-2">
          <Progress value={40} className="h-2 bg-gray-400" />
          <p className="text-sm mt-1 text-gray-300">2 out of 5 pdf uploaded</p>
        </div>

        {/* Upgrade Button */}
        <Button
          onClick={() => setIsOpen(true)}
          variant="outline"
          className="w-full gap-2 bg-white text-slate-600 hover:bg-gray-100"
        >
          <Gem className="h-4 w-4" />
          Upgrade Now
        </Button>
      </div>

      {/* Upgrade Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upgrade Plan</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p>Premium features dialog content here...</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SideBar;