export type GDDCategory = "all" | "core" | "traversal" | "world";

export interface GDDSection {
  id: string;
  category: GDDCategory;
  title: string;
  icon: string;
  content: React.ReactNode;
}
