"use client";

import { supabase } from '@/lib/supabase';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DonationModal from './DonationModal';
import MarqueeCommuniques from './components/MarqueeCommuniques';
import Footer from './components/Footer';

interface Enseignement {
  id?: string;
  title: string;
  category: string;
  image_url?: string;
  excerpt: string;
  content: string;
  slug?: string;
  created_at?: string;
}

export default function Home() {
  const [isDonationOpen, setIsDonationOpen] = useState(false);
  const [selectedCommunique, setSelectedCommunique] = useState<{ title: string; date: string; content: string } | null>(null);
  
  const [communiques, setCommuniques] = useState<Array<{ title: string; content: string; created_at?: string; category?: string }>>([]);
  const [enseignements, setEnseignements] = useState<Enseignement[]>([]);

  const heroImages = [
    "/church.jpg",
    "/Photo2.jpg",
    "/Photo3.jpg",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleOpen = () => setIsDonationOpen(true);
    window.addEventListener('open-donation', handleOpen);

    // 1. Charger STRICTEMENT la table "communiques"
    const fetchPublicCommuniques = async () => {
      try {
        const { data, error } = await supabase
          .from('communiques')
          .select('*')
          .order('created_at', { ascending: false });

        if (!error && data) {
          setCommuniques(data);
        } else {
          // Fallback sur l'API interne au besoin
          const response = await fetch('/api/communiques');
          const result = await response.json();
          if (result.data && Array.isArray(result.data)) {
            setCommuniques(result.data);
          }
        }
      } catch (err) {
        console.error("Erreur lors de la récupération des communiqués :", err);
      }
    };

    // 2. Charger STRICTEMENT la table "enseignements"
    const fetchPublicEnseignements = async () => {
      try {
        const { data, error } = await supabase
          .from('enseignements')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(3);

        if (!error && data) {
          setEnseignements(data);
        }
      } catch (err) {
        console.error("Erreur lors de la récupération des enseignements :", err);
      }
    };

    fetchPublicCommuniques();
    fetchPublicEnseignements();

    const slideInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => {
      window.removeEventListener('open-donation', handleOpen);
      clearInterval(slideInterval);
    };
  }, [heroImages.length]);
  
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">

      {/* HERO SECTION AVEC DIAPORAMA */}
      <section className="relative bg-slate-950 overflow-hidden">
        {heroImages.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100 z-0' : 'opacity-0 -z-10'
            }`}
          >
            <Image 
              src={src} 
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-blue-900/60 z-10"></div>
        <div className="relative z-20 flex flex-col items-center justify-center text-center h-[80vh] px-6 text-white">
          <h1 className="text-5xl md:text-8xl font-black leading-tight">
            EGLISE DE REVEIL DU PLEIN EVANGILE
          </h1>
          <p className="mt-6 text-2xl md:text-4xl font-light">
            Vision Apostolique Internationale
          </p>
          <div className="mt-8 bg-red-600 px-8 py-4 rounded-full text-xl font-bold shadow-2xl">
            ÉCLAIRER • RESTAURER • CONQUÉRIR
          </div>
        </div>
      </section>

      {/* BANDEAU DÉFILANT DYNAMIQUE */}
      {/* @ts-ignore */}
      <MarqueeCommuniques 
        communiques={communiques as any}
        onCommuniqueClick={(item: any) => setSelectedCommunique({
          title: item.title,
          date: item.created_at ? item.created_at.split('T')[0].split('-').reverse().join('/') : (item.category || "Annonce"),
          content: item.content
        })}
      />

      {/* A PROPOS */}
      <section id="apropos" className="py-24 px-6 md:px-20 bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-5xl font-black mb-8 text-blue-900">
              A PROPOS DE NOUS
            </h2>
            <p className="text-xl leading-9 text-gray-700">
              L' Église de Réveil du Plein Évangile - Vision Apostolique Internationale est un ministère dynamique dédié à la transformation et à l'accompagnement des vies. Fondée sur une foi solide et un espoir inébranlable, notre communauté grandit avec force pour guider des milliers de personnes vers leur destinée en Jésus-Christ.
            </p>
            <p className="text-xl leading-9 text-gray-700 mt-6">
              Notre vision est d’éclairer les nations par la parole de Dieu,
              restaurer les vies brisées et conquérir les âmes pour Christ.
            </p>
            <div className="mt-10 flex gap-4 flex-wrap">
              <div className="bg-white shadow-xl rounded-2xl p-6">
                <h3 className="text-4xl font-black text-blue-700">+30 ans</h3>
                <p>Années de ministère</p>
              </div>
              <div className="bg-white shadow-xl rounded-2xl p-6">
                <h3 className="text-4xl font-black text-red-600">+30.000</h3>
                <p>Âmes restaurées</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-2xl text-center">
            <Image
              src="/fondateur.png"
              alt="Fondateur de l'Église"
              width={500}
              height={500}
              className="rounded-3xl mx-auto"
            />
            <h3 className="text-2xl font-bold mt-6 text-blue-900">
              Apôtre Ouli Samuel
            </h3>
            <p className="text-gray-600 mt-4 text-lg">
              Visionnaire et serviteur de Dieu ayant posé les fondements
              spirituels du ministère ERPEVAI.
            </p>
          </div>
        </div>
      </section>

      {/* PRESIDENT */}
      <section id="president" className="pt-24 px-4 md:px-20 bg-gradient-to-r from-sky-400 to-blue-700 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-end">
          <div className="flex justify-center w-full h-full items-center">
            <div className="bg-white p-3 rounded-3xl shadow-2xl inline-block leading-[0]">
              <Image
                src="/President.png"
                alt="Apôtre Henri Fayol Koffi"
                width={460}
                height={460}
                className="rounded-2xl object-contain"
                priority
              />
            </div>
          </div>
          <div className="pb-24">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
              MESSAGE DU PRÉSIDENT DU CONSEIL DE DIRECTION NATIONAL
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-sky-100 mb-6">
              Apôtre Henri Fayol Koffi
            </h3>
            <p className="text-lg md:text-xl leading-relaxed text-white/90">
              Bienvenue dans notre communauté ! C'est une joie immense de vous accueillir sur notre 
              plateforme numérique. Que vous nous découvriez pour la première fois ou que vous 
              cherchiez un lieu pour grandir spirituellement, sachez que vous êtes ici chez vous. 
              Notre vision est simple mais profonde : nous croyons qu'une église doit avant tout 
              être en bonne santé pour pouvoir grandir de manière solide et durable. Pour nous, 
              la croissance n'est pas seulement une affaire de chiffres, c'est le reflet d'une 
              vie spirituelle authentique et vibrante. C'est pourquoi nous mettons un point d'honneur 
              à cultiver la qualité de notre relation avec Dieu et les uns avec les autres. 
              <span className="block mt-4 font-semibold italic text-sky-200">
                "Une église saine est une église forte, capable de transformer des vies."
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* INFORMATIONS NATIONALES / CONSEIL NATIONAL */}
      <div style={{ backgroundColor: '#111827', padding: '80px 16px', color: '#ffffff', width: '100%' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{ backgroundColor: '#dc2626', color: '#ffffff', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '9999px' }}>
              Communiqués Officiels
            </span>
            <h2 style={{ fontSize: '36px', fontWeight: '800', marginTop: '16px', marginBottom: '16px', color: '#ffffff' }}>
              INFORMATIONS NATIONALES
            </h2>
            <p style={{ color: '#d1d5db', maxWidth: '672px', margin: '0 auto', fontSize: '16px' }}>
              Retrouvez ici les notes d'information, directives et actualités importantes émanant du Conseil National de Direction pour l'ensemble de nos églises.
            </p>
          </div>

          {communiques.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '48px 0', backgroundColor: '#1f2937', borderRadius: '16px', border: '1px solid #374151' }}>
              <p style={{ color: '#9ca3af', fontSize: '16px' }}>Aucune information nationale pour le moment.</p>
            </div>
          ) : (
            <div style={{ position: 'relative' }}>
              
              <button 
                onClick={() => {
                  const container = document.getElementById('slider-communiques');
                  if (container) container.scrollBy({ left: -350, behavior: 'smooth' });
                }}
                style={{
                  position: 'absolute', left: '-25px', top: '50%', transform: 'translateY(-50%)', zIndex: 10,
                  backgroundColor: '#1f2937', color: '#ffffff', border: '1px solid #374151',
                  width: '45px', height: '45px', borderRadius: '50%', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
                }}
                className="hidden md:flex hover:bg-red-600 transition-colors"
              >
                &#10094;
              </button>

              <div 
                id="slider-communiques"
                style={{ 
                  display: 'flex', 
                  gap: '24px', 
                  overflowX: 'auto', 
                  scrollSnapType: 'x mandatory', 
                  scrollbarWidth: 'none', 
                  msOverflowStyle: 'none',
                  paddingBottom: '16px',
                  paddingTop: '4px'
                }}
              >
                {communiques.map((item, index) => (
                  <div 
                    key={index} 
                    style={{ 
                      flex: '0 0 350px', 
                      scrollSnapAlign: 'start',
                      backgroundColor: '#1f2937', 
                      borderRadius: '16px', 
                      padding: '24px', 
                      border: '1px solid #374151', 
                      display: 'flex', 
                      flexDirection: 'column', 
                      justifyContent: 'space-between',
                      minHeight: '280px'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                        <span style={{ fontSize: '12px', fontWeight: '600', color: '#f87171', textTransform: 'uppercase', backgroundColor: '#450a0a', padding: '4px 12px', borderRadius: '6px', border: '1px solid #7f1d1d' }}>
                          {item.category || 'ANNONCE'}
                        </span>
                        <span style={{ fontSize: '12px', color: '#9ca3af' }}>
                          {item.created_at ? item.created_at.split('T')[0].split('-').reverse().join('/') : ''}
                        </span>
                      </div>
                      <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px', color: '#ffffff' }}>
                        {item.title}
                      </h3>
                      <p style={{ color: '#d1d5db', fontSize: '14px', lineHeight: '1.6', marginBottom: '24px', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {item.content}
                      </p>
                    </div>
                    <button 
                      onClick={() => setSelectedCommunique({
                        title: item.title,
                        date: item.created_at ? item.created_at.split('T')[0].split('-').reverse().join('/') : (item.category || 'Annonce'),
                        content: item.content
                      })}
                      style={{ color: '#f87171', fontSize: '14px', fontWeight: '600', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                    >
                      Lire le communiqué complet &rarr;
                    </button>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => {
                  const container = document.getElementById('slider-communiques');
                  if (container) container.scrollBy({ left: 350, behavior: 'smooth' });
                }}
                style={{
                  position: 'absolute', right: '-25px', top: '50%', transform: 'translateY(-50%)', zIndex: 10,
                  backgroundColor: '#1f2937', color: '#ffffff', border: '1px solid #374151',
                  width: '45px', height: '45px', borderRadius: '50%', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
                }}
                className="hidden md:flex hover:bg-red-600 transition-colors"
              >
                &#10095;
              </button>

            </div>
          )}

        </div>
      </div>

      {/* SECTION ENSEIGNEMENTS (DYNAMIQUE) */}
      <section id="enseignements" className="py-24 px-6 md:px-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-red-600 font-bold text-xs uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-100">
                Méditations & Éditoriaux
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-blue-950 mt-3 tracking-tight">
                ENSEIGNEMENTS
              </h2>
              <p className="text-gray-600 text-base md:text-lg mt-2 max-w-2xl">
                Découvrez les derniers messages et études bibliques conçus pour nourrir votre foi et fortifier votre marche spirituelle au quotidien.
              </p>
            </div>

            {enseignements.length > 0 && (
              <Link 
                href="/enseignements"
                className="inline-flex items-center gap-2 bg-blue-950 hover:bg-blue-900 text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-colors shadow-md w-fit"
              >
                Voir tous les enseignements →
              </Link>
            )}
          </div>

          {/* AFFICHAGE CONDITIONNEL DES ENSEIGNEMENTS */}
          {enseignements.length === 0 ? (
            <div className="text-center py-16 px-6 bg-white rounded-3xl border border-gray-200 shadow-sm">
              <p className="text-gray-500 text-lg font-medium">
                Aucun enseignement disponible pour le moment.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {enseignements.map((item) => (
                <Link 
                  key={item.id || item.slug}
                  href={`/enseignements/${item.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 border border-gray-200/80 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                      {item.image_url ? (
                        <img
                          src={item.image_url}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                        />
                      ) : (
                        <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-500">
                          Pas d'image
                        </div>
                      )}
                      <div className="absolute top-4 left-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-950 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-black text-slate-900 group-hover:text-blue-950 transition-colors leading-snug tracking-tight">
                        {item.title}
                      </h3>
                      {item.excerpt && (
                        <p className="text-gray-600 text-sm mt-3 line-clamp-3 leading-relaxed">
                          {item.excerpt}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="px-6 pb-6 pt-0">
                    <span className="text-blue-900 group-hover:text-red-600 font-bold text-sm flex items-center gap-1 transition-colors">
                      Lire l'article complet →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* CONVERSION */}
      <section id="conversion" className="py-24 px-6 md:px-20 bg-blue-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-black mb-8">
            VEUX-TU DONNER TA VIE À JÉSUS ?
          </h2>
          <p className="text-2xl leading-10 text-blue-100">
            Jésus-Christ t’aime et veut transformer ta vie.
            Si tu désires parler à un pasteur et commencer une nouvelle vie avec Dieu,
            contacte-nous maintenant.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">
            <a
              href="https://wa.me/2250709172800"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-full text-xl font-bold shadow-2xl flex items-center justify-center"
            >
              WhatsApp : 0709172800
            </a>
            <a
              href="https://wa.me/2250545423103"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-full text-xl font-bold shadow-2xl flex items-center justify-center"
            >
              WhatsApp : 0545423103
            </a>
          </div>
        </div>
      </section>

      {/* PIED DE PAGE GLOBAL */}
      <Footer />

      {/* MODALE DU COMMUNIQUÉ */}
      {selectedCommunique && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 text-left">
          <div className="bg-gray-900 border border-gray-800 text-white rounded-3xl max-w-lg w-full p-6 md:p-8 relative shadow-2xl">
            <button 
              onClick={() => setSelectedCommunique(null)}
              className="absolute top-4 right-4 bg-gray-800 hover:bg-red-900/50 text-gray-300 hover:text-red-400 font-bold p-2 px-4 rounded-full transition-colors text-sm cursor-pointer"
            >
              ✕ Fermer
            </button>
            <span className="text-xs font-semibold uppercase tracking-wider text-red-400 bg-red-950 px-3 py-1 rounded-full border border-red-900">
              {selectedCommunique.date}
            </span>
            <h3 className="text-2xl font-bold mt-4 mb-3 text-white">{selectedCommunique.title}</h3>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              {selectedCommunique.content}
            </p>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSelectedCommunique(null)}
                className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition cursor-pointer"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODALE DE DON */}
      <DonationModal 
        isOpen={isDonationOpen} 
        onClose={() => setIsDonationOpen(false)} 
      />

    </main>
  );
}