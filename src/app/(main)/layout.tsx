"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { WorkflowSidebar } from "@/components/workflowSidebar/WorkflowSidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        {/* Sidebar MUST be directly inside SidebarProvider */}
        <WorkflowSidebar />

        {/* Main Content */}
        <main className="flex-1">
          <div className="p-2 border-b">
            <SidebarTrigger />
          </div>
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
