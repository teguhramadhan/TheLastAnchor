"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGrid, FileText, Zap, Terminal } from "lucide-react";

export default function GlobalNav() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Crafting Guide", href: "/craftingguide", icon: LayoutGrid },
    { name: "Game Design Doc", href: "/gdd", icon: FileText },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-surface/80 backdrop-blur-md border-b border-bdr-2 font-mono transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-12">
        <div className="flex items-center justify-between h-14">
          {/* NAV LINKS: Scrollable Horizontal di Mobile */}
          <div className="flex items-center gap-1 h-full overflow-x-auto no-scrollbar scroll-smooth flex-1 justify-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    flex items-center gap-2 px-3 sm:px-4 h-14 font-condensed text-[12px] sm:text-[13px] uppercase tracking-wider transition-all relative whitespace-nowrap
                    ${
                      isActive
                        ? "text-lime bg-surface-2 border-x border-bdr"
                        : "text-ink-3 hover:text-ink hover:bg-surface-3"
                    }
                  `}
                >
                  <Icon
                    size={14}
                    className={isActive ? "text-lime" : "text-ink-4"}
                  />
                  <span>{link.name}</span>

                  {/* Indicator Line */}
                  {isActive && (
                    <div className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-lime shadow-[0_-2px_10px_rgba(144,184,58,0.5)]" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
