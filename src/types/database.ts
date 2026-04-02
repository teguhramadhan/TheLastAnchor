export type Category =
  | "Raw Material"
  | "Special Loot"
  | "Processed"
  | "Tool"
  | "Weapon"
  | "Survival"
  | "Rooftop"
  | "Building";

export interface RecipeItem {
  i: string; // Item Name
  q: number; // Quantity
}

export interface GameItem {
  name: string;
  cat: Category;
  recipe: RecipeItem[];
  tools: string[];
  loot?: boolean;
  yield?: string;
}
