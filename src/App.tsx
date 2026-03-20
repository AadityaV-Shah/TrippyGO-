import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DestinationCard from './components/DestinationCard';
import Stats from './components/Stats';
import Footer from './components/Footer';
import { FEATURED_DESTINATIONS } from './constants';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-indigo-100 selection:text-indigo-700">
      <Navbar />

      <main>
        <Hero />

        {/* Featured Destinations */}
        <section id="destinations" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
              <div className="max-w-xl">
                <span className="text-indigo-600 font-bold text-sm tracking-widest uppercase mb-2 block">Curated Escapes</span>
                <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Destinations</h2>
                <p className="text-slate-600">Discover hand-picked places that offer more than just a trip—they offer a new perspective on the world.</p>
              </div>
              <button className="text-indigo-600 font-bold hover:text-indigo-700 flex items-center gap-2 group whitespace-nowrap">
                View All Destinations
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {FEATURED_DESTINATIONS.map(destination => (
                <DestinationCard key={destination.id} destination={destination} />
              ))}
            </div>
          </div>
        </section>


        {/* Stats */}
        <Stats />
        <section className="py-24 bg-indigo-600 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400 rounded-full blur-[100px] opacity-20 translate-y-1/2 -translate-x-1/2"></div>

          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to start your journey?</h2>
            <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto">
              Join thousands of travelers who are planning their next big adventure with TrippyGO.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all shadow-xl hover:scale-105 active:scale-95">
                Start Planning Now
              </button>
              <button className="bg-indigo-700/50 text-white border border-indigo-400 px-10 py-4 rounded-full font-bold text-lg hover:bg-indigo-700 transition-all backdrop-blur-sm">
                Talk to Sales
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;