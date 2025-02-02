"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Menu, X } from "lucide-react";
import { UserButton, useUser } from "@clerk/nextjs";

export default function Navbar() {
  const { isSignedIn, isLoaded } = useUser();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        {/* Logo and Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
          {/* Mobile Menu Toggle Button */}
          <button
            onClick={toggleMobileMenu}
            className="rounded-lg p-2 hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent md:hidden"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold">PagePivot AI</span>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden flex-1 items-center space-x-6 text-sm font-medium md:flex">
          <Link href="/solutions" className="transition-colors hover:text-primary">
            Solutions
          </Link>
          <Link href="/industries" className="transition-colors hover:text-primary">
            Industries
          </Link>
          <Link href="/about" className="transition-colors hover:text-primary">
            About Us
          </Link>
        </nav>

        {/* Right Side: GitHub, User Button, and Get Started */}
        <div className="flex items-center space-x-4">
          <Link href="https://github.com/amanesoft" target="_blank" rel="noreferrer">
            <Button variant="ghost" size="icon">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>

          {/* User Button or Sign In */}
          <div>
            {isLoaded ? (
              isSignedIn ? (
                <UserButton />
              ) : (
                <Link href="/sign-in" className="text-sm hover:underline">
                  Sign In
                </Link>
              )
            ) : (
              <span>Loading...</span>
            )}
          </div>

          {/* Get Started Button */}
          <Button>
            <Link href="/dashboard">Get Started</Link>
          </Button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-2 p-4 border-t">
            <Link
              href="/solutions"
              className="transition-colors hover:text-primary"
              onClick={toggleMobileMenu}
            >
              Solutions
            </Link>
            <Link
              href="/industries"
              className="transition-colors hover:text-primary"
              onClick={toggleMobileMenu}
            >
              Industries
            </Link>
            <Link
              href="/about"
              className="transition-colors hover:text-primary"
              onClick={toggleMobileMenu}
            >
              About Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}