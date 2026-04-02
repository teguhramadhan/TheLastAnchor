import { GameItem, Category } from "@/types/database";
import { ItemIcon } from "./ItemIcon";
import {
  X,
  CornerDownRight,
  Settings2,
  PackagePlus,
  ScanSearch,
} from "lucide-react";

interface Props {
  item: GameItem;
  usedIn: GameItem[];
  onClose: () => void;
  onNavigate: (name: string) => void;
}

const CAT_PILL: Record<Category, string> = {
  "Raw Material": "bg-green-950/60 text-green-400 border-green-900",
  "Special Loot": "bg-amber-950/60 text-amber-bright border-amber-900",
  Processed: "bg-teal-950/60 text-teal-400 border-teal-900",
  Tool: "bg-purple-950/60 text-purple-300 border-purple-900",
  Weapon: "bg-red-950/60 text-red-400 border-red-900",
  Survival: "bg-emerald-950/60 text-emerald-400 border-emerald-900",
  Rooftop: "bg-yellow-950/60 text-yellow-400 border-yellow-900",
  Building: "bg-slate-900/60 text-slate-400 border-slate-700",
};

export const ItemModal = ({ item, usedIn, onClose, onNavigate }: Props) => {
  return (
    <div
      className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-6"
      onClick={onClose}
    >
      <div
        className="bg-surface-2 border border-bdr-2 rounded-lg p-7 w-full max-w-md max-h-[82vh] overflow-y-auto relative animate-in fade-in slide-in-from-bottom-2 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 border border-bdr text-ink-2 hover:border-red-600 hover:text-red-400 w-7 h-7 rounded flex items-center justify-center transition-colors"
        >
          <X size={14} />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="w-11 h-11 rounded-lg bg-surface-3 border border-bdr-2 flex items-center justify-center">
            <ItemIcon name={item.name} className="w-5 h-5 text-ink-2" />
          </div>
          <div>
            <h2 className="font-condensed text-2xl font-bold uppercase tracking-wide text-white leading-none mb-1">
              {item.name}
            </h2>
            <span
              className={`${CAT_PILL[item.cat]} border font-mono text-[10px] tracking-[.12em] uppercase px-2 py-0.5 rounded`}
            >
              {item.cat}
            </span>
          </div>
        </div>

        {item.loot && !item.recipe.length && (
          <div className="flex items-center gap-2 font-mono text-[11px] text-ink-3 bg-surface-3 border border-bdr rounded p-3 mb-4">
            <ScanSearch size={14} /> temukan dari loot — tidak bisa di-craft
          </div>
        )}

        {item.recipe.length > 0 && (
          <div className="mb-4">
            <p className="font-mono text-[10px] tracking-[.14em] uppercase text-ink-4 mb-2">
              // bahan
            </p>
            <div className="space-y-1.5">
              {item.recipe.map((r) => (
                <div
                  key={r.i}
                  className="flex items-center gap-2.5 bg-surface-3 border border-bdr rounded px-3 py-2 font-mono text-[12px] text-ink cursor-pointer hover:border-lime-dim"
                  onClick={() => onNavigate(r.i)}
                >
                  <ItemIcon name={r.i} className="w-4 h-4 text-ink-3" />
                  <span className="flex-1">{r.i}</span>
                  {r.q > 1 && (
                    <span className="text-amber-bright font-bold">×{r.q}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {item.tools.length > 0 && (
          <div className="mb-4">
            <p className="font-mono text-[10px] tracking-[.14em] uppercase text-ink-4 mb-2">
              // diperlukan
            </p>
            <div className="space-y-1.5">
              {item.tools.map((t) => (
                <div
                  key={t}
                  className="flex items-center gap-2.5 bg-amber-950/30 border border-amber-900/40 rounded px-3 py-2 font-mono text-[12px] text-amber-craft"
                >
                  <Settings2 size={16} /> {t}
                </div>
              ))}
            </div>
          </div>
        )}

        {usedIn.length > 0 && (
          <div>
            <p className="font-mono text-[10px] tracking-[.14em] uppercase text-ink-4 mb-2">
              // dipakai di
            </p>
            <div className="flex flex-wrap gap-1.5">
              {usedIn.map((u) => (
                <button
                  key={u.name}
                  onClick={() => onNavigate(u.name)}
                  className="flex items-center gap-1.5 font-mono text-[11px] text-ink-2 bg-surface-3 border border-bdr hover:border-lime-dim hover:text-lime rounded px-2.5 py-1"
                >
                  <ItemIcon name={u.name} className="w-3 h-3" /> {u.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
