import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-black/5 bg-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-10 right-0 h-40 w-40 rounded-full bg-rose-300/40 blur-2xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-xl font-semibold">KalāKriti</div>
            <p className="mt-3 text-sm text-slate-600 max-w-xs">Scaling Indian craft heritage with design, technology, and respect for the human hand.</p>
            <div className="mt-4 flex items-center gap-3 text-slate-600">
              <a aria-label="Instagram" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 hover:bg-slate-50">
                <Instagram className="h-4 w-4" />
              </a>
              <a aria-label="Facebook" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 hover:bg-slate-50">
                <Facebook className="h-4 w-4" />
              </a>
              <a aria-label="LinkedIn" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 hover:bg-slate-50">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-slate-900">Company</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#about" className="hover:text-slate-900">About</a></li>
              <li><a href="#collections" className="hover:text-slate-900">Collections</a></li>
              <li><a href="#" className="hover:text-slate-900">Sourcing</a></li>
              <li><a href="#" className="hover:text-slate-900">Careers</a></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-slate-900">Support</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Help Center</a></li>
              <li><a href="#" className="hover:text-slate-900">Shipping</a></li>
              <li><a href="#" className="hover:text-slate-900">Returns</a></li>
              <li><a href="#" className="hover:text-slate-900">Accessibility</a></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-slate-900">Partner With Us</div>
            <p className="mt-3 text-sm text-slate-600">Boutiques, interior studios, and cultural institutions: request a private catalog.</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex gap-2">
              <input type="email" required placeholder="Business email" className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10" />
              <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
                <Mail className="h-4 w-4" /> Send
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-xs text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} KalāKriti. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-700">Privacy</a>
            <a href="#" className="hover:text-slate-700">Terms</a>
            <a href="#" className="hover:text-slate-700">Imprint</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
