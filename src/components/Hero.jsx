import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-rose-300/40 blur-3xl" />
        <div className="absolute -bottom-24 left-[-10%] h-[28rem] w-[28rem] rounded-full bg-amber-300/40 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.8),rgba(255,255,255,0))]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/60 bg-amber-50/60 px-3 py-1 text-xs font-semibold text-amber-800">
              <Star size={14} className="text-amber-500" /> Curated Indian Handicrafts
            </span>
            <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-slate-900">
              Where Heritage Meets Modern Luxury
            </h1>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed max-w-xl">
              We partner exclusively with master artisans to bring India’s most exquisite crafts to global markets. Each piece is ethically sourced, limited edition, and crafted by hand.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#collections" className="inline-flex items-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow hover:shadow-md transition">
                Explore Collections
              </a>
              <a href="#contact" className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:shadow-sm transition">
                Become a Partner
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-slate-600">
              <div>
                <div className="text-2xl font-bold text-slate-900">500+</div>
                <div className="text-xs">Master Artisans</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">70+</div>
                <div className="text-xs">Craft Clusters</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">100% </div>
                <div className="text-xs">Fair Trade</div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1603190287605-e6ade32fa852?q=80&w=1200&auto=format&fit=crop"
                alt="Handcrafted Indian pottery"
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <div>
                  <div className="text-sm uppercase tracking-widest/relaxed">Exclusive Drop</div>
                  <div className="text-lg font-semibold">Ajrakh x Studio Series</div>
                </div>
                <div className="rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur">Edition of 50</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
