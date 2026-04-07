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
  Cpu, // Tambahkan Cpu icon
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
            <h1 className="font-condensed text-4xl font-bold uppercase tracking-wide text-white leading-none">
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
          {/* --- 01. GAME CONCEPT --- */}
          {isVisible("core") && (
  <section className="animate-in fade-in slide-in-from-bottom-2 duration-400 space-y-6">
    <GDDSectionHeader icon="Cpu" title="05. Technical Architecture" />
    
    <div className="grid md:grid-cols-1 gap-6">
      
      {/* 1. CHARACTER CONTROLLER & INTERACTION */}
      <GDDCard label="System: Motion_Core_v2">
        <div className="grid md:grid-cols-2 gap-8 p-2">
          <div className="space-y-4">
            <div>
              <h4 className="font-condensed font-bold text-white uppercase text-lg tracking-tight italic">FPS Navigation & Feedback</h4>
              <p className="text-xs text-ink-3 leading-relaxed mt-1 italic border-l-2 border-lime pl-3">
                "Movement feel dioptimasi untuk eksplorasi rusun vertikal dengan feedback visual yang dinamis."
              </p>
            </div>
            
            <div className="space-y-2">
              <p className="text-[10px] font-mono text-lime/50 uppercase tracking-widest">// Sub-Systems & VFX</p>
              <ul className="text-[11px] space-y-1.5 text-ink-2">
                <li className="flex justify-between border-b border-bdr/20 pb-1">
                  <span>Sprint Head-Bob (Cam + Viewmodel)</span>
                  <span className="text-lime">Active</span>
                </li>
                <li className="flex justify-between border-b border-bdr/20 pb-1">
                  <span>Interact System [E] (Raycast-based)</span>
                  <span className="text-lime">Active</span>
                </li>
                <li className="flex justify-between border-b border-bdr/20 pb-1">
                  <span>Rigidbody Collision Detection</span>
                  <span className="text-lime">Active</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-surface-2/30 p-4 rounded-sm border border-bdr/40">
            <h5 className="text-[10px] font-mono text-ink-3 uppercase mb-3">// Control Schema</h5>
            <table className="w-full text-[10px] font-mono">
              <thead>
                <tr className="text-lime/70 text-left border-b border-bdr/50">
                  <th className="pb-2">Input</th>
                  <th className="pb-2">Action</th>
                </tr>
              </thead>
              <tbody className="text-ink-2">
                <tr><td className="py-1.5 font-bold text-white text-[11px] uppercase tracking-tighter">W, A, S, D</td><td>Standard Movement</td></tr>
                <tr><td className="py-1.5 font-bold text-white text-[11px] uppercase tracking-tighter">Shift</td><td>Sprint + Procedural Head-Bob</td></tr>
                <tr><td className="py-1.5 font-bold text-white text-[11px] uppercase tracking-tighter">Space</td><td>Jump / Vault Mechanics</td></tr>
                <tr><td className="py-1.5 font-bold text-white text-[11px] uppercase tracking-tighter">E</td><td>Object Interaction</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </GDDCard>

      {/* 2. INTEGRATED INVENTORY & HOTBAR SYSTEM */}
      <GDDCard label="System: Inv_Hotbar_Bridge">
        <div className="grid md:grid-cols-2 gap-8 p-2">
          <div className="space-y-4">
            <h4 className="font-condensed font-bold text-white uppercase text-sm">Flexible Slot Management</h4>
            <p className="text-xs text-ink-3">
              Sistem UI yang mendukung manipulasi item secara intuitif antara penyimpanan utama dan akses cepat.
            </p>
            <div className="grid grid-cols-2 gap-2 text-[10px] font-mono uppercase text-ink-2">
              <div className="p-2 bg-surface-2/50 border border-bdr/30 rounded flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-lime"></div> Drag & Drop
              </div>
              <div className="p-2 bg-surface-2/50 border border-bdr/30 rounded flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-lime"></div> Right-Click Assign
              </div>
              <div className="p-2 bg-surface-2/50 border border-bdr/30 rounded flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-lime"></div> Mouse Wheel Nav
              </div>
              <div className="p-2 bg-surface-2/50 border border-bdr/30 rounded flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-lime"></div> Number [1-5] Nav
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center gap-3">
             <div className="bg-black/40 p-3 rounded font-mono text-[9px] text-lime/80 border border-bdr/30">
               <p className="text-ink-4 italic">// Logic Preview</p>
               <p>void OnRightClick(Slot slot) {'{'}</p>
               <p className="pl-4 text-ink-2">if (slot.isHotbar) QuickMoveToInventory(slot);</p>
               <p className="pl-4 text-ink-2">else QuickMoveToHotbar(slot);</p>
               <p>{'}'}</p>
             </div>
             <p className="text-[10px] text-ink-4 italic leading-relaxed uppercase tracking-wider">
               State: <span className="text-lime">Bi-directional mapping stable</span>
             </p>
          </div>
        </div>
      </GDDCard>

      {/* 3. CRAFTING INTERFACE */}
      <GDDCard label="System: Crafting_Core">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-condensed font-bold text-white uppercase text-sm">On-Demand Fabrication [C]</h4>
            <span className="text-[9px] font-mono text-lime bg-lime/10 px-2 py-0.5 border border-lime/30">RECIPE_AUTO_SCANNER: ON</span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <p className="text-xs text-ink-3 leading-relaxed">
              Membuka menu crafting secara instan. Sistem melakukan <span className="text-lime">auto-detection</span> terhadap material di seluruh slot inventory untuk menentukan kelayakan pembuatan item secara real-time.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3 bg-surface-2/40 p-2 border-l-2 border-amber-500">
                <span className="text-[9px] font-mono text-amber-500 uppercase">Input</span>
                <span className="text-[11px] text-ink-2 italic">Press [C] to Overlay Crafting List</span>
              </div>
              <div className="flex items-center gap-3 bg-surface-2/40 p-2 border-l-2 border-lime">
                <span className="text-[9px] font-mono text-lime uppercase">Check</span>
                <span className="text-[11px] text-ink-2 italic">Validation: (Required &lt;= Available)</span>
              </div>
            </div>
          </div>
        </div>
      </GDDCard>
      
    </div>
  </section>
)}

          {/* --- 05. TECHNICAL SYSTEMS (Integrasi Baru) --- */}
          {isVisible("core") && (
            <section className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <GDDSectionHeader icon="Cpu" title="05. Technical Systems" />
              <div className="grid md:grid-cols-2 gap-4">
                <GDDCard label="Character Controller">
                  <div className="space-y-3">
                    <h4 className="font-condensed font-bold text-white uppercase text-sm">Physics-Based Movement</h4>
                    <p className="text-xs text-ink-2 leading-relaxed">
                      Implementasi menggunakan <span className="text-lime italic">Unity 6 Rigidbody</span>. 
                      Mendukung akselerasi halus, ground detection kustom, dan traversal vertikal.
                    </p>
                    <div className="bg-surface-2/50 p-2 rounded border border-bdr/30 font-mono text-[10px] text-lime/70">
                      // Features: Look Smoothing, Step Offset, Air Control
                    </div>
                  </div>
                </GDDCard>

                <GDDCard label="Inventory & Crafting">
                  <div className="space-y-3">
                    <h4 className="font-condensed font-bold text-white uppercase text-sm">Data-Driven Logic</h4>
                    <p className="text-xs text-ink-2 leading-relaxed">
                      Sistem modular berbasis <span className="text-lime">ScriptableObjects</span>. 
                      Validasi resep real-time dan sinkronisasi Hotbar (Keybind 1-5).
                    </p>
                    <ul className="text-[10px] font-mono text-ink-3 grid grid-cols-2 gap-1">
                      <li className="flex items-center gap-1"><Check size={10} className="text-lime"/> Auto-stack</li>
                      <li className="flex items-center gap-1"><Check size={10} className="text-lime"/> Resource Cost</li>
                    </ul>
                  </div>
                </GDDCard>
              </div>
            </section>
          )}

          {/* --- 02. TRAVERSAL MECHANICS --- */}
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
                        {i === 0 && "Climbing tali, rappelling, dan jump antar balkon."}
                        {i === 1 && "Aktivasi lift via panel listrik / crafting."}
                        {i === 2 && "Rooftop & balkon sebagai titik micro-garden."}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </section>
          )}

          {/* --- 03. ENVIRONMENT & STORY --- */}
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
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          )}

          <GDDSectionHeader icon="CirclePile" title="04. Architecture Map" />
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