"use client";

import React from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";

type NavbarProps = {
  onToggleSidebar: () => void;
};

export default function Navbar({ onToggleSidebar }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4">
        {/* Left Section: Toggle Button and Logo */}
        <div className="flex items-center space-x-4">
          {/* Toggle Button for Small Screens */}
          <button
            onClick={onToggleSidebar}
            className="rounded-lg p-2 hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent md:hidden"
            aria-label="Toggle Sidebar"
          >
            <Menu className="h-5 w-5" />
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-lg font-bold">PagePivot AI</span>
          </Link>
        </div>

        

        {/* Right Section: User Button */}
        <div className="flex items-center justify-end space-x-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </header>
  );
}