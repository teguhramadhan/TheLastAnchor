"use client";

import { useState } from "react";
import GlobalNav from "../components/GlobalNav";
import { GDDCard, GDDSectionHeader } from "../components/gdd/GDDCard";
import { GDDCategory } from "@/types/gdd";
import {
  Heart,
  Utensils,
  Droplet,
  Check,
  FileText,
  Mic,
  Unlock,
} from "lucide-react";
import SystemMap from "../components/gdd/SystemMap";

export default function GDDPage() {
  const [activeFilter, setActiveFilter] = useState<GDDCategory>("all");

  const isVisible = (cat: GDDCategory) =>
    activeFilter === "all" || activeFilter === cat;

  return (
    <main className="min-h-screen bg-surface text-ink p-8">
      <div className="max-w-5xl mx-auto">
        <header className="flex flex-wrap items-end justify-between gap-4 mb-10 pb-5 border-b border-bdr-2">
          <div>
            <p className="font-mono text-[10px] text-lime tracking-[.18em] uppercase mb-1">
              // internal_project_doc v0.1
            </p>
            <h1 className="font-condensed text-5xl font-bold uppercase tracking-wide text-white leading-none">
              THE LAST<span className="text-lime">ANCHOR</span>
            </h1>
          </div>
          <div className="font-mono text-[11px] text-ink-3 text-right leading-relaxed uppercase">
            Survival Verticality System
            <br />
            <span className="text-lime">Unity 6 Engine</span> · PC/Console
          </div>
        </header>

        <GlobalNav />

        <div className="space-y-12">
          {isVisible("core") && (
            <section className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <GDDSectionHeader icon="Target" title="01. Game Concept" />
              <div className="grid md:grid-cols-2 gap-4">
                <GDDCard label="Premis">
                  <p className="text-sm leading-relaxed text-ink-2">
                    Player terjebak di gedung modern tinggi setelah evakuasi
                    paksa. Mereka harus menavigasi gedung secara vertikal untuk
                    menemukan story snippet dan menyelamatkan diri.
                  </p>
                </GDDCard>
                <GDDCard label="Stats & Loop">
                  <div className="flex gap-4 mt-2">
                    <span className="flex items-center gap-1.5 text-xs font-mono text-red-400">
                      <Heart size={12} /> HP
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-mono text-amber-500">
                      <Utensils size={12} /> Hunger
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-mono text-blue-400">
                      <Droplet size={12} /> Thirst
                    </span>
                  </div>
                </GDDCard>
              </div>
            </section>
          )}

          {isVisible("traversal") && (
            <section className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <GDDSectionHeader
                icon="MoveVertical"
                title="02. Traversal Mechanics"
              />
              <div className="grid md:grid-cols-3 gap-3">
                {["Vertical Link", "Mechanical Fix", "Access Points"].map(
                  (title, i) => (
                    <div
                      key={title}
                      className="bg-surface-2 p-4 rounded border border-bdr/40"
                    >
                      <h3 className="text-white font-condensed font-bold uppercase text-sm mb-2">
                        {title}
                      </h3>
                      <p className="text-xs text-ink-3 italic">
                        {i === 0 &&
                          "Climbing tali, rappelling, dan jump antar balkon."}
                        {i === 1 &&
                          "Aktivasi lift via panel listrik / crafting."}
                        {i === 2 &&
                          "Rooftop & balkon sebagai titik micro-garden."}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </section>
          )}

          {isVisible("world") && (
            <section className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <GDDSectionHeader icon="Layers" title="03. Environment & Story" />
              <div className="bg-surface-2 p-6 rounded border border-bdr">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-mono text-[11px] text-lime mb-4 tracking-widest uppercase">
                      // Level Design
                    </h4>
                    <ul className="text-sm space-y-3 text-ink-2">
                      <li className="flex gap-3 items-start">
                        <Check size={14} className="text-lime mt-0.5" />{" "}
                        <span>Modular Building (3-5 Floors)</span>
                      </li>
                      <li className="flex gap-3 items-start">
                        <Check size={14} className="text-lime mt-0.5" />{" "}
                        <span>Office, Warehouse, Rooftop</span>
                      </li>
                      <li className="flex gap-3 items-start">
                        <Check size={14} className="text-lime mt-0.5" />{" "}
                        <span>Industrial Fog & Ruins</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-mono text-[11px] text-amber-bright mb-4 tracking-widest uppercase">
                      // Story Delivery
                    </h4>
                    <ul className="text-sm space-y-3 text-ink-2">
                      <li className="flex gap-3 items-start">
                        <FileText size={14} /> <span>Notes & Emails</span>
                      </li>
                      <li className="flex gap-3 items-start">
                        <Mic size={14} /> <span>Audio Logs</span>
                      </li>
                      <li className="flex gap-3 items-start">
                        <Unlock size={14} /> <span>Secret Floor Insights</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          )}

          <GDDSectionHeader icon="CirclePile" title="04. Architecture Map" />

          {/* Panggil komponen Arsitektur Sistem di sini */}
          <SystemMap />
        </div>

        <footer className="mt-20 pt-6 border-t border-bdr font-mono text-[10px] text-ink-4 flex justify-between uppercase tracking-widest">
          <div>Feasibility: Indie High-Polish</div>
          <div>Status: Brainstorming Phase</div>
        </footer>
      </div>
    </main>
  );
}
