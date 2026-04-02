import * as Icons from "lucide-react";

interface CardProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}

export const GDDCard = ({ label, children, className = "" }: CardProps) => (
  <div
    className={`bg-surface-2 p-5 rounded border border-bdr/50 hover:border-bdr transition-colors ${className}`}
  >
    <p className="font-mono text-[10px] text-ink-4 uppercase mb-2">
      // {label}
    </p>
    {children}
  </div>
);

interface SectionHeaderProps {
  icon: string;
  title: string;
}

export const GDDSectionHeader = ({ icon, title }: SectionHeaderProps) => {
  const LucideIcon = (Icons as any)[icon] || Icons.HelpCircle;
  return (
    <div className="flex items-center gap-3 mb-4">
      <LucideIcon className="w-5 h-5 text-lime" />
      <h2 className="font-condensed text-2xl font-bold uppercase text-white tracking-wide">
        {title}
      </h2>
    </div>
  );
};
