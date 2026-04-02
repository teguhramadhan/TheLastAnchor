import { GameItem } from "@/types/database";

export const CRAFTING_DATA: GameItem[] = [
  {
    name: "Scrap Wood",
    cat: "Raw Material",
    recipe: [],
    tools: [],
    loot: true,
  },
  {
    name: "Scrap Metal",
    cat: "Raw Material",
    recipe: [],
    tools: [],
    loot: true,
  },
  { name: "Cloth", cat: "Raw Material", recipe: [], tools: [], loot: true },
  { name: "Fiber", cat: "Raw Material", recipe: [], tools: [], loot: true },
  {
    name: "Plastic Waste",
    cat: "Raw Material",
    recipe: [],
    tools: [],
    loot: true,
  },
  {
    name: "Chemical Liquid",
    cat: "Raw Material",
    recipe: [],
    tools: [],
    loot: true,
  },
  {
    name: "Dirty Water",
    cat: "Raw Material",
    recipe: [],
    tools: [],
    loot: true,
  },
  {
    name: "Glass Bottle",
    cat: "Special Loot",
    recipe: [],
    tools: [],
    loot: true,
  },
  { name: "Toolkit", cat: "Special Loot", recipe: [], tools: [], loot: true },
  { name: "Lighter", cat: "Special Loot", recipe: [], tools: [], loot: true },
  {
    name: "Rope Bundle",
    cat: "Special Loot",
    recipe: [],
    tools: [],
    loot: true,
  },
  {
    name: "Plank",
    cat: "Processed",
    recipe: [{ i: "Scrap Wood", q: 2 }],
    tools: ["Hammer"],
  },
  {
    name: "Metal Plate",
    cat: "Processed",
    recipe: [{ i: "Scrap Metal", q: 3 }],
    tools: ["Hammer", "Workbench"],
  },
  {
    name: "Metal Rod",
    cat: "Processed",
    recipe: [{ i: "Scrap Metal", q: 2 }],
    tools: ["Hammer"],
  },
  {
    name: "Nail",
    cat: "Processed",
    recipe: [{ i: "Scrap Metal", q: 1 }],
    tools: ["Hammer"],
    yield: "×4",
  },
  {
    name: "Metal Hook",
    cat: "Processed",
    recipe: [{ i: "Scrap Metal", q: 2 }],
    tools: ["Hammer"],
  },
  {
    name: "Rope",
    cat: "Processed",
    recipe: [
      { i: "Fiber", q: 2 },
      { i: "Cloth", q: 1 },
    ],
    tools: [],
  },
  {
    name: "Fabric",
    cat: "Processed",
    recipe: [{ i: "Cloth", q: 2 }],
    tools: [],
  },
  {
    name: "Plastic Bottle",
    cat: "Processed",
    recipe: [{ i: "Plastic Waste", q: 2 }],
    tools: ["Workbench"],
  },
  {
    name: "Plastic Sheet",
    cat: "Processed",
    recipe: [{ i: "Plastic Waste", q: 3 }],
    tools: ["Workbench"],
  },
  {
    name: "Fuel",
    cat: "Processed",
    recipe: [
      { i: "Chemical Liquid", q: 1 },
      { i: "Cloth", q: 1 },
    ],
    tools: ["Campfire"],
  },
  {
    name: "Clean Water",
    cat: "Processed",
    recipe: [{ i: "Dirty Water", q: 1 }],
    tools: ["Campfire / Filter"],
  },
  {
    name: "Charcoal",
    cat: "Processed",
    recipe: [{ i: "Scrap Wood", q: 2 }],
    tools: ["Campfire"],
  },
  {
    name: "Axe",
    cat: "Tool",
    recipe: [
      { i: "Plank", q: 1 },
      { i: "Metal Plate", q: 1 },
      { i: "Rope", q: 1 },
    ],
    tools: [],
  },
  {
    name: "Crowbar",
    cat: "Tool",
    recipe: [{ i: "Metal Rod", q: 1 }],
    tools: [],
  },
  {
    name: "Knife",
    cat: "Tool",
    recipe: [
      { i: "Metal Plate", q: 1 },
      { i: "Cloth", q: 1 },
    ],
    tools: [],
  },
  {
    name: "Hammer",
    cat: "Tool",
    recipe: [
      { i: "Metal Plate", q: 1 },
      { i: "Plank", q: 1 },
    ],
    tools: [],
  },
  {
    name: "Wooden Spear",
    cat: "Weapon",
    recipe: [
      { i: "Plank", q: 1 },
      { i: "Metal Plate", q: 1 },
      { i: "Rope", q: 1 },
    ],
    tools: [],
  },
  {
    name: "Spiked Bat",
    cat: "Weapon",
    recipe: [
      { i: "Plank", q: 1 },
      { i: "Nail", q: 1 },
    ],
    tools: [],
  },
  {
    name: "Molotov",
    cat: "Weapon",
    recipe: [
      { i: "Glass Bottle", q: 1 },
      { i: "Fuel", q: 1 },
      { i: "Cloth", q: 1 },
    ],
    tools: [],
  },
  {
    name: "Bandage",
    cat: "Survival",
    recipe: [{ i: "Fabric", q: 1 }],
    tools: [],
  },
  {
    name: "Water Bottle",
    cat: "Survival",
    recipe: [
      { i: "Plastic Bottle", q: 1 },
      { i: "Clean Water", q: 1 },
    ],
    tools: [],
  },
  {
    name: "Filter",
    cat: "Survival",
    recipe: [
      { i: "Charcoal", q: 1 },
      { i: "Fabric", q: 1 },
      { i: "Plastic Sheet", q: 1 },
    ],
    tools: [],
  },
  {
    name: "Campfire",
    cat: "Rooftop",
    recipe: [
      { i: "Scrap Wood", q: 1 },
      { i: "Cloth", q: 1 },
      { i: "Fuel", q: 1 },
    ],
    tools: [],
  },
  {
    name: "Emergency Stove",
    cat: "Rooftop",
    recipe: [
      { i: "Metal Plate", q: 1 },
      { i: "Metal Rod", q: 1 },
      { i: "Fuel", q: 1 },
    ],
    tools: [],
  },
  {
    name: "Water Collector",
    cat: "Rooftop",
    recipe: [
      { i: "Plastic Sheet", q: 1 },
      { i: "Rope", q: 1 },
      { i: "Plastic Bottle", q: 1 },
    ],
    tools: [],
  },
  {
    name: "Shelter (Tenda)",
    cat: "Rooftop",
    recipe: [
      { i: "Cloth", q: 1 },
      { i: "Rope", q: 1 },
      { i: "Scrap Wood", q: 1 },
    ],
    tools: [],
  },
  {
    name: "Torch",
    cat: "Rooftop",
    recipe: [
      { i: "Plank", q: 1 },
      { i: "Cloth", q: 1 },
      { i: "Fuel", q: 1 },
    ],
    tools: [],
  },
  {
    name: "Bedroll",
    cat: "Rooftop",
    recipe: [
      { i: "Cloth", q: 1 },
      { i: "Fiber", q: 1 },
    ],
    tools: [],
  },
  {
    name: "Wooden Wall",
    cat: "Building",
    recipe: [
      { i: "Plank", q: 1 },
      { i: "Nail", q: 1 },
    ],
    tools: [],
  },
  {
    name: "Reinforced Wall",
    cat: "Building",
    recipe: [
      { i: "Plank", q: 1 },
      { i: "Metal Plate", q: 1 },
      { i: "Nail", q: 1 },
    ],
    tools: [],
  },
  {
    name: "Windowed Wall",
    cat: "Building",
    recipe: [
      { i: "Plank", q: 1 },
      { i: "Plastic Sheet", q: 1 },
    ],
    tools: [],
  },
  { name: "Floor", cat: "Building", recipe: [{ i: "Plank", q: 2 }], tools: [] },
  {
    name: "Door",
    cat: "Building",
    recipe: [
      { i: "Plank", q: 1 },
      { i: "Nail", q: 1 },
    ],
    tools: [],
  },
  {
    name: "Secure Door",
    cat: "Building",
    recipe: [
      { i: "Plank", q: 1 },
      { i: "Metal Plate", q: 1 },
      { i: "Nail", q: 1 },
    ],
    tools: [],
  },
  {
    name: "Ladder",
    cat: "Building",
    recipe: [
      { i: "Plank", q: 1 },
      { i: "Rope", q: 1 },
    ],
    tools: [],
  },
  {
    name: "Rope Anchor",
    cat: "Building",
    recipe: [
      { i: "Rope", q: 1 },
      { i: "Metal Hook", q: 1 },
    ],
    tools: [],
  },
  {
    name: "Barricade",
    cat: "Building",
    recipe: [
      { i: "Plank", q: 1 },
      { i: "Scrap Metal", q: 1 },
    ],
    tools: [],
  },
  {
    name: "Storage Box",
    cat: "Building",
    recipe: [{ i: "Plank", q: 2 }],
    tools: [],
  },
  {
    name: "Roof Cover",
    cat: "Building",
    recipe: [
      { i: "Plastic Sheet", q: 1 },
      { i: "Rope", q: 1 },
    ],
    tools: [],
  },
  {
    name: "Watch Platform",
    cat: "Building",
    recipe: [
      { i: "Plank", q: 1 },
      { i: "Rope", q: 1 },
    ],
    tools: [],
  },
  {
    name: "Spike Trap",
    cat: "Building",
    recipe: [
      { i: "Plank", q: 1 },
      { i: "Nail", q: 1 },
    ],
    tools: [],
  },
  {
    name: "Small Fence",
    cat: "Building",
    recipe: [{ i: "Plank", q: 1 }],
    tools: [],
  },
  {
    name: "Workbench",
    cat: "Building",
    recipe: [
      { i: "Plank", q: 1 },
      { i: "Metal Plate", q: 1 },
    ],
    tools: [],
  },
  {
    name: "Water Storage Tank",
    cat: "Building",
    recipe: [
      { i: "Plastic Sheet", q: 1 },
      { i: "Plastic Bottle", q: 1 },
    ],
    tools: [],
  },
  {
    name: "Fire Stand",
    cat: "Building",
    recipe: [{ i: "Metal Rod", q: 2 }],
    tools: [],
  },
];
