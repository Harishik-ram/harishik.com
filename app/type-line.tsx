"use client";

import { useEffect, useState } from "react";

const TEXT = "harishik@portfolio:~$ whoami";

export default function TypeLine() {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (n < TEXT.length) {
      const t = setTimeout(() => setN(n + 1), 55);
      return () => clearTimeout(t);
    }
  }, [n]);

  return (
    <p className="font-mono text-sm text-slate-500 dark:text-slate-400">
      <span className="text-emerald-600 dark:text-emerald-400">
        {TEXT.slice(0, Math.min(n, 20))}
      </span>
      <span>{TEXT.slice(20, n)}</span>
      <span className="animate-blink text-emerald-600 dark:text-emerald-400">
        ▊
      </span>
    </p>
  );
}
