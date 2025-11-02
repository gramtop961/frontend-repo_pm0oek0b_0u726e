import { useState } from 'react';
import { Menu, X, ShoppingBag, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: 'Collections', href: '#collections' },
    { label: 'Artisans', href: '#collections' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="inline-flex items-center gap-2 text-xl font-semibold tracking-tight">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-amber-500 to-rose-500 text-white shadow-sm">
              <Sparkles size={18} />
            </span>
            <span className="font-[600]">KalāKriti</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="text-sm font-medium text-slate-700/80 hover:text-slate-900 transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium shadow-sm hover:shadow transition">
              <ShoppingBag size={16} />
              Wholesale
            </a>
            <a href="#contact" className="inline-flex items-center rounded-full bg-gradient-to-r from-amber-600 to-rose-600 px-4 py-2 text-sm font-semibold text-white shadow hover:shadow-md transition">
              Work With Us
            </a>
          </div>

          <button aria-label="Toggle Menu" onClick={() => setOpen(!open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-white shadow-sm">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6 pt-2">
            <div className="grid gap-2">
              {links.map((l) => (
                <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700/90 hover:bg-slate-50">
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-amber-600 to-rose-600 px-3 py-2 text-sm font-semibold text-white">
                Work With Us
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
