import React from 'react';
import { Provider } from '../types';
import { Star, ShieldCheck, MapPin } from 'lucide-react';

interface ServiceCardProps {
  provider: Provider;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ provider }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl hover:border-amber-300 transition-all duration-300 group flex flex-col h-full shadow-sm">
      {/* Image Container with Parallax-like effect */}
      <div className="relative h-48 overflow-hidden translate-z-0">
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/10 to-transparent z-10 opacity-80 group-hover:opacity-60 transition-opacity duration-700" />
        
        {/* Main Image with Slow Zoom (Parallax feel) */}
        <img 
          src={provider.avatar} 
          alt={provider.name} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out will-change-transform"
        />
        
        {/* Category Badge */}
        <div className="absolute top-3 right-3 z-20">
          <span className="bg-white/95 backdrop-blur-md text-amber-600 text-[10px] font-bold px-3 py-1 rounded-full shadow-sm uppercase tracking-widest border border-amber-100/50">
            {provider.category}
          </span>
        </div>
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
              {provider.name}
            </h3>
            <div className="text-slate-500 text-sm flex items-center gap-1 mt-1">
              <span className="font-medium text-slate-600">{provider.role}</span>
              {provider.verified && (
                <ShieldCheck className="w-4 h-4 text-blue-500 ml-1" aria-label="Verificado" />
              )}
            </div>
          </div>
          <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-lg border border-amber-100">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span className="text-amber-700 font-bold text-sm">{provider.rating}</span>
            <span className="text-slate-400 text-xs">({provider.reviews})</span>
          </div>
        </div>

        <p className="text-slate-600 text-sm mb-4 line-clamp-2 flex-grow leading-relaxed">
          {provider.description}
        </p>

        <div className="border-t border-slate-100 pt-4 mt-auto">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center text-slate-500">
              <MapPin className="w-3.5 h-3.5 mr-1.5 text-slate-400" />
              {provider.location}
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-400 block mb-0.5">A partir de</span>
              <span className="text-lg font-bold text-slate-800">
                R$ {provider.hourlyRate}
                <span className="text-xs font-medium text-slate-400 ml-0.5">/h</span>
              </span>
            </div>
          </div>
          
          <button className="w-full mt-4 bg-slate-900 hover:bg-amber-500 hover:text-white text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-sm tracking-wide">
            Ver Perfil Completo
          </button>
        </div>
      </div>
    </div>
  );
};
