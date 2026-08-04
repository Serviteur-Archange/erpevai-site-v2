'use client';
import { useState, useEffect } from 'react';
import Link from "next/link";
import DonationModal from '../../DonationModal';

export default function CdnPage() {
  const [isDonationOpen, setIsDonationOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsDonationOpen(true);
    window.addEventListener('open-donation', handleOpen);
    return () => window.removeEventListener('open-donation', handleOpen);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      
      {/* 2. SECTION BANNIÈRE */}
      <section 
        className="relative h-[55vh] flex flex-col items-center justify-center bg-cover bg-center text-center px-4"
        style={{ backgroundImage: "url('/Calendrier ERPE2A.jpg')" }}
      >
        <div className="absolute inset-0 bg-blue-950/70 z-0"></div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-wider mb-4 drop-shadow-md">
            CONSEIL DE DIRECTION NATIONAL
          </h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Découvrez la structure directionnelle et les missions de notre conseil.
          </p>
        </div>
      </section>

      {/* 3. SECTION PRÉSENTATION + PHOTO CÔTÉ À CÔTÉ */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-slate-800 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-blue-950 border-b pb-2 inline-block">
              Présentation
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 text-justify">
              Le <strong>Conseil de Direction National (CDN)</strong> est l'organe stratégique et exécutif central qui dirige la vie de l'Église de Réveil du Plein Évangile au plan national. Présidé par l'<strong>Apôtre Henri Koffi Fayol</strong>, le CDN rassemble les dirigeants et ministères clés pour coordonner l'action de l'Église, maintenir l'harmonie spirituelle et matérialiser les orientations requises pour son expansion, en parfaite synergie avec la Vision Apostolique Internationale.
            </p>
          </div>

          <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-xl border-4 border-slate-100">
            <img 
              src="/2EEDC8B8-3AE1-480C-A782-08BF9530CA7C_1_201_a.jpeg" 
              alt="Membres du Conseil de Direction National" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 4. SECTION ORGANIGRAMME DU CDN */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-blue-950 uppercase tracking-wide mb-2">
              Organigramme du CDN
            </h3>
            <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full mb-3"></div>
            <p className="text-gray-600 max-w-xl mx-auto">
              Visualisez la hiérarchie et l'organisation structurelle du Conseil de Direction National.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 md:p-8 shadow-md flex justify-center items-center overflow-hidden">
            <img
              src="/Organ2.jpg"
              alt="Organigramme du Conseil de Direction National"
              className="w-full max-w-4xl h-auto rounded-xl shadow-inner object-contain"
            />
          </div>
        </div>

        {/* 5. SECTION LES MISSIONS STRATÉGIQUES */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-950 text-center mb-8 uppercase tracking-wide">
            Nos missions stratégiques
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm">
              <h4 className="text-lg font-bold text-orange-600 mb-2">
                1. Piloter la Vie de l'Église au Plan National
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Le CDN assure la gouvernance globale de toutes les communautés locales de l'Église de Réveil du Plein Évangile, veillant à leur bonne marche administrative et spirituelle.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm">
              <h4 className="text-lg font-bold text-orange-600 mb-2">
                2. Garantir l'Orthodoxie Spirituelle
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Il maintient des normes élevées de spiritualité, d'éthique et de gestion, en accord avec les fondements bibliques et la ferveur du Plein Évangile.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm">
              <h4 className="text-lg font-bold text-orange-600 mb-2">
                3. Impulser la Dynamique Missionnaire
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Le conseil planifie et coordonne les grandes actions d'évangélisation, les programmes nationaux et l'implantation de nouvelles églises sur toute l'étendue du territoire.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm">
              <h4 className="text-lg font-bold text-orange-600 mb-2">
                4. Encadrer le Corps Pastoral
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Il assure la formation, le suivi et l'affermissement des pasteurs et des responsables nationaux pour garantir un leadership intégré et excellent.
              </p>
            </div>
          </div>
        </div>

        {/* 6. SECTION UN ENGAGEMENT POUR L'AVENIR */}
        <div className="bg-blue-950 text-white p-8 md:p-12 rounded-3xl text-center shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"></div>
          <h3 className="text-2xl font-bold mb-4 text-orange-400">
            Un engagement pour l'avenir
          </h3>
          <p className="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed font-light">
            Fidèle à son identité ecclésiale et résolument tournée vers l'avenir, le Conseil de Direction National œuvre chaque jour à structurer le mouvement sur le plan intérieur. Par ses décisions inspirées, il donne les orientations nécessaires pour que l'Église de Réveil du Plein Évangile continue de grandir, d'éclairer le pays et d'expérimenter pleinement la puissance du Seigneur Jésus-Christ.
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
                <Link href="/Nos-eglises" className="hover:text-white transition-colors">
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

      {/* MODAL DE DON */}
      <DonationModal 
        isOpen={isDonationOpen} 
        onClose={() => setIsDonationOpen(false)} 
      />
    </main>
  );
}