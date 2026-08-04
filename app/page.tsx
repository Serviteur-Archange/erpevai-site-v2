"use client";
import { supabase } from '@/lib/supabase';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MarqueeCommuniques from '@/app/components/MarqueeCommuniques';
import DonationModal from '@/app/DonationModal';

const GALERIES_DATA = {
  dedicace: {
    title: "Cérémonie de Dédicace",
    media: [
      { type: 'image', src: '/papaetpepe.jpg' },
      { type: 'image', src: '/IMG_2510.jpg' },
      { type: 'image', src: '/IMG_2512.jpg' },
      { type: 'image', src: '/IMG_2513.jpg' },
      { type: 'image', src: '/IMG_2515.jpg' },
      { type: 'image', src: '/IMG_2516.jpg' },
      { type: 'image', src: '/IMG_2518.jpg' },
      { type: 'image', src: '/IMG_2519.jpg' },
      { type: 'image', src: '/IMG_2521.jpg' },
      { type: 'image', src: '/IMG_2522.jpg' },
      { type: 'image', src: '/IMG_2523.jpg' },
      { type: 'image', src: '/IMG_2524.jpg' },
      { type: 'image', src: '/IMG_2525.jpg' },
      { type: 'image', src: '/IMG_2526.jpg' },
      { type: 'image', src: '/IMG_2530.jpg' },
      { type: 'image', src: '/IMG_2531.jpg' },
      { type: 'image', src: '/IMG_2532.jpg' },
      { type: 'image', src: '/IMG_2541.jpg' },
      { type: 'image', src: '/IMG_2542.jpg' },
      { type: 'image', src: '/IMG_2543.jpg' },
      { type: 'image', src: '/IMG_2545.jpg' },
      { type: 'image', src: '/IMG_2547.jpg' },
      { type: 'image', src: '/IMG_2548.jpg' },
      { type: 'image', src: '/IMG_2549.jpg' },
      { type: 'image', src: '/IMG_2550.jpg' },
      { type: 'image', src: '/IMG_2551.jpg' },
    ]
  },
  messages: {
    title: "Messages Inspirants",
    media: [
      { type: 'video', src: 'https://www.facebook.com/61573283174395/videos/4673697372866751' },
    ]
  },
  programmes: {
    title: "Programmes Spéciaux",
    media: [
      { type: 'image', src: '/church.jpg' },
      { type: 'image', src: '/Calendrier ERPE2A.jpg' },
    ]
  }
};

type GalerieKey = keyof typeof GALERIES_DATA;

