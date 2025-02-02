"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Menu, X, User, Mail } from "lucide-react";
import { UserButton, useUser } from "@clerk/nextjs";

export default function Navbar() {
  const { isSignedIn, isLoaded, user } = useUser();
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
            className="rounded-lg p-2 hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent lg:hidden"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold">PagePivot AI</span>
          </Link>
        </div>

        {/* Desktop Navigation Links (Hidden on Mobile and Tablet) */}
        <nav className="hidden lg:flex flex-1 items-center justify-center space-x-6 text-sm font-medium">
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

        {/* Right Side: GitHub, User Button, and Get Started (Hidden on Mobile) */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* GitHub Button */}
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

        {/* Get Started Button (Visible on Mobile and Tablet) */}
        <div className="lg:hidden">
          <Button>
            <Link href="/dashboard">Get Started</Link>
          </Button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="flex flex-col space-y-4 p-4 border-t bg-background">
            {/* Navigation Links */}
            <Link
              href="/solutions"
              className="flex items-center space-x-2 transition-colors hover:text-primary"
              onClick={toggleMobileMenu}
            >
              <span>Solutions</span>
            </Link>
            <Link
              href="/industries"
              className="flex items-center space-x-2 transition-colors hover:text-primary"
              onClick={toggleMobileMenu}
            >
              <span>Industries</span>
            </Link>
            <Link
              href="/about"
              className="flex items-center space-x-2 transition-colors hover:text-primary"
              onClick={toggleMobileMenu}
            >
              <span>About Us</span>
            </Link>

            {/* GitHub Button */}
            <Link
              href="https://github.com/eNVy047"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2 transition-colors hover:text-primary"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </Link>

            {/* User Info (Name and Email) */}
            {isLoaded && isSignedIn && user && (
              <div className="flex flex-col space-y-3 pt-4 border-t">
              {/* User Name and Avatar */}
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 rounded-full flex items-center justify-center bg-accent">
                  <UserButton />
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-sm">{user.fullName}</span>
                  <span className="text-xs text-muted-foreground">
                    {user.primaryEmailAddress?.emailAddress}
                  </span>
                </div>
              </div>
            
              {/* Email Address */}
              <div className="flex items-center space-x-2 pl-1">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  {user.primaryEmailAddress?.emailAddress}
                </span>
              </div>
            </div>
            )}

            {/* User Button or Sign In */}
            
          </div>
        </div>
      )}
    </header>
  );
}