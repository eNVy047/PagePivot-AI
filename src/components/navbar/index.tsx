"use client";
import React from 'react'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

import { UserButton, useUser } from "@clerk/nextjs";



export default  function Navbar() {
  
  const { isSignedIn, isLoaded } = useUser();

    
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold">PagePivot AI</span>
        </Link>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
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
        <div className="flex items-center space-x-4">
          <Link href="https://github.com/amanesoft" target="_blank" rel="noreferrer">
            <Button variant="ghost" size="icon">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <div>
              {isLoaded ? (
                isSignedIn ? (
                  // Render the user profile button
                  <UserButton />
                ) : (
                  // Render the "Sign In" link
                  <Link href="/sign-in" className="text-sm hover:underline">
                    Sign In
                  </Link>
                )
              ) : (
                // Optionally, render a loading indicator
                <span>Loading...</span>
              )}
            </div>

          <Button>
            <Link href="/dashboard">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