export default function NotreHistoire() {
  const [activeGalerie, setActiveGalerie] = useState<GalerieKey | null>(null);
  const [isDonationOpen, setIsDonationOpen] = useState(false);

  // Liste des images pour le diaporama du Hero
  const heroImages = [
    "/church.jpg",
    "/Photo2.jpg",
    "/Photo3.jpg",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Écoute l'événement pour ouvrir le pop-up de don et gère le défilement du Hero
  useEffect(() => {
    const handleOpen = () => setIsDonationOpen(true);
    window.addEventListener('open-donation', handleOpen);

    const slideInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change d'image toutes les 5 secondes

    return () => {
      window.removeEventListener('open-donation', handleOpen);
      clearInterval(slideInterval);
    };
  }, [heroImages.length]);
  
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">

      {/* HERO + NAVBAR AVEC DIAPORAMA EN ARRIÈRE-PLAN */}
      <section className="relative bg-slate-950 overflow-hidden">
        
        {/* Images du carrousel en fondu */}
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

        {/* Overlay sombre pour la lisibilité */}
        <div className="absolute inset-0 bg-blue-900/60 z-10"></div>

        {/* NAVBAR EN RECTANGLE */}
        <header className="relative z-30 w-full h-20 bg-blue-950/90 backdrop-blur-md border-b border-blue-900 flex items-center justify-between px-6 md:px-12 text-white shadow-lg">
          <div className="relative flex items-center h-full">
            <a href="/" className="absolute top--5 left-0 w-20 h-20 md:w-28 md:h-28 z-30 drop-shadow inline-block transition-transform hover:scale-105">
              <Image
                src="/logo.png"
                alt="Logo ERPEVAI"
                fill
                className="object-contain"
              />
            </a>

            <div className="pl-24 md:pl-32 flex flex-col justify-center">
              <h1 className="text-lg md:text-xl font-bold leading-tight">
                Église de Réveil du Plein Évangile
              </h1>
              <p className="text-xs text-gray-300 hidden sm:block">
                Vision Apostolique Internationale
              </p>
            </div>
          </div>

          <nav className="hidden md:flex gap-8 text-lg text-white font-medium items-center">
            <Link href="/" className="hover:text-blue-300 transition">
              Accueil
            </Link>

            {/* MENU DÉROULANT */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-blue-300 transition text-white font-medium text-lg h-full py-2">
                Vie de l'Église
                <svg
                  className="w-4 h-4 transition-transform group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown */}
              <div className="absolute left-0 mt-0 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-100">
                <div className="py-2">
                  <Link href="/vie-eglise/notre-histoire" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">
                    Notre histoire
                  </Link>
                  <Link href="/vie-eglise/cdn" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">
                    Le CDN
                  </Link>
                  <Link href="/vie-eglise/departements" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">
                    Nos départements
                  </Link>
                  <Link href="/vie-eglise/institut-pastoral" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">
                    Institut Pastoral
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/Nos-eglises" className="hover:text-blue-300 transition">Nos églises</Link>

            <a href="#" className="hover:text-blue-300 transition">
              Espace médias
            </a>
            
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-donation'))}
              className="bg-red-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-xl shadow transition-colors cursor-pointer"
            >
              Faire un don
            </button>
          </nav>
        </header>

        {/* HERO CONTENT */}
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

      {/* INTÉGRATION DU BANDEAU DÉFILANT DYNAMIQUE */}
      <MarqueeCommuniques />

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
                <h3 className="text-4xl font-black text-blue-700">plus de 30 ans</h3>
                <p>Années de ministère</p>
              </div>

              <div className="bg-white shadow-xl rounded-2xl p-6">
                <h3 className="text-4xl font-black text-red-600">+1000</h3>
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

      {/* SECTION VOLET INFORMATIONS / CONSEIL NATIONAL */}
      <div style={{ backgroundColor: '#111827', padding: '80px 16px', color: '#ffffff', width: '100%' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            
            <div style={{ backgroundColor: '#1f2937', borderRadius: '16px', padding: '24px', border: '1px solid #374151', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ fontSize: '12px', fontWeight: '600', color: '#f87171', textTransform: 'uppercase', backgroundColor: '#450a0a', padding: '4px 12px', borderRadius: '6px', border: '1px solid #7f1d1d' }}>
                    Direction
                  </span>
                  <span style={{ fontSize: '12px', color: '#9ca3af' }}>28 Juil 2026</span>
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px', color: '#ffffff' }}>
                  Directive Nationale pour le mois d'août
                </h3>
                <p style={{ color: '#d1d5db', fontSize: '14px', lineHeight: '1.6', marginBottom: '24px' }}>
                  Message important du Conseil National de Direction concernant les orientations spirituelles et administratives applicables dans toutes nos assemblées.
                </p>
              </div>
              <button style={{ color: '#f87171', fontSize: '14px', fontWeight: '600', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}>
                Lire le communiqué complet &rarr;
              </button>
            </div>

            <div style={{ backgroundColor: '#1f2937', borderRadius: '16px', padding: '24px', border: '1px solid #374151', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ fontSize: '12px', fontWeight: '600', color: '#f87171', textTransform: 'uppercase', backgroundColor: '#450a0a', padding: '4px 12px', borderRadius: '6px', border: '1px solid #7f1d1d' }}>
                    Événement
                  </span>
                  <span style={{ fontSize: '12px', color: '#9ca3af' }}>À venir</span>
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px', color: '#ffffff' }}>
                  Grande Convention Internationale
                </h3>
                <p style={{ color: '#d1d5db', fontSize: '14px', lineHeight: '1.6', marginBottom: '24px' }}>
                  Informations relatives à l'organisation, aux délégations et aux programmes de notre prochain rassemblement global.
                </p>
              </div>
              <button style={{ color: '#f87171', fontSize: '14px', fontWeight: '600', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}>
                Consulter les détails &rarr;
              </button>
            </div>

            <div style={{ backgroundColor: '#1f2937', borderRadius: '16px', padding: '24px', border: '1px solid #374151', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ fontSize: '12px', fontWeight: '600', color: '#f87171', textTransform: 'uppercase', backgroundColor: '#450a0a', padding: '4px 12px', borderRadius: '6px', border: '1px solid #7f1d1d' }}>
                    Séminaire
                  </span>
                  <span style={{ fontSize: '12px', color: '#9ca3af' }}>Important</span>
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px', color: '#ffffff' }}>
                  Formation des Responsables Locaux
                </h3>
                <p style={{ color: '#d1d5db', fontSize: '14px', lineHeight: '1.6', marginBottom: '24px' }}>
                  Calendrier des sessions de formation pastorale et administrative initiées par le secrétariat général national.
                </p>
              </div>
              <button style={{ color: '#f87171', fontSize: '14px', fontWeight: '600', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}>
                Voir le calendrier &rarr;
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* MÉDIAS */}
      <section id="medias" className="py-24 px-6 md:px-20 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          
          <h2 className="text-5xl font-black text-blue-900 mb-12">
            MÉDIAS & ÉVÉNEMENTS
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* CARTE 1 */}
            <div 
              onClick={() => setActiveGalerie('dedicace')}
              className="group cursor-pointer bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image src="/papaetpepe.jpg" alt="Événement" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  NOTRE GALERIE PHOTO
                </h3>
                <p className="mt-4 text-gray-600">
                  Explorez l'histoire en images de la Vision Apostolique Internationale. Des cultes mémorables aux cérémonies officielles, découvrez les temps forts qui marquent la vie de nos églises.
                </p>
              </div>
            </div>

            {/* CARTE 2 */}
            <div 
              onClick={() => setActiveGalerie('messages')}
              className="group cursor-pointer bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image src="/Visuel Video Programme.jpg" alt="Messages" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  MESSAGES INSPIRANTS
                </h3>
                <p className="mt-4 text-gray-600">
                 Nourrissez votre foi et fortifiez votre leadership grâce à notre bibliothèque de messages inspirants. Des ressources spirituelles conçues pour éclairer les nations et restaurer les vies.
                </p>
              </div>
            </div>

            {/* CARTE 3 */}
            <div 
              onClick={() => setActiveGalerie('programmes')}
              className="group cursor-pointer bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image src="/516388134_718770764228625_8196039677422972509_n.jpg" alt="Programmes" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  NOS VIDEOS
                </h3>
                <p className="mt-4 text-gray-600">
                  Retrouvez l'intégralité de nos conférences, croisades et directs pour vivre la puissance et la direction du Seigneur Jésus où que vous soyez.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* POPUP LIGHTBOX */}
        {activeGalerie && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative shadow-2xl text-left">
              
              <button 
                onClick={() => setActiveGalerie(null)}
                className="absolute top-4 right-4 bg-slate-100 hover:bg-red-100 text-slate-700 hover:text-red-600 font-bold p-2 px-4 rounded-full transition-colors text-sm"
              >
                ✕ Fermer
              </button>

              <h3 className="text-2xl font-black text-slate-900 mb-6 uppercase border-b pb-3">
                {GALERIES_DATA[activeGalerie].title}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {GALERIES_DATA[activeGalerie].media.map((item, index) => (
                  <div key={index} className="relative rounded-xl overflow-hidden shadow-md bg-slate-900 aspect-[16/9]">
                    {item.type === 'image' ? (
                      <Image src={item.src} alt={`Média ${index}`} fill className="object-cover" />
                    ) : (
                      <video src={item.src} controls className="w-full h-full object-cover" />
                    )}
                  </div>
                ))}
              </div>

            </div>
          </div>
        )}
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

          <a
            href="https://wa.me/2250709172800"
            target="_blank"
            className="inline-block mt-10 bg-green-500 hover:bg-green-600 transition px-10 py-5 rounded-full text-2xl font-bold shadow-2xl"
          >
            WhatsApp : 0709172800
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 md:px-20 bg-black text-white">
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
              Service Communication : 0545946345
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500">
          © 2026 ERPEVAI - Tous droits réservés
        </div>
        <div style={{ textAlign: 'center', marginTop: '40px', paddingBottom: '20px' }}>
          <a href="/admin" style={{ color: '#4b5563', fontSize: '12px', textDecoration: 'none' }}>
            Espace Admin
          </a>
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