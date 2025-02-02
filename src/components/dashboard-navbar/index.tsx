// dashboard-navbar.tsx
"use client";

import React from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { Menu, Gem } from "lucide-react";
import { Button } from "@/components/ui/button";
import SubscriptionCard from "../Dialogs/subscriptionCard";

type NavbarProps = {
  onToggleSidebar: () => void;
  isMobile: boolean;
};

export default function Navbar({ onToggleSidebar, isMobile }: NavbarProps) {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-slate-200 bg-slate-400 backdrop-blur">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          {isMobile && (
            <Button
              onClick={onToggleSidebar}
              variant="ghost"
              size="icon"
              className="md:hidden"
            >
              <Menu className="h-6 w-6" />
            </Button>
          )}
          {isMobile && (
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-slate-800">PagePivot AI</span>
            </Link>
          )}
        </div>

        <div className="flex items-center gap-4">
          {isMobile && (
            <SubscriptionCard>
              <Button variant="ghost"  className="text-slate-800">
              <Gem className="h-6 w-6" />Upgrade Now
            </Button>
            </SubscriptionCard>
          )}
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </header>
  );
}