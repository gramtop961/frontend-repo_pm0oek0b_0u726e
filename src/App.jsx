import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collections from './components/Collections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <div id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-14">
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-amber-50 to-rose-50 p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="md:col-span-2">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">A Business Model Built To Scale Craft</h2>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  We work directly with craft clusters across India to design modern collections rooted in tradition. Our model ensures consistent demand, transparent pricing, and technology-enabled logistics so artisans can focus on mastery while we scale their reach globally.
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-600" /> Cluster-first sourcing and capacity planning</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-600" /> Limited drops and wholesale partnerships</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-600" /> In-house design with archival research</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-600" /> Carbon-aware fulfillment worldwide</li>
                </ul>
              </div>
              <div className="md:pl-8">
                <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                  <div className="text-sm font-semibold">For Buyers & Partners</div>
                  <p className="mt-2 text-sm text-slate-600">Request access to our private catalog, lead times, and trade pricing.</p>
                  <form onSubmit={(e) => e.preventDefault()} className="mt-4 grid gap-3">
                    <input className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10" placeholder="Full name" required />
                    <input type="email" className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10" placeholder="Business email" required />
                    <input className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10" placeholder="Company" />
                    <button className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:shadow">Request Access</button>
                    <p className="text-[11px] text-slate-500">By continuing, you agree to our terms and privacy policy.</p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Collections />
      </main>
      <Footer />
    </div>
  );
}

export default App;
