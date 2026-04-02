"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { CRAFTING_DATA } from "@/constants/item";
import { ItemCard } from "../components/ItemCard";
import { ItemModal } from "../components/ItemModal";
import { ItemIcon } from "../components/ItemIcon";
import { Category } from "@/types/database";

export default function Home() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState<Category | "All">("All");
  const [selectedItemName, setSelectedItemName] = useState<string | null>(null);

  const categories: (Category | "All")[] = [
    "All",
    "Raw Material",
    "Special Loot",
    "Processed",
    "Tool",
    "Weapon",
    "Survival",
    "Rooftop",
    "Building",
  ];

  const filteredItems = useMemo(() => {
    return CRAFTING_DATA.filter((item) => {
      const matchSearch = item.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchCat = activeFilter === "All" || item.cat === activeFilter;
      return matchSearch && matchCat;
    });
  }, [search, activeFilter]);

  const selectedItem = useMemo(
    () => CRAFTING_DATA.find((i) => i.name === selectedItemName),
    [selectedItemName],
  );

  const usedIn = useMemo(
    () =>
      CRAFTING_DATA.filter(
        (i) =>
          i.recipe.some((r) => r.i === selectedItemName) ||
          i.tools.some((t) => t.includes(selectedItemName || "")),
      ),
    [selectedItemName],
  );

  return (
    <main className="min-h-screen bg-surface text-ink p-8">
      <div className="max-w-5xl mx-auto">
        <header className="flex flex-wrap items-end justify-between gap-4 mb-10 pb-5 border-b border-bdr-2">
          <div>
            <p className="font-mono text-[10px] text-lime tracking-[.18em] uppercase mb-1">
              // crafting_database v1.0
            </p>
            <h1 className="font-condensed text-5xl font-bold uppercase tracking-wide text-white leading-none">
              THE Last<span className="text-lime">ANCHOR</span>
            </h1>
          </div>
          <div className="font-mono text-[11px] text-ink-3 text-right">
            SURVIVAL GAME · ROOFTOP
            <br />
            {CRAFTING_DATA.length} <span className="text-ink-4">ITEMS</span>
          </div>
        </header>

        <div className="relative mb-5">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-3" />
          <input
            type="text"
            placeholder="Search items, materials, or categories..."
            className="w-full bg-surface-2 border border-bdr rounded pl-9 pr-4 py-2.5 font-mono text-[13px] outline-none focus:border-lime-dim transition-colors"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap gap-1.5 mb-9">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`flex items-center gap-1.5 font-condensed text-[13px] font-semibold tracking-wider uppercase px-3 py-1.5 rounded border transition-all ${activeFilter === cat ? "bg-lime text-surface border-lime" : "bg-transparent text-ink-2 border-bdr-2 hover:border-lime-dim hover:text-ink"}`}
            >
              <ItemIcon name={cat} className="w-3.5 h-3.5" /> {cat}
            </button>
          ))}
        </div>

        <div className="space-y-10">
          {categories.slice(1).map((cat) => {
            const itemsInCat = filteredItems.filter((i) => i.cat === cat);
            if (itemsInCat.length === 0) return null;
            return (
              <section key={cat}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center gap-2 text-ink-2">
                    <ItemIcon name={cat as string} className="w-3.5 h-3.5" />
                    <span className="font-condensed text-[11px] font-semibold tracking-[.18em] uppercase">
                      {cat}
                    </span>
                  </div>
                  <div className="flex-1 h-px bg-bdr"></div>
                  <span className="font-mono text-[10px] text-ink-4">
                    {itemsInCat.length}
                  </span>
                </div>
                <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-2">
                  {itemsInCat.map((item) => (
                    <ItemCard
                      key={item.name}
                      item={item}
                      onClick={setSelectedItemName}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>

      {selectedItem && (
        <ItemModal
          item={selectedItem}
          usedIn={usedIn}
          onClose={() => setSelectedItemName(null)}
          onNavigate={setSelectedItemName}
        />
      )}
    </main>
  );
}
