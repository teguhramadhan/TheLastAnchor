import * as Icons from "lucide-react";

const ICON_MAP: Record<string, keyof typeof Icons> = {
  // Materials
  "Scrap Wood": "Logs",
  "Scrap Metal": "Cog",
  Cloth: "Shirt",
  Fiber: "Leaf",
  "Plastic Waste": "Trash2",
  "Chemical Liquid": "FlaskConical",
  "Dirty Water": "Droplets",
  "Glass Bottle": "GlassWater", // Diubah dari Wine agar lebih umum
  Toolkit: "Briefcase",
  Lighter: "Flame",
  "Rope Bundle": "Unlink",
  Plank: "RectangleHorizontal",
  "Metal Plate": "Square",
  "Metal Rod": "Minus",
  Nail: "Pin",
  "Metal Hook": "Anchor",
  Rope: "Link",
  Fabric: "Layers",
  "Plastic Bottle": "CupSoda", // BottleWater sering tidak ada di versi tertentu, CupSoda lebih aman
  "Plastic Sheet": "LayoutDashboard",
  Fuel: "Fuel",
  "Clean Water": "Droplet",
  Charcoal: "CircleDot",

  // Tools & Weapons
  Axe: "Axe",
  Crowbar: "Wrench",
  Knife: "Sword", // Knife seringkali tidak ada, Sword atau Pickaxe bisa jadi alternatif
  Hammer: "Hammer",
  "Wooden Spear": "Wand", // Representasi visual tongkat/tombak
  "Spiked Bat": "Club", // Baseball diubah ke Club (lebih cocok untuk survival)
  Molotov: "Flame",

  // Survival
  Bandage: "Bandage",
  "Water Bottle": "GlassWater",
  Filter: "Filter",
  Campfire: "FlameKindling",
  "Emergency Stove": "CircleGauge",
  "Water Collector": "CloudDrizzle",
  "Shelter (Tenda)": "Tent",
  Torch: "Lightbulb",
  Bedroll: "BedSingle",

  // Building
  "Wooden Wall": "Fence", // Wall2 tidak ada, diganti Fence atau BrickWall (jika ada)
  "Reinforced Wall": "Shield",
  "Windowed Wall": "AppWindow",
  Floor: "LayoutGrid",
  Door: "DoorOpen",
  "Secure Door": "Lock",
  Ladder: "Rows3", // Visual representasi tangga
  "Rope Anchor": "Anchor",
  Barricade: "TriangleAlert",
  "Storage Box": "Box",
  "Roof Cover": "Umbrella",
  "Watch Platform": "Eye",
  "Spike Trap": "Zap",
  "Small Fence": "Fence",
  Workbench: "Wrench", // Tool diubah ke Wrench
  "Water Storage Tank": "Database",
  "Fire Stand": "FlameKindling",

  // Categories
  "Raw Material": "Layers",
  "Special Loot": "Star",
  Processed: "Hammer",
  Tool: "Wrench",
  Weapon: "Swords",
  Survival: "HeartPulse",
  Rooftop: "Tent",
  Building: "Building2",
  All: "LayoutGrid",
};

export const ItemIcon = ({
  name,
  className = "w-4 h-4",
}: {
  name: string;
  className?: string;
}) => {
  const iconKey = ICON_MAP[name] || "Package";

  // Ambil komponen ikon, pastikan fallback ke Package jika tidak ditemukan
  const LucideIcon = (Icons as any)[iconKey] || Icons.Package;

  return <LucideIcon className={className} />;
};
