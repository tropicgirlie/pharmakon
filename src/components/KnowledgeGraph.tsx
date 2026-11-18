"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import type { KnowledgeGraphData } from "@/lib/plant-data";

interface KnowledgeGraphProps {
  data: NonNullable<KnowledgeGraphData>;
}

const TYPE_COLORS: Record<string, string> = {
  plant: "#dc4a26",
  practice: "#1f3a2a",
  medicine: "#e8a83c",
  tradition: "#5a2a52",
  use: "#6fa3b5",
  community: "#a3bd8f",
  region: "#1a2432",
  country: "#1f3a2a",
};

export default function KnowledgeGraph({ data }: KnowledgeGraphProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 500 });
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [positions, setPositions] = useState<Map<string, { x: number; y: number }>>(new Map());

  // Initialize positions with a force-like layout
  useEffect(() => {
    const { nodes } = data;
    const centerX = dimensions.width / 2;
    const centerY = dimensions.height / 2;
    const newPositions = new Map<string, { x: number; y: number }>();

    // Place plant at center
    const plantNode = nodes.find(n => n.type === "plant");
    if (plantNode) {
      newPositions.set(plantNode.id, { x: centerX, y: centerY });
    }

    // Group nodes by type and arrange in rings
    const typeGroups = new Map<string, typeof nodes>();
    nodes.forEach(node => {
      if (node.type === "plant") return;
      if (!typeGroups.has(node.type)) typeGroups.set(node.type, []);
      typeGroups.get(node.type)!.push(node);
    });

    const ringRadii: Record<string, number> = {
      practice: 120,
      medicine: 180,
      tradition: 180,
      use: 240,
      community: 280,
      region: 320,
      country: 360,
    };

    let currentAngle = 0;
    typeGroups.forEach((groupNodes, type) => {
      const radius = ringRadii[type] || 200;
      const angleStep = (Math.PI * 2) / groupNodes.length;
      groupNodes.forEach((node, i) => {
        const angle = currentAngle + i * angleStep;
        newPositions.set(node.id, {
          x: centerX + Math.cos(angle) * radius,
          y: centerY + Math.sin(angle) * radius,
        });
      });
      currentAngle += Math.PI / 4;
    });

    setPositions(newPositions);
  }, [data, dimensions]);

  // Resize handler
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: Math.max(500, rect.width * 0.6) });
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getConnectedNodes = useCallback((nodeId: string) => {
    const connected = new Set<string>();
    data.links.forEach(link => {
      if (link.source === nodeId) connected.add(link.target);
      if (link.target === nodeId) connected.add(link.source);
    });
    return connected;
  }, [data.links]);

  const connectedToHovered = hoveredNode ? getConnectedNodes(hoveredNode) : new Set<string>();

  return (
    <div ref={containerRef} className="w-full">
      <div className="flex flex-wrap gap-2 mb-4">
        {Object.entries(TYPE_COLORS).map(([type, color]) => (
          <div key={type} className="flex items-center gap-1.5 text-xs">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: color }} />
            <span className="text-[color:var(--ink-soft)] capitalize">{type}</span>
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative rounded-2xl bg-[color:var(--bone)] overflow-hidden"
      >
        <div className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage: `radial-gradient(circle, var(--ink) 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />

        <svg
          ref={svgRef}
          width={dimensions.width}
          height={dimensions.height}
          className="relative z-10"
          viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        >
          {/* Links */}
          {data.links.map((link, i) => {
            const sourcePos = positions.get(link.source);
            const targetPos = positions.get(link.target);
            if (!sourcePos || !targetPos) return null;

            const isHighlighted = hoveredNode && (
              link.source === hoveredNode || link.target === hoveredNode
            );
            const isDimmed = hoveredNode && !isHighlighted;

            return (
              <g key={`link-${i}`}>
                <line
                  x1={sourcePos.x}
                  y1={sourcePos.y}
                  x2={targetPos.x}
                  y2={targetPos.y}
                  stroke={isHighlighted ? "var(--urucum)" : "var(--ink-muted)"}
                  strokeWidth={isHighlighted ? 2 : 1}
                  opacity={isDimmed ? 0.1 : isHighlighted ? 0.8 : 0.3}
                  className={isHighlighted ? "graph-line" : ""}
                />
                {isHighlighted && (
                  <text
                    x={(sourcePos.x + targetPos.x) / 2}
                    y={(sourcePos.y + targetPos.y) / 2}
                    textAnchor="middle"
                    className="text-[9px] fill-[color:var(--ink)]"
                    style={{ fontSize: "9px" }}
                  >
                    {link.label}
                  </text>
                )}
              </g>
            );
          })}

          {/* Nodes */}
          {data.nodes.map((node) => {
            const pos = positions.get(node.id);
            if (!pos) return null;

            const isHovered = hoveredNode === node.id;
            const isConnected = hoveredNode && connectedToHovered.has(node.id);
            const isDimmed = hoveredNode && !isHovered && !isConnected;
            const color = TYPE_COLORS[node.type] || "#666";
            const radius = node.type === "plant" ? 24 : node.type === "practice" ? 16 : 10;

            return (
              <g
                key={node.id}
                transform={`translate(${pos.x}, ${pos.y})`}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                className="cursor-pointer"
                style={{ opacity: isDimmed ? 0.2 : 1, transition: "opacity 0.3s" }}
              >
                {/* Glow for hovered */}
                {isHovered && (
                  <circle r={radius + 8} fill={color} opacity={0.15}>
                    <animate attributeName="r" values={`${radius + 4};${radius + 12};${radius + 4}`} dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.2;0.05;0.2" dur="2s" repeatCount="indefinite" />
                  </circle>
                )}

                {/* Node circle */}
                <circle
                  r={radius}
                  fill={isHovered ? color : "var(--bone)"}
                  stroke={color}
                  strokeWidth={isHovered ? 3 : 2}
                />

                {/* Emoji */}
                <text
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize={node.type === "plant" ? 18 : 10}
                  className="pointer-events-none select-none"
                >
                  {node.emoji}
                </text>

                {/* Label */}
                <text
                  y={radius + 14}
                  textAnchor="middle"
                  className="pointer-events-none select-none"
                  style={{
                    fontSize: node.type === "plant" ? "12px" : "9px",
                    fontWeight: node.type === "plant" ? 700 : 400,
                    fill: isHovered ? color : "var(--ink)",
                  }}
                >
                  {node.label.length > 16 ? node.label.slice(0, 14) + "…" : node.label}
                </text>

                {/* Tooltip on hover */}
                {isHovered && (
                  <g transform={`translate(${radius + 8}, -${radius + 8})`}>
                    <rect
                      x={0}
                      y={-20}
                      width={140}
                      height={36}
                      rx={6}
                      fill="var(--bone)"
                      stroke={color}
                      strokeWidth={1}
                      filter="drop-shadow(0 4px 12px rgba(0,0,0,0.15))"
                    />
                    <text x={70} y={-6} textAnchor="middle" fontSize="10" fontWeight={600} fill={color}>
                      {node.label}
                    </text>
                    <text x={70} y={8} textAnchor="middle" fontSize="9" fill="var(--ink-soft)">
                      {node.type}
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </svg>
      </motion.div>
    </div>
  );
}
