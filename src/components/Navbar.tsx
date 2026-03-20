import React, { useState } from 'react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center">
                        <span className="text-2xl font-bold text-indigo-600 tracking-tight">Trippy<span className="text-slate-900">GO</span></span>
                    </div>

                    <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
                        <a href="#home" className="hover:text-indigo-600 transition-colors">Home</a>
                        <a href="#destinations" className="hover:text-indigo-600 transition-colors">Destinations</a>
                        <a href="#packages" className="hover:text-indigo-600 transition-colors">Packages</a>
                    </div>

                    <div className="hidden md:block">
                        <button className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-md">
                            Book Now
                        </button>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-4">
                    <a href="#home" className="block text-slate-600 hover:text-indigo-600">Home</a>
                    <a href="#destinations" className="block text-slate-600 hover:text-indigo-600">Destinations</a>
                    <a href="#packages" className="block text-slate-600 hover:text-indigo-600">Packages</a>
                    <button className="w-full bg-indigo-600 text-white px-5 py-2 rounded-lg text-sm font-semibold">Book Now</button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;