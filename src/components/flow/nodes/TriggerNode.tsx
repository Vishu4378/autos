"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuShortcut,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import {
  EdgeLabelRenderer,
  Handle,
  Node,
  Position,
  useNodesState,
} from "@xyflow/react";
import { MoreVertical } from "lucide-react";

export default function TriggerNode(props: Node) {
  const { data } = props || {};

  return (
    <div className="p-2 px-4 rounded-lg border bg-white">
      <div className="flex gap-2">
        <Handle type="source" position={Position.Top} />
        <Handle type="target" position={Position.Bottom} />
        <p>{data.label}</p>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <MoreVertical />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="start">
            <DropdownMenuItem>Rename</DropdownMenuItem>
            <DropdownMenuItem>Copy</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
