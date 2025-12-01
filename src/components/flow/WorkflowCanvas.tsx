"use client";
import { useState, useCallback } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  useNodesState,
  useEdgesState,
  Node,
  NodeTypes,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import TriggerNode from "./nodes/TriggerNode";

const initialNodes = [
  {
    id: "n1",
    position: { x: 0, y: 0 },
    data: { label: "Node 1" },
    type: "triggerNode",
  },
  {
    id: "n2",
    position: { x: 0, y: 100 },
    data: { label: "Node 2" },
    type: "triggerNode",
  },
];
const initialEdges = [{ id: "n1-n2", source: "n1", target: "n2" }];

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const nodeTypes: NodeTypes = {
    triggerNode: TriggerNode,
  };

  const onConnect = useCallback(
    (params) => setEdges((els) => addEdge(params, els)),
    []
  );

  return (
    <div
      style={{ width: "100vw", height: "100vh" }}
      className="bg-gray-200 text-black"
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        nodeTypes={nodeTypes}
      >
        <Background color="gray" gap={12} size={1} />
        <Controls />
      </ReactFlow>
    </div>
  );
}
