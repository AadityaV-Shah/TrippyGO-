
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
    { name: 'Europe', bookings: 4000, color: '#6366f1' },
    { name: 'Asia', bookings: 3000, color: '#818cf8' },
    { name: 'Americas', bookings: 2000, color: '#a5b4fc' },
    { name: 'Africa', bookings: 1500, color: '#c7d2fe' },
    { name: 'Oceania', bookings: 2780, color: '#4f46e5' },
];

const Stats: React.FC = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-indigo-600 font-bold text-sm tracking-widest uppercase mb-2 block">Travel Insights</span>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Trending Global <br />Destinations 2024</h2>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            Based on our user data, Europe remains the most coveted region for summer travel, followed closely by the rising popularity of Asian spiritual retreats.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-indigo-50 p-6 rounded-2xl">
                                <p className="text-3xl font-bold text-indigo-600 mb-1">98%</p>
                                <p className="text-slate-600 text-sm font-medium">Customer Satisfaction</p>
                            </div>
                            <div className="bg-indigo-50 p-6 rounded-2xl">
                                <p className="text-3xl font-bold text-indigo-600 mb-1">500+</p>
                                <p className="text-slate-600 text-sm font-medium">Verified Guides</p>
                            </div>
                        </div>
                    </div>

                    <div className="h-[400px] w-full bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-inner">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                                <Tooltip
                                    cursor={{ fill: '#f1f5f9' }}
                                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                                />
                                <Bar dataKey="bookings" radius={[8, 8, 0, 0]}>
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
