// layout.tsx
"use client";

import React, { useState, useEffect } from "react";
import SideBar from "@/components/sidebar";
import DasNav from "@/components/dashboard-navbar";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);
      if (!isMobileView) setIsSidebarOpen(false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative">
      {/* Desktop Sidebar */}
      <div className="hidden md:block fixed inset-y-0 z-40 w-64 h-screen">
        <SideBar isMobile={false} />
      </div>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-y-0 z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden transition-transform duration-300 ease-in-out w-64`}
      >
        <SideBar isMobile={true} />
      </div>

      {/* Overlay for Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="md:ml-64">
        <DasNav 
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
          isMobile={isMobile}
        />
        <div className="p-4 md:p-8">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;