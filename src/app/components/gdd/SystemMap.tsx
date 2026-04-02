"use client";

import React from "react";

// --- DATA DEFINITIONS ---
type Category =
  | "survival"
  | "traversal"
  | "crafting"
  | "story"
  | "level"
  | "progression"
  | "hazards";

const CAT_STYLES: Record<Category, string> = {
  survival: "border-[#6c54d3] text-[#ccbdfc] bg-[#1a162e]",
  traversal: "border-[#146b5a] text-[#86e6d1] bg-[#0d1f1b]",
  crafting: "border-[#966b0a] text-[#fcd88d] bg-[#241d0a]",
  story: "border-[#853c25] text-[#fcad92] bg-[#24120a]",
  level: "border-[#0a5896] text-[#8dcafc] bg-[#0a1a24]",
  progression: "border-[#3c8514] text-[#adfc92] bg-[#0f1f0a]",
  hazards: "border-[#4a4f4d] text-[#aeb5b3] bg-[#1a1c1b]",
};

const SYSTEM_NODES = [
  {
    id: "core",
    title: "Core survival loop",
    sub: "HP · Hunger · Thirst",
    cat: "survival",
    x: 50,
    y: 10,
    wide: true,
  },
  {
    id: "traversal",
    title: "Traversal",
    sub: "Vertical movement",
    cat: "traversal",
    x: 20,
    y: 32,
    wide: true,
  },
  {
    id: "crafting",
    title: "Crafting",
    sub: "Resources & tools",
    cat: "crafting",
    x: 50,
    y: 32,
    wide: true,
  },
  {
    id: "story_del",
    title: "Story delivery",
    sub: "Lore & narrative",
    cat: "story",
    x: 80,
    y: 32,
    wide: true,
  },
  {
    id: "v_link",
    title: "Vertical link",
    sub: "",
    cat: "traversal",
    x: 15,
    y: 56,
    wide: false,
  },
  {
    id: "mechanical",
    title: "Mechanical",
    sub: "",
    cat: "traversal",
    x: 35,
    y: 56,
    wide: false,
  },
  {
    id: "gather",
    title: "Resource gathering",
    cat: "crafting",
    x: 50,
    y: 56,
    wide: false,
  },
  {
    id: "item",
    title: "Item creation",
    cat: "crafting",
    x: 70,
    y: 56,
    wide: false,
  },
  {
    id: "env_story",
    title: "Env. storytelling",
    cat: "story",
    x: 85,
    y: 56,
    wide: false,
  },
  {
    id: "l_design",
    title: "Level design",
    sub: "Modular floors & zones",
    cat: "level",
    x: 23,
    y: 80,
    wide: true,
  },
  {
    id: "progress",
    title: "Progression",
    sub: "Floor-by-floor escape",
    cat: "progression",
    x: 50,
    y: 80,
    wide: true,
  },
  {
    id: "hazards",
    title: "Hazards & threats",
    sub: "Environmental danger",
    cat: "hazards",
    x: 77,
    y: 80,
    wide: true,
  },
];

const CONNECTIONS = [
  ["core", "traversal"],
  ["core", "crafting"],
  ["core", "story_del"],
  ["traversal", "v_link"],
  ["traversal", "mechanical"],
  ["crafting", "gather"],
  ["crafting", "item"],
  ["story_del", "env_story"],
  ["v_link", "l_design"],
  ["mechanical", "progress"],
  ["gather", "progress"],
  ["env_story", "hazards"],
];

export default function SystemMap() {
  const getNode = (id: string) => SYSTEM_NODES.find((n) => n.id === id);

  return (
    <div className="w-full select-none font-mono">
      {/* Container Diagram dengan Aspect Ratio Tetap */}
      <div className="relative aspect-[16/10] w-full max-w-5xl mx-auto border border-[#252825] bg-[#0e0f0e]/50 overflow-hidden">
        {/* SVG Lines - Layer paling bawah */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {CONNECTIONS.map(([src, dst], i) => {
            const s = getNode(src);
            const d = getNode(dst);
            if (!s || !d) return null;
            return (
              <line
                key={i}
                x1={s.x}
                y1={s.y}
                x2={d.x}
                y2={d.y}
                stroke="#252825"
                strokeWidth="0.15"
              />
            );
          })}
        </svg>

        {/* Nodes - Layer atas */}
        {SYSTEM_NODES.map((node) => (
          <div
            key={node.id}
            className={`absolute -translate-x-1/2 -translate-y-1/2 border flex flex-col items-center justify-center text-center p-2 transition-colors
              ${CAT_STYLES[node.cat as Category]}
              ${node.wide ? "w-[180px] h-[60px]" : "w-[140px] h-[44px]"}
            `}
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            <span className="text-[10px] font-bold uppercase tracking-wider leading-none truncate w-full px-1">
              {node.title}
            </span>
            {node.sub && (
              <span className="text-[8px] opacity-60 mt-1 uppercase tracking-tighter truncate w-full px-1">
                {node.sub}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Legend & Footer */}
      <div className="mt-8 flex flex-col items-center gap-6">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-[9px] text-ink-4 uppercase tracking-[0.2em]">
          {(Object.keys(CAT_STYLES) as Category[]).map((cat) => (
            <div key={cat} className="flex items-center gap-2">
              <div className={`w-4 h-4 border ${CAT_STYLES[cat]}`} />
              <span className="text-white">{cat}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
