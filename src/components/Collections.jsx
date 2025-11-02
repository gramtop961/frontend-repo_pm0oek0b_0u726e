import { motion } from 'framer-motion';
import { ShieldCheck, Truck, HandHeart } from 'lucide-react';

const collections = [
  {
    title: 'Ajrakh Textiles',
    tag: 'Kutch, Gujarat',
    img: 'https://images.unsplash.com/photo-1603575449422-8952b6a4eaf9?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Dhokra Brass',
    tag: 'Bastar, Chhattisgarh',
    img: 'https://images.unsplash.com/photo-1601303878867-c5b3ee28ec0e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Blue Pottery',
    tag: 'Jaipur, Rajasthan',
    img: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Channapatna Toys',
    tag: 'Ramanagara, Karnataka',
    img: 'https://images.unsplash.com/photo-1600423115367-61ea4d90f539?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Collections() {
  return (
    <section id="collections" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-slate-900">Limited Collections</h2>
            <p className="mt-2 text-slate-600 max-w-2xl">We curate seasonal drops in collaboration with artisan clusters to keep craftsmanship rare, honest, and fairly priced.</p>
          </div>
          <a href="#" className="hidden md:inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:shadow-sm">View All</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((c, i) => (
            <motion.a
              key={c.title}
              href="#"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow ring-1 ring-black/5">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={c.img} alt={c.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent opacity-100" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <div>
                  <div className="text-sm uppercase tracking-widest/relaxed">{c.tag}</div>
                  <div className="text-lg font-semibold">{c.title}</div>
                </div>
                <div className="rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur">Shop</div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <Feature icon={<ShieldCheck className="h-5 w-5" />} title="Certified Authentic">
            Every piece is verified by craft councils and carries provenance.
          </Feature>
          <Feature icon={<HandHeart className="h-5 w-5" />} title="Artisan First Pricing">
            Transparent margins with fair and living wages.
          </Feature>
          <Feature icon={<Truck className="h-5 w-5" />} title="Global Fulfillment">
            Insured worldwide shipping with climate-neutral options.
          </Feature>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, children }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-500/20 to-rose-500/20 text-amber-700">
          {icon}
        </div>
        <div className="text-base font-semibold text-slate-900">{title}</div>
      </div>
      <p className="mt-3 text-sm text-slate-600">{children}</p>
    </div>
  );
}
