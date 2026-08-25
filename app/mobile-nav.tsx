"use client";

import { useState } from "react";

const ITEMS = [
  { num: "01.", label: "work", href: "#work" },
  { num: "02.", label: "projects", href: "#projects" },
  { num: "03.", label: "about", href: "#about" },
  { num: "04.", label: "contact", href: "#contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-slate-600 dark:border-slate-800 dark:text-slate-400"
      >
        {open ? (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        )}
      </button>
      {open && (
        <div className="absolute inset-x-0 top-16 border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
          <div className="mx-auto max-w-4xl px-6 py-4">
            {ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-3 font-mono text-sm text-slate-700 dark:text-slate-300"
              >
                <span className="text-emerald-600 dark:text-emerald-400">{item.num}</span>{" "}
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
