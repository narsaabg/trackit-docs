
import React from 'react';

interface TerminalProps {
  code: string;
  className?: string;
}

export const Terminal: React.FC<TerminalProps> = ({ code, className = "" }) => {
  return (
    <div className={`overflow-hidden rounded-xl border border-zinc-800 bg-[#09090b] shadow-2xl ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-zinc-800 bg-zinc-900/50 px-4 py-3">
        <div className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
        <div className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
        <div className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
        <span className="ml-2 text-[10px] font-medium text-zinc-500 uppercase tracking-widest mono">datalayer-push.js</span>
      </div>
      <div className="p-6">
        <pre className="mono text-xs leading-relaxed text-zinc-400 sm:text-sm">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};
