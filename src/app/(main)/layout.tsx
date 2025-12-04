"use client";

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { WorkflowSidebar } from "@/components/workflowSidebar/WorkflowSidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex w-full min-h-screen">
        {/* LEFT SIDEBAR */}
        <WorkflowSidebar />

        {/* RIGHT CONTENT */}
        <SidebarInset>
          <header className="p-2 border-b">
            <SidebarTrigger />
          </header>

          <main className="p-4">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
