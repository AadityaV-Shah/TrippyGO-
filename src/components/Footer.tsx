
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-1">
                    <span className="text-2xl font-bold text-indigo-400 tracking-tight block mb-6">Trippy<span className="text-white">GO</span></span>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Your personal travel companion. We leverage cutting-edge AI to curate experiences that last a lifetime.
                    </p>
                </div>

                <div>
                    <h4 className="font-bold mb-6 text-slate-100">Quick Links</h4>
                    <ul className="space-y-4 text-slate-400 text-sm">
                        <li><a href="#" className="hover:text-indigo-400 transition-colors">Our Story</a></li>
                        <li><a href="#" className="hover:text-indigo-400 transition-colors">Travel Blog</a></li>
                        <li><a href="#" className="hover:text-indigo-400 transition-colors">Partner with us</a></li>
                        <li><a href="#" className="hover:text-indigo-400 transition-colors">Career</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-6 text-slate-100">Support</h4>
                    <ul className="space-y-4 text-slate-400 text-sm">
                        <li><a href="#" className="hover:text-indigo-400 transition-colors">Help Center</a></li>
                        <li><a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-indigo-400 transition-colors">Safety Guide</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-6 text-slate-100">Join our newsletter</h4>
                    <p className="text-slate-400 text-sm mb-4">Get travel tips and exclusive deals straight to your inbox.</p>
                    <div className="flex gap-2">
                        <input
                            type="email"
                            placeholder="Email"
                            className="bg-slate-800 border-none rounded-lg px-4 py-2 flex-1 text-sm focus:ring-2 focus:ring-indigo-500"
                        />
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all">
                            Join
                        </button>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 mt-20 pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
                © 2026 TrippyGO Travels. All rights reserved. Powered by Aaditya Web.
            </div>
        </footer>
    );
};

export default Footer;
