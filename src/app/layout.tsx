import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GlobalNav } from "./components/GlobalNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Last Anchor — Crafting Guide",
  description: "Official survival database for The Last Anchor",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="dark">
      <body className="bg-surface text-ink antialiased">
        <GlobalNav />

        {/* Tambahkan padding top (pt-14) agar konten tidak tertutup navbar */}
        <div className="pt-14">{children}</div>

        {/* Noise Overlay Global */}
        <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] bg-[url('/noise.svg')]" />
      </body>
    </html>
  );
}
