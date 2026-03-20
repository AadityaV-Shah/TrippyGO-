
import React from 'react';
import type { Destination } from '../../types';

interface DestinationCardProps {
    destination: Destination;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
    return (
        <div className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="relative h-64 overflow-hidden">
                <img
                    src={destination.imageUrl}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-indigo-600 shadow-sm">
                    ★ {destination.rating}
                </div>
            </div>
            <div className="p-6">
                <div className="flex justify-between mb-2">
                    <div>
                        <h3 className="text-xl font-bold text-slate-900">{destination.name}</h3>
                        <p className="text-slate-500 text-sm">{destination.country}</p>
                    </div>
                    <p className="text-indigo-600 font-bold text-lg">${destination.price}</p>
                </div>
                <p className="text-slate-600 text-sm line-clamp-2 mb-4 leading-relaxed">
                    {destination.description}
                </p>
                <div className="flex flex-wrap gap-2">  
                    {destination.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-slate-100 text-slate-500 rounded-md">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DestinationCard;
