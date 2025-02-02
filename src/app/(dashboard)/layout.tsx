"use client";

import React, { useState, useEffect } from "react";
import SideBar from "@/components/sidebar";
import DasNav from "@/components/dashboard-navbar";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Close sidebar on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 z-40 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-200 ease-in-out md:w-64 h-screen`}
      >
        <SideBar />
      </div>

      {/* Overlay for small screens */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-30"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="md:ml-64">
        <DasNav onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <div className="p-4 md:p-10">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;