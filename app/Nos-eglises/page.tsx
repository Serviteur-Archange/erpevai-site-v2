'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DonationModal from '../DonationModal';
export default function NosEglisesPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDonationOpen, setIsDonationOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsDonationOpen(true);
    window.addEventListener('open-donation', handleOpen);
    return () => window.removeEventListener('open-donation', handleOpen);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 pt-20">


      {/* 2. HERO SECTION CORRIGÉE (Le texte n'est plus masqué) */}
      <section className="relative min-h-[65vh] flex items-center justify-center text-center px-4 pt-20 pb-24 overflow-hidden bg-slate-950 text-white">
        <Image 
          src="/_ - 2026-07-24T041110.280.jpeg" 
          alt="ISTP ERPEVAI"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950" />
        <div className="relative z-10 max-w-4xl space-y-5">
        
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
            NOS EGLISES <br /> 
          </h1>
          <p className="text-slate-300 text-sm md:text-lg max-w-3xl mx-auto leading-relaxed font-medium">
            « C'est pourquoi allez, faites de toutes les nations des disciples, les baptisant au nom du Père, du Fils et du Saint-Esprit, et enseignez-leur à observer toutes les choses que je vous ai prescrites. Et voici, je suis avec vous tous les jours, jusqu'à la fin du monde. » — Matthieu 28 :19-20
          </p>
        </div>
      </section>

      {/* 3. L'ISTP EN CHIFFRES */}
      <section className="max-w-6xl mx-auto px-6 -mt-16 relative z-20 text-white">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center shadow-2xl backdrop-blur-md">
          <div className="space-y-1">
            <p className="text-4xl font-black text-emerald-400">60%</p>
            <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">de couverture nationale</p>
          </div>
          <div className="space-y-1 border-y md:border-y-0 md:border-x border-slate-800 py-4 md:py-0">
            <p className="text-4xl font-black text-blue-400">10</p>
            <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">grandes régions pastorales</p>
          </div>
          <div className="space-y-1">
            <p className="text-4xl font-black text-amber-500">+6000</p>
            <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">fidèles à travers la Côted'Ivoire</p>
          </div>
        </div>
        <p className="text-center text-xs text-slate-500 mt-3 italic">
          Nous sommes une église impactante dans l'echéquier religieux ivoirien, avec une présence significative dans plusieurs villes et localités.
        </p>
      </section>

      {/* SECTION TABLEAU DES ÉGLISES PAR VILLE */}
<section className="max-w-6xl mx-auto px-4 py-16">
  <div className="text-center mb-10">
    <h2 className="text-3xl font-bold text-gray-900 mb-2">Répertoire de nos Églises</h2>
    <p className="text-gray-600">Retrouvez chaque ville, son pasteur responsable et leurs contacts.</p>
  </div>

  <div className="bg-white shadow-lg rounded-2xl border border-gray-200 p-10 text-center">
    <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 text-red-600 rounded-full mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0h4m-4 0H7" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">Répertoire en cours de mise à jour</h3>
    <p className="text-gray-500 max-w-md mx-auto">
      La liste officielle des églises et des pasteurs responsables est en cours de validation par le secrétariat. Elle sera disponible très prochainement.
    </p>
  </div>
</section>
{/* CONTACT */}
      <section
        id="contact"
        className="py-20 px-6 md:px-20 bg-black text-white"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

          <div>
            <h3 className="text-3xl font-bold mb-6">
              ERPEVAI
            </h3>

            <p className="text-gray-400 leading-8">
              Église de Réveil du Plein Évangile
              Vision Apostolique Internationale.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">
              Navigation
            </h3>

            <ul className="space-y-3 text-gray-400">
          <li>
            <Link href="/" className="hover:text-white transition-colors">
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/nos-eglises" className="hover:text-white transition-colors">
              Nos églises
            </Link>
          </li>
          <li>
            <Link href="/medias" className="hover:text-white transition-colors">
              Espace médias
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </li>
        </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">
              Contact
            </h3>

            <p className="text-gray-400">
              Bouaké - Côte d’Ivoire
            </p>

            <p className="text-gray-400 mt-3">
              WhatsApp : 0709172800
            </p>
            <p className="text-gray-400 mt-3">
              Service Communication : 05946345
            </p>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500">
          © 2026 ERPEVAI - Tous droits réservés
        </div>
      </section>
       {/* MODALE DE DON (POP-UP) */}
            <DonationModal 
              isOpen={isDonationOpen} 
              onClose={() => setIsDonationOpen(false)} 
            />
      
    </main>
  );
}