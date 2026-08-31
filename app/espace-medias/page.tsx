"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DonationModal from "../DonationModal";

export default function EspaceMedias() {
  const [isDonationOpen, setIsDonationOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);
  
  const totalPhotosFemmes = 18;
  const totalPhotosConference = 16;
  const totalPhotosArchives = 16;

  useEffect(() => {
    const handleOpenDonation = () => setIsDonationOpen(true);
    window.addEventListener("open-donation", handleOpenDonation);
    return () => {
      window.removeEventListener("open-donation", handleOpenDonation);
    };
  }, []);

  // Fonction utilitaire pour obtenir le nombre max de photos de l'album actif
  const getMaxPhotos = () => {
    if (activeModal === "femmes") return totalPhotosFemmes;
    if (activeModal === "conference-2025") return totalPhotosConference;
    if (activeModal === "archives") return totalPhotosArchives;
    return 0;
  };

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
        </div>
      </section>

      {/* SECTION PROJET : RÉVEIL TV (RTV) */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl border border-blue-800/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-10">
              <div className="space-y-4 text-center lg:text-left">
                <span className="bg-red-600 text-white text-xs font-bold px-9 py-3 rounded-full uppercase tracking-wider inline-block">
                  Vision & Avenir
                </span>
                <h2 className="text-3xl md:text-4xl font-black flex items-center justify-center lg:justify-start gap-3">
                  RÉVEIL TV (RTV) <span className="text-red-500 text-lg font-normal">| La Télé du Réveil</span>
                </h2>
                <p className="text-gray-300 max-w-xl">
                  À l'image des grandes chaînes chrétiennes, découvrez le projet officiel de notre chaîne de télévision dédiée à la propagation de l'Évangile, des miracles et de la Parole de Dieu 24h/24.
                </p>
              </div>

              <div className="bg-white p-4 rounded-2xl shadow-xl flex items-center justify-center border border-slate-200 w-48 h-48 flex-shrink-0">
                <img 
                  src="/RTV.png" 
                  alt="Logo Réveil TV" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
              <div className="relative aspect-video bg-black/60 rounded-2xl overflow-hidden border border-slate-700 flex flex-col items-center justify-center text-center p-6 shadow-inner">
                <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mb-4 text-red-500 animate-pulse border border-red-500/30">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                    <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0-1.9-.9-1.9-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"/>
                    <path d="M10 9l5 3-5 3z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Bientôt sur vos écrans</h3>
                <p className="text-gray-300 text-sm">
                  Retrouvez prochainement les flux officiels de RTV, les programmes spéciaux et les cultes en direct.
                </p>
              </div>

              <div className="relative aspect-video bg-black/60 rounded-2xl overflow-hidden border border-slate-700 shadow-inner group">
                <img 
                  src="/micro.jpg" 
                  alt="micro.jpg" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs font-semibold bg-red-600 text-white px-3 py-1 rounded-md">
                    Matériel & Couverture RTV
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                <div className="text-red-400 text-2xl mb-3">🔥</div>
                <h4 className="font-bold text-lg mb-1">Cultes en Direct</h4>
                <p className="text-gray-300 text-sm">Vibrez au rythme des célébrations dominicales et des grands programmes de réveil en direct.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                <div className="text-red-400 text-2xl mb-3">📖</div>
                <h4 className="font-bold text-lg mb-1">Enseignements & Formations</h4>
                <p className="text-gray-300 text-sm">Des programmes riches pour fortifier votre foi et grandir dans la stature de Christ.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                <div className="text-red-400 text-2xl mb-3">✨</div>
                <h4 className="font-bold text-lg mb-1">Miracles & Témoignages</h4>
                <p className="text-gray-300 text-sm">Revivez la puissance de Dieu à l'œuvre à travers les guérisons et les témoignages poignants.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION YOUTUBE */}
      <section className="max-w-7xl mx-auto px-6 py-12">
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
            <div className="h-40 bg-gray-200 flex items-center justify-center text-gray-500 font-semibold">Miniature Vidéo</div>
            <div className="p-4">
              <h4 className="font-bold text-base mb-1">Conférence des Jeunes</h4>
              <p className="text-gray-500 text-xs">Durée : 1h 15min</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
            <div className="h-40 bg-gray-200 flex items-center justify-center text-gray-500 font-semibold">Miniature Vidéo</div>
            <div className="p-4">
              <h4 className="font-bold text-base mb-1">Série : Marcher dans la Victoire</h4>
              <p className="text-gray-500 text-xs">Durée : 45min</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
            <div className="h-40 bg-gray-200 flex items-center justify-center text-gray-500 font-semibold">Miniature Vidéo</div>
            <div className="p-4">
              <h4 className="font-bold text-base mb-1">Témoignages de la semaine</h4>
              <p className="text-gray-500 text-xs">Durée : 20min</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION PHOTOS (4 ALBUMS) */}
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
          <div 
            onClick={() => setActiveModal("femmes")}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 group cursor-pointer hover:shadow-xl transition-all"
          >
            <div className="h-48 overflow-hidden relative">
              <img
                src="/femmes/1.jpg"
                alt="Conférence Nationale des femmes"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h4 className="font-bold text-sm text-gray-800">Conférence Nationale des femmes</h4>
              <p className="text-gray-400 text-xs mt-1">Bouaké 2026</p>
            </div>
          </div>

          <div 
            onClick={() => setActiveModal("conference-2025")}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 group cursor-pointer hover:shadow-xl transition-all"
          >
            <div className="h-48 overflow-hidden relative">
              <img
                src="/Conference 2025/1.jpg"
                alt="Conférence Nationale des églises ERPE-VAI"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h4 className="font-bold text-sm text-gray-800">Conférence Nationale des église ERPE-VAI</h4>
              <p className="text-gray-400 text-xs mt-1">Bouaké 2025</p>
            </div>
          </div>

          {/* Album Archives */}
          <div 
            onClick={() => setActiveModal("archives")}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 group cursor-pointer hover:shadow-xl transition-all"
          >
            <div className="h-48 overflow-hidden relative bg-gray-100">
              <img
                src="/Archives/01.jpg"
                alt="Album Archives"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h4 className="font-bold text-sm text-gray-800">Album Archives</h4>
              <p className="text-gray-400 text-xs mt-1">Souvenirs (16 photos)</p>
            </div>
          </div>

          <div 
            onClick={() => setActiveModal("jeunesse")}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 group cursor-pointer hover:shadow-xl transition-all"
          >
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

      {/* FENÊTRE MODALE (POP-UP) */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            
            <div className="p-6 border-b flex items-center justify-between bg-blue-950 text-white">
              <h3 className="text-xl font-bold uppercase tracking-wide">
                Album : {activeModal === "femmes" && "Conférence Nationale des Femmes"}
                {activeModal === "conference-2025" && "Conférence Nationale des Églises ERPE-VAI"}
                {activeModal === "archives" && "Album Archives"}
                {activeModal === "jeunesse" && "Rencontre de la Jeunesse"}
              </h3>
              <button 
                onClick={() => setActiveModal(null)}
                className="bg-red-600 hover:bg-red-700 text-white w-10 h-10 rounded-full font-bold flex items-center justify-center transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[70vh]">
              {activeModal === "femmes" && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {Array.from({ length: totalPhotosFemmes }).map((_, index) => (
                    <div 
                      key={index} 
                      onClick={() => setCurrentImageIndex(index)}
                      className="aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-md hover:scale-[1.02] transition-transform cursor-pointer relative group"
                    >
                      <img 
                        src={`/femmes/${index + 1}.jpg`} 
                        alt={`Conférence Femmes ${index + 1}`} 
                        className="w-full h-full object-cover" 
                      />
                      <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-sm">
                        🔍 Agrandir
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeModal === "conference-2025" && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {Array.from({ length: totalPhotosConference }).map((_, index) => (
                    <div 
                      key={index} 
                      onClick={() => setCurrentImageIndex(index)}
                      className="aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-md hover:scale-[1.02] transition-transform cursor-pointer relative group"
                    >
                      <img 
                        src={`/Conference 2025/${index + 1}.jpg`} 
                        alt={`Conférence 2025 ${index + 1}`} 
                        className="w-full h-full object-cover" 
                      />
                      <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-sm">
                        🔍 Agrandir
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeModal === "archives" && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {Array.from({ length: totalPhotosArchives }).map((_, index) => {
                    const fileName = (index + 1).toString().padStart(2, '0');
                    return (
                      <div 
                        key={index} 
                        onClick={() => setCurrentImageIndex(index)}
                        className="aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-md hover:scale-[1.02] transition-transform cursor-pointer relative group"
                      >
                        <img 
                          src={`/Archives/${fileName}.jpg`} 
                          alt={`Archives ${fileName}`} 
                          className="w-full h-full object-cover" 
                        />
                        <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-sm">
                          🔍 Agrandir
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {activeModal === "jeunesse" && (
                <div className="py-12 text-center text-gray-500 font-semibold">
                  Photos de la Jeunesse à venir...
                </div>
              )}
            </div>

            <div className="p-4 border-t bg-gray-50 text-right">
              <button 
                onClick={() => setActiveModal(null)}
                className="px-6 py-2 bg-gray-800 text-white rounded-lg text-sm font-semibold hover:bg-gray-700"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* LIGHTBOX */}
      {currentImageIndex !== null && (
        <div className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4">
          <button 
            onClick={() => setCurrentImageIndex(null)}
            className="absolute top-6 right-6 text-white text-4xl hover:text-red-500 font-bold z-50 transition-colors"
          >
            ✕
          </button>

          <button 
            onClick={() => {
              const max = getMaxPhotos();
              setCurrentImageIndex((prev) => (prev! > 0 ? prev! - 1 : max - 1));
            }}
            className="absolute left-4 md:left-10 text-white bg-black/50 hover:bg-red-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold transition-colors z-50"
          >
            ❮
          </button>

          <div className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center">
            <img 
              src={
                activeModal === "femmes" 
                  ? `/femmes/${currentImageIndex + 1}.jpg` 
                  : activeModal === "conference-2025"
                  ? `/Conference 2025/${currentImageIndex + 1}.jpg`
                  : `/Archives/${(currentImageIndex + 1).toString().padStart(2, '0')}.jpg`
              } 
              alt="Photo en grand" 
              className="max-h-[85vh] max-w-full object-contain rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-2 text-white/80 bg-black/60 px-4 py-1 rounded-full text-sm">
              {currentImageIndex + 1} / {getMaxPhotos()}
            </div>
          </div>

          <button 
            onClick={() => {
              const max = getMaxPhotos();
              setCurrentImageIndex((prev) => (prev! < max - 1 ? prev! + 1 : 0));
            }}
            className="absolute right-4 md:right-10 text-white bg-black/50 hover:bg-red-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold transition-colors z-50"
          >
            ❯
          </button>
        </div>
      )}

      {/* PIED DE PAGE GLOBAL */}
      <Footer />

      <DonationModal 
        isOpen={isDonationOpen} 
        onClose={() => setIsDonationOpen(false)} 
      />

    </main>
  );
}