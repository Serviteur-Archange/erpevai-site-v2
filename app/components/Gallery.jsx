"use client";
import { useState } from 'react';

const MEDIA_VIDEOS = [
  { type: 'video', src: 'https://www.facebook.com/share/r/1BXYWVzJ2w/' },
  { type: 'video', src: 'https://www.facebook.com/share/r/1BT1oM3Hzu/' },
  { type: 'video', src: 'https://www.facebook.com/share/r/193EYDAXRc/' },
  { type: 'video', src: 'https://www.facebook.com/share/v/1B1mmdLFpM/' },
  { type: 'video', src: 'https://www.facebook.com/share/v/1D899XKRdA/' },
];

export default function Gallery() {
 const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative shadow-2xl text-left">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 bg-slate-100 hover:bg-red-100 text-slate-700 hover:text-red-600 font-bold p-2 px-4 rounded-full transition-colors text-sm cursor-pointer"
            >
              ✕ Fermer
            </button>
            
            <h3 className="text-2xl font-black text-slate-900 mb-6 uppercase border-b pb-3">
              Nos Vidéos & Reels Facebook
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {MEDIA_VIDEOS.map((item, index) => (
                <div key={index} className="relative rounded-xl overflow-hidden shadow-md bg-slate-900 aspect-[16/9] flex items-center justify-center">
                  <a 
                    href={item.src} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full h-full relative group flex flex-col items-center justify-center bg-blue-950 text-white p-4 text-center hover:bg-blue-900 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white text-xl font-bold shadow-lg mb-2 group-hover:scale-110 transition-transform">
                      ▶
                    </div>
                    <span className="font-semibold text-sm text-blue-100">Voir sur Facebook</span>
                    <span className="text-xs text-gray-400 mt-1 truncate max-w-[250px]">{item.src}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}