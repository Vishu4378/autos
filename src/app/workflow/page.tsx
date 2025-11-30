"use client";

import WorkflowCanvas from "@/components/flow/WorkflowCanvas";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// import Sidebar from "@/components/flow/Sidebar";

export default function WorkflowBuilderPage() {
  return (
    <div className="flex h-screen w-full">
      {/* Sidebar */}
      {/* <div className="w-64 border-r bg-gray-50 p-4">
        <Sidebar />
      </div> */}

      {/* Workflow Canvas */}
      {/* <div className="flex-1">
        <WorkflowCanvas />
      </div> */}
      <Link href="/workflow/_id">
        <Button>+ Create a new flow</Button>
      </Link>
    </div>
  );
}
