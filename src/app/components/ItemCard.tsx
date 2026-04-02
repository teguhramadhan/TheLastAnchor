import { GameItem } from "@/types/database";
import { ItemIcon } from "./ItemIcon";
import {
  CornerDownRight,
  Settings2,
  PackagePlus,
  ScanSearch,
} from "lucide-react";

const CATEGORY_STYLES: Record<string, string> = {
  "Raw Material": "before:bg-green-700 hover:before:bg-green-500",
  "Special Loot": "before:bg-amber-700 hover:before:bg-amber-500",
  Processed: "before:bg-teal-700 hover:before:bg-teal-400",
  Tool: "before:bg-purple-700 hover:before:bg-purple-400",
  Weapon: "before:bg-red-700 hover:before:bg-red-500",
  Survival: "before:bg-emerald-700 hover:before:bg-emerald-400",
  Rooftop: "before:bg-yellow-700 hover:before:bg-yellow-500",
  Building: "before:bg-slate-700 hover:before:bg-slate-400",
};

export const ItemCard = ({
  item,
  onClick,
}: {
  item: GameItem;
  onClick: (n: string) => void;
}) => {
  const accentClass = CATEGORY_STYLES[item.cat] || "before:bg-bdr-3";

  return (
    <div
      onClick={() => onClick(item.name)}
      className={`group relative bg-surface-2 border border-bdr rounded cursor-pointer pl-4 pr-3 pt-3 pb-2.5 overflow-hidden transition-all hover:-translate-y-0.5 ${accentClass} before:content-[''] before:absolute before:top-0 before:left-0 before:w-[2px] before:h-full before:transition-colors`}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <span className="font-condensed text-[15px] font-bold uppercase tracking-wide text-white leading-tight">
          {item.name}
        </span>
        <ItemIcon
          name={item.name}
          className="w-4 h-4 text-ink-3 group-hover:text-ink transition-colors"
        />
      </div>

      {item.recipe.length > 0 && (
        <div className="flex flex-col gap-1 mb-2">
          {item.recipe.map((r) => (
            <div
              key={r.i}
              className="flex items-center gap-1.5 font-mono text-[11px] text-ink-2"
            >
              <CornerDownRight className="w-3 h-3 text-ink-4 flex-shrink-0" />
              <span className="truncate">{r.i}</span>
              {r.q > 1 && (
                <span className="text-amber-bright font-bold ml-auto">
                  ×{r.q}
                </span>
              )}
            </div>
          ))}
        </div>
      )}

      {(item.tools.length > 0 ||
        item.yield ||
        (item.loot && !item.recipe.length)) && (
        <div className="flex flex-wrap gap-1 pt-2 border-t border-bdr">
          {item.tools.map((t) => (
            <span
              key={t}
              className="flex items-center gap-1 font-mono text-[10px] text-amber-craft bg-amber-950/30 border border-amber-900/40 rounded px-1.5 py-0.5"
            >
              <Settings2 className="w-2.5 h-2.5" /> {t}
            </span>
          ))}
          {item.yield && (
            <span className="flex items-center gap-1 font-mono text-[10px] text-lime bg-green-950/40 border border-green-900/40 rounded px-1.5 py-0.5">
              <PackagePlus className="w-2.5 h-2.5" /> {item.yield}
            </span>
          )}
          {item.loot && !item.recipe.length && (
            <span className="flex items-center gap-1 font-mono text-[10px] text-ink-3 bg-surface-4 border border-bdr rounded px-1.5 py-0.5">
              <ScanSearch className="w-2.5 h-2.5" /> loot
            </span>
          )}
        </div>
      )}
    </div>
  );
};
