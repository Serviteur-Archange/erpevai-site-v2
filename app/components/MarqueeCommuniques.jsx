"use client";
import { useState, useEffect } from 'react';
import { supabase } from '@/supabase';

export default function MarqueeCommuniques({ onCommuniqueClick }) {
  const [communiques, setCommuniques] = useState([]);

  useEffect(() => {
    async function fetchCommuniques() {
      const { data, error } = await supabase
        .from('communiques')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error("Erreur récupération communiqués:", error);
      } else {
        setCommuniques(data || []);
      }
    }

    fetchCommuniques();
  }, []);

  if (!communiques.length) return null;

  let duplicatedCommuniques = [...communiques];
  while (duplicatedCommuniques.length < 6) {
    duplicatedCommuniques = [...duplicatedCommuniques, ...communiques];
  }
  duplicatedCommuniques = [...duplicatedCommuniques, ...duplicatedCommuniques];

  return (
    <div className="w-full bg-slate-900 border-y border-slate-800 py-6 overflow-hidden relative shadow-lg">
      <div className="absolute left-0 inset-y-0 w-16 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 inset-y-0 w-16 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>

      <div className="flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap items-center">
        {duplicatedCommuniques.map((item, index) => (
          <div 
            key={index} 
            onClick={() => onCommuniqueClick && onCommuniqueClick(item)}
            className="flex items-center mx-4 bg-slate-800/90 border border-slate-700 px-5 py-4 rounded-xl shadow-md min-w-[380px] max-w-[480px] cursor-pointer group hover:border-red-500 transition-colors"
          >
            <span className="bg-red-600 text-white text-xs font-bold uppercase px-3 py-1.5 rounded-lg mr-4 shrink-0 tracking-wide">
              {item.category || 'Annonce'}
            </span>
            <div className="flex flex-col justify-center overflow-hidden">
              <h4 className="text-white font-semibold text-base truncate group-hover:text-red-400 transition-colors">{item.title}</h4>
              <p className="text-gray-300 text-sm truncate mt-0.5">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}