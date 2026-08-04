'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import DonationModal from '../../DonationModal';

export default function institutpastoralpage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDonationOpen, setIsDonationOpen] = useState(false);

  useEffect(() => {
    const handleOpenDonation = () => setIsDonationOpen(true);
    window.addEventListener('open-donation', handleOpenDonation as EventListener);
    return () => {
      window.removeEventListener('open-donation', handleOpenDonation as EventListener);
    };
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      


      {/* 2. HERO SECTION CORRIGÉE (Le texte n'est plus masqué) */}
      <section className="relative min-h-[65vh] flex items-center justify-center text-center px-4 pt-20 pb-24 overflow-hidden bg-slate-950 text-white">
        <Image 
          src="/church.jpg" 
          alt="ISTP ERPEVAI"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950" />
        <div className="relative z-10 max-w-4xl space-y-5">
          <span className="text-emerald-400 uppercase tracking-widest text-xs font-bold bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20">
            Bras académique et spirituel d'ERPEVAI
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
            Institut Supérieur Théologique <br /> et Pastoral (ISTP)
          </h1>
          <p className="text-slate-300 text-sm md:text-lg max-w-3xl mx-auto leading-relaxed font-medium">
            Bienvenue sur la page de l'ISTP. Notre vocation est d'équiper, d'enraciner et de propulser les dirigeants ecclésiastiques de demain pour l'avancement du Royaume de Dieu.
          </p>
        </div>
      </section>

      {/* 3. L'ISTP EN CHIFFRES */}
      <section className="max-w-6xl mx-auto px-6 -mt-16 relative z-20 text-white">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center shadow-2xl backdrop-blur-md">
          <div className="space-y-1">
            <p className="text-4xl font-black text-emerald-400">25+ Ans</p>
            <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">d'existence & d'impact</p>
          </div>
          <div className="space-y-1 border-y md:border-y-0 md:border-x border-slate-800 py-4 md:py-0">
            <p className="text-4xl font-black text-blue-400">3</p>
            <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Promotions arrivées à terme</p>
          </div>
          <div className="space-y-1">
            <p className="text-4xl font-black text-amber-500">~125</p>
            <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Pasteurs & Missionnaires Formés</p>
          </div>
        </div>
        <p className="text-center text-xs text-slate-500 mt-3 italic">
          Diplômés aujourd'hui actifs sur le terrain de l'évangélisation et de l'implantation d'églises.
        </p>
      </section>

      {/* 4. HISTOIRE, VISION & DIRECTION */}
  <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center text-slate-800">
      
    <div className="space-y-6">
      <div className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-green-600">🏛️ Origines & Mission</span>
        <h2 className="text-3xl font-black text-slate-900 border-l-4 border-green-600 pl-4">
          Notre Histoire & Vision
        </h2>
      </div>
      <p className="text-slate-600 text-sm md:text-base leading-relaxed">
        Fondé en <strong>2000 par l'Apôtre OULI Samuel</strong>, l'ISTP est né d'une vision claire : offrir une formation théologique et pastorale rigoureuse, accessible et profondément ancrée dans la Parole de Dieu.
      </p>
      <p className="text-slate-600 text-sm md:text-base leading-relaxed">
        Depuis plus de deux décennies, l'institut s'impose comme un pôle de référence dans la région de Bouaké et au-delà pour la préparation au ministère.
      </p>
    </div>

    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg space-y-6 flex flex-col items-center">
      <div className="relative w-full h-72 rounded-xl overflow-hidden border border-slate-100 shadow-sm bg-slate-50">
        <Image 
          src="/Directeur.jpg" 
          alt="Dr KOUASSI KOUADIO DENIS"
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-3 w-full text-center md:text-left">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">👨‍💼 Gouvernance</span>
          <h3 className="text-xl font-extrabold text-slate-900">Dr KOUASSI KOUADIO DENIS</h3>
          <p className="text-xs font-semibold text-slate-500">Directeur de l'ISTP</p>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed text-justify">
          L'institut est aujourd'hui dirigé avec excellence et dévouement par le Dr KOUASSI KOUADIO DENIS. Sous sa gouvernance, l'ISTP continue de moderniser ses programmes académiques tout en préservant le feu de la consécration et de la piété indispensables au ministère pastoral et missionnaire.
        </p>
      </div>
    </div>

  </section>

      {/* 6. NOUVELLE SECTION : GRILLE ALBUM PHOTOS DE L'INSTITUT */}
      <section className="max-w-6xl mx-auto px-6 py-20 space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-green-600">📸 Vie de l'Institut en Images</span>
          <h2 className="text-3xl font-black text-slate-900">Nos Promotions & Cérémonies</h2>
          <p className="text-slate-500 text-sm">
            Découvrez en images l'impact concret de l'ISTP : remises de diplômes, moments de consécration et vie des étudiants sur le campus de Bouaké.
          </p>
        </div>

        {/* Grille responsive asymétrique style Galerie Pro */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          
          <div className="relative h-72 rounded-2xl overflow-hidden border border-slate-200 shadow-md group bg-white">
            <Image 
              src="/Photo2.jpg"
              alt="Cérémonie de remise des diplômes" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <p className="text-white text-sm font-bold">Cérémonie de Remise de Diplômes</p>
            </div>
          </div>

          <div className="relative h-72 rounded-2xl overflow-hidden border border-slate-200 shadow-md group bg-white">
            <Image 
              src="/Photo3.jpg"
              alt="Les étudiants de l'ISTP" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <p className="text-white text-sm font-bold">Une Promotion d'Excellence à Bouaké</p>
            </div>
          </div>

          <div className="relative h-72 rounded-2xl overflow-hidden border border-slate-200 shadow-md group bg-white">
            <Image 
              src="/Photo 1.jpg"
              alt="Moment de consécration pastorale" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <p className="text-white text-sm font-bold">Consécration des Pasteurs et Missionnaires</p>
            </div>
          </div>

        </div>
      </section>

      {/* 7. POURQUOI CHOISIR L'ISTP */}
      <section className="bg-slate-100 border-t border-slate-200 py-20 px-6 space-y-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-2 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">🎯 Notre Valeur Ajoutée</span>
            <h2 className="text-3xl font-black text-slate-900">Pourquoi choisir l'ISTP ?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3 bg-white p-6 rounded-xl border border-slate-200/60 shadow-xs">
              <h3 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
                <span className="text-green-600 text-lg">✓</span> Un héritage solide
              </h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                Un quart de siècle d'expertise éprouvée dans le domaine pointu de la formation théologique et ministérielle.
              </p>
            </div>

            <div className="space-y-3 bg-white p-6 rounded-xl border border-slate-200/60 shadow-xs">
              <h3 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
                <span className="text-green-600 text-lg">✓</span> Une formation équilibrée
              </h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                Une alliance parfaite entre la profondeur théologique dogmatique et les outils pratiques indispensables pour la gestion d'une église ou d'une mission.
              </p>
            </div>

            <div className="space-y-3 bg-white p-6 rounded-xl border border-slate-200/60 shadow-xs">
              <h3 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
                <span className="text-green-600 text-lg">✓</span> Une reconnaissance spirituelle
              </h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                Des leaders et diplômés pleinement engagés sur le terrain qui font concrètement la différence partout dans le monde.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. APPEL À L'ACTION (WhatsApp) */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 md:p-12 space-y-6 text-white shadow-xl">
          <h2 className="text-2xl md:text-4xl font-black">Prêt à répondre à votre appel ?</h2>
          <p className="text-green-100 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Rejoignez l'un de nos parcours en présentiel à Bouaké ou à distance. Contactez dès aujourd'hui notre secrétariat académique pour votre inscription.
          </p>
          <div className="pt-2">
            <a 
              href="https://wa.me/+2250709606109" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-slate-100 text-green-700 font-black py-3.5 px-8 rounded-xl transition-all shadow-md text-sm inline-block tracking-wide uppercase"
            >
              S'inscrire via WhatsApp
            </a>
          </div>
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

      <DonationModal isOpen={isDonationOpen} onClose={() => setIsDonationOpen(false)} />
    </main>
  );
}