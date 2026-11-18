"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import MaterialIcon from "./MaterialIcon";

type Variant = "overlay" | "solid";

export default function GardenNav({ variant = "solid" }: { variant?: Variant }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isGlass = variant === "overlay" && !scrolled;

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: isGlass ? "transparent" : "rgba(246,239,224,0.9)",
        backdropFilter: isGlass ? "blur(0)" : "blur(20px) saturate(140%)",
        WebkitBackdropFilter: isGlass ? "blur(0)" : "blur(20px) saturate(140%)",
        borderBottom: isGlass ? "1px solid transparent" : "1px solid rgba(26,45,31,0.08)",
      }}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 rounded-2xl bg-[color:var(--urucum)] flex items-center justify-center transition-all duration-300 group-hover:rounded-[32px] group-hover:rotate-6">
            <MaterialIcon name="eco" filled className="text-[color:var(--bone)]" style={{ fontSize: 22 }} />
          </div>
          <div className="leading-none">
            <div className="font-display text-xl tracking-brand text-[color:var(--ink)]">Pharmakon</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-[color:var(--ink-soft)]">The Living Archive</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <NavLink href="/countries" label="Keepers" icon="public" />
          <NavLink href="/explore" label="Archive" icon="auto_stories" />
          <NavLink href="/#manifesto" label="Manifesto" icon="forest" />
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <Link href="/explore" className="m3-filled" style={{ padding: "0.8rem 1.4rem", fontSize: "0.85rem" }}>
              <MaterialIcon name="travel_explore" style={{ fontSize: 18 }} />
              Enter the Atlas
            </Link>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="m3-ghost"
              onClick={() => setOpen(v => !v)}
              aria-label="Menu"
            >
              <MaterialIcon name={open ? "close" : "menu"} style={{ fontSize: 26 }} />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-[color:var(--ink)]/8 bg-[color:var(--bone)]/95 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-1">
            <MobileLink href="/countries" icon="public" label="Keepers" onClick={() => setOpen(false)} />
            <MobileLink href="/explore" icon="auto_stories" label="Archive" onClick={() => setOpen(false)} />
            <MobileLink href="/#manifesto" icon="forest" label="Manifesto" onClick={() => setOpen(false)} />
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, label, icon }: { href: string; label: string; icon: string }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-[color:var(--ink-soft)] hover:text-[color:var(--ink)] hover:bg-[color:var(--ink)]/6 transition-colors"
    >
      <MaterialIcon name={icon} style={{ fontSize: 18 }} />
      {label}
    </Link>
  );
}

function MobileLink({ href, icon, label, onClick }: { href: string; icon: string; label: string; onClick: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center gap-3 rounded-2xl px-4 py-3 text-base font-medium text-[color:var(--ink)] hover:bg-[color:var(--ink)]/6"
    >
      <MaterialIcon name={icon} style={{ fontSize: 22 }} />
      {label}
    </Link>
  );
}
