
import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://lp-cms-production.imgix.net/2023-04/shutterstock_2105333216.jpg?auto=format,compress&q=72&w=1440&h=810&fit=crop"
                    alt="Travel Hero"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-slate-50"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg">
                    Discover Your Next <span className="text-indigo-300">Adventure</span>
                </h1>
                <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto drop-shadow-md">
                    Explore the world's most breathtaking destinations with TrippyGO: <br /> Trip planning tailored just for you.
                </p>

                <div className="flex flex-col md:flex-row gap-3 bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/20 shadow-2xl">
                    <div className="flex-1">
                        <input
                            type="text"
                            placeholder="Where do you want to go?"
                            className="w-full px-5 py-4 rounded-xl bg-white border-none focus:ring-2 focus:ring-indigo-500 text-slate-900 placeholder:text-slate-400"
                        />
                    </div>
                    <div className="flex-1 flex gap-3">
                        <input
                            type="date"
                            className="flex-1 px-5 py-4 rounded-xl bg-white border-none focus:ring-2 focus:ring-indigo-500 text-slate-900"
                        />
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:scale-105 active:scale-95">
                            Explore
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
