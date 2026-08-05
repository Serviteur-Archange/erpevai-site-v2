"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import DonationModal from "../DonationModal";

export default function EspaceMedias() {
  const [isLiveOpen, setIsLiveOpen] = useState(false);
  const [isDonationOpen, setIsDonationOpen] = useState(false);

  useEffect(() => {
    const handleOpenDonation = () => setIsDonationOpen(true);
    window.addEventListener("open-donation", handleOpenDonation);
    return () => {
      window.removeEventListener("open-donation", handleOpenDonation);
    };
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 relative">
     <Navbar />
      
      {/* En-tête */}
      <section className="relative text-white py-16 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/Broadcast Wallpapers - Wallpaper Cave.jpeg" 
            alt="Espace Médias" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-black mb-4">ESPACE MÉDIAS</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Suivez notre chaîne TV en direct, nos prédications, replays vidéo et galeries photos.
          </p>
          {/* Le bouton "Faire un don" a été retiré d'ici */}
        </div>
      </section>

      {/* SECTION YOUTUBE */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 border-l-4 border-red-600 pl-4 flex items-center gap-3">
            <svg className="w-8 h-8 text-red-600 fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            SECTION YOUTUBE
          </h2>
          <span className="text-sm font-semibold text-red-600 bg-red-50 px-4 py-2 rounded-full">
            En direct & Replays
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 p-4">
            <div className="aspect-video bg-gray-900 rounded-xl flex items-center justify-center text-white font-medium">
              [Intégration Lecteur YouTube Live / Vidéo]
            </div>
            <h3 className="text-lg font-bold mt-4">Dernier Culte Dominical en Direct</h3>
            <p className="text-gray-600 text-sm mt-1">Retrouvez l'intégralité de notre dernier service de louange et de Parole.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 p-4">
            <div className="aspect-video bg-gray-900 rounded-xl flex items-center justify-center text-white font-medium">
              [Intégration Vidéo YouTube Archive]
            </div>
            <h3 className="text-lg font-bold mt-4">Moment de Prière et d'Intercession</h3>
            <p className="text-gray-600 text-sm mt-1">Revivez les moments forts de notre semaine de consécration.</p>
          </div>
        </div>
      </section>

      {/* SECTION VIDEOS */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 border-l-4 border-red-600 pl-4 flex items-center gap-3">
            <svg className="w-8 h-8 text-blue-900 fill-current" viewBox="0 0 24 24">
              <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
            </svg>
            ARCHIVES VIDÉOS & CULTES
          </h2>
          <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
            Archives & Séries
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
            <div className="h-40 bg-gray-200 flex items-center justify-center text-gray-500 font-semibold">
              Miniature Vidéo
            </div>
            <div className="p-4">
              <h4 className="font-bold text-base mb-1">Conférence des Jeunes</h4>
              <p className="text-gray-500 text-xs">Durée : 1h 15min</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
            <div className="h-40 bg-gray-200 flex items-center justify-center text-gray-500 font-semibold">
              Miniature Vidéo
            </div>
            <div className="p-4">
              <h4 className="font-bold text-base mb-1">Série : Marcher dans la Victoire</h4>
              <p className="text-gray-500 text-xs">Durée : 45min</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
            <div className="h-40 bg-gray-200 flex items-center justify-center text-gray-500 font-semibold">
              Miniature Vidéo
            </div>
            <div className="p-4">
              <h4 className="font-bold text-base mb-1">Témoignages de la semaine</h4>
              <p className="text-gray-500 text-xs">Durée : 20min</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION PHOTOS */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 border-l-4 border-red-600 pl-4 flex items-center gap-3">
            <svg className="w-8 h-8 text-blue-900 fill-current" viewBox="0 0 24 24">
              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
            </svg>
            GALERIE PHOTOS
          </h2>
          <span className="text-sm font-semibold text-green-600 bg-green-50 px-4 py-2 rounded-full">
            Galerie Souvenirs
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 group">
            <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-500 font-semibold group-hover:scale-105 transition-transform duration-300">
              Photo Culte Dominical
            </div>
            <div className="p-4">
              <h4 className="font-bold text-sm text-gray-800">Célébration du Dimanche</h4>
              <p className="text-gray-400 text-xs mt-1">Il y a 3 jours</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 group">
            <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-500 font-semibold group-hover:scale-105 transition-transform duration-300">
              Photo Sainte Cène
            </div>
            <div className="p-4">
              <h4 className="font-bold text-sm text-gray-800">Partage de la Sainte Cène</h4>
              <p className="text-gray-400 text-xs mt-1">Semaine dernière</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 group">
            <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-500 font-semibold group-hover:scale-105 transition-transform duration-300">
              Photo Baptême
            </div>
            <div className="p-4">
              <h4 className="font-bold text-sm text-gray-800">Service de Baptême</h4>
              <p className="text-gray-400 text-xs mt-1">Ce mois-ci</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 group">
            <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-500 font-semibold group-hover:scale-105 transition-transform duration-300">
              Photo Jeunesse
            </div>
            <div className="p-4">
              <h4 className="font-bold text-sm text-gray-800">Rencontre de la Jeunesse</h4>
              <p className="text-gray-400 text-xs mt-1">Le mois dernier</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION CONTACT / FOOTER */}
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
                <Link href="/espace-medias" className="hover:text-white transition-colors">
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