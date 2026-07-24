"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">

      {/* HERO + NAVBAR */}
      <section
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url('/church.jpg')" }}
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-900/80"></div>

        {/* NAVBAR EN RECTANGLE */}
        <header className="relative z-20 w-full h-20 bg-blue-950/90 backdrop-blur-md border-b border-blue-900 flex items-center justify-between px-6 md:px-12 text-white shadow-lg">
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

          <nav className="hidden md:flex gap-8 text-lg text-white font-medium">

            <Link
              href="/"
              className="hover:text-blue-300 transition"
            >
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown */}
              <div className="absolute left-0 mt-0 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-100">

                <div className="py-2">

                  <Link
                    href="/vie-eglise/notre-histoire"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                  >
                    Notre histoire
                  </Link>

                  <Link
                    href="/vie-eglise/cdn"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                  >
                    Le CDN
                  </Link>

                  <Link
                    href="/vie-eglise/departements"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                  >
                    Nos départements
                  </Link>

                  <Link
                    href="/vie-eglise/institut-pastoral"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                  >
                    Institut Pastoral
                  </Link>

                </div>
              </div>
            </div>

            <a
              href="#"
              className="hover:text-blue-300 transition"
            >
              Nos églises
            </a>

            <a
              href="#"
              className="hover:text-blue-300 transition"
            >
              Espace médias
            </a>
<button
  onClick={() => window.dispatchEvent(new CustomEvent('open-donation'))}
  className="bg-red-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-xl shadow transition-colors"
>
  Faire un don
</button>
          </nav>
        </header>

        {/* HERO CONTENT */}
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-[80vh] px-6 text-white">
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
      {/* VIE DE L'ÉGLISE */}
<section >
</section>
{/* DON */}
<section>

</section>

      {/* A PROPOS */}
      <section
        id="apropos"
        className="py-24 px-6 md:px-20 bg-gray-100"
      >
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
    <section
      id="president"
      className="pt-24 px-4 md:px-20 bg-gradient-to-r from-sky-400 to-blue-700 text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-end">
        
      {/* BLOC PHOTO ALIGNÉ AVEC LE TITRE */}
        <div className="flex justify-center w-full h-full items-center">
          <div className="bg-white p-3 rounded-3xl shadow-2xl inline-block leading-[0]">
            <Image
              src="/President.png"
              alt="Apôtre Henri Fayol Koffi"
              width={460} // Légèrement ajusté pour correspondre à la hauteur du bloc de texte
              height={460}
              className="rounded-2xl object-contain"
              priority
            />
          </div>
        </div>

        {/* BLOC TEXTE DU MESSAGE */}
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
{/* NOS PROGRAMMES */}
<section
  id="programmes"
  className="relative py-24 px-6 md:px-20 bg-cover bg-center"
  style={{ backgroundImage: "url('/IMG_2646.jpg')" }}
>

  {/* Overlay rouge */}
  <div className="absolute inset-0 bg-red-900/50"></div>

  <div className="relative z-10 max-w-6xl mx-auto">

    <h2 className="text-5xl font-black text-white text-center mb-14">
      NOS PROGRAMMES
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      {/* Programme 1 */}
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20 hover:scale-105 transition">

        <h3 className="text-3xl font-bold text-white mb-4">
          Mercredi
        </h3>

        <p className="text-gray-200 text-lg leading-8">
          Culte d'enseignement et d'édification
        </p>

        <div className="mt-6 text-yellow-400 font-bold text-xl">
          18H30 — 20H00
        </div>
      </div>

      {/* Programme 2 */}
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20 hover:scale-105 transition">

        <h3 className="text-3xl font-bold text-white mb-4">
          Vendredi
        </h3>

        <p className="text-gray-200 text-lg leading-8">
          Soirée de prière et de restauration des âmes
        </p>

        <div className="mt-6 text-yellow-400 font-bold text-xl">
          18H30 — 20H00
        </div>
      </div>

      {/* Programme 3 */}
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20 hover:scale-105 transition">

        <h3 className="text-3xl font-bold text-white mb-4">
          Dimanche
        </h3>

        <p className="text-gray-200 text-lg leading-8">
          Culte d'action de grâce
        </p>

        <div className="mt-6 text-yellow-400 font-bold text-xl">
          08H30 — 11H30
        </div>
      </div>

    </div>
  </div>
</section>
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
                  Explorez l'histoire en images de la Vision Apostolique Internationale. Des cultes mémorables aux cérémonies officielles, découvrez les temps forts qui marquent la vie de noséglises.
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
{activeGalerie && (
  <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 p-4 md:p-10" onClick={() => setActiveGalerie(null)}>
    <div className="relative bg-white rounded-2xl max-w-7xl mx-auto p-6 md:p-8" onClick={(e) => e.stopPropagation()}>
      
      <div className="flex items-center justify-between pb-6 border-b border-gray-200 mb-8">
        <h2 className="text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
          {GALERIES_DATA[activeGalerie].title}
        </h2>
        <button 
          onClick={() => setActiveGalerie(null)}
          className="flex items-center gap-2 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full text-sm font-semibold transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
          Fermer
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {GALERIES_DATA[activeGalerie].media.map((item, index) => (
          <div key={index} className="aspect-square bg-gray-100 rounded-xl overflow-hidden shadow-inner group">
            {item.type === 'video' ? (
              <video src={item.src} controls className="w-full h-full object-cover" />
            ) : (
              <img 
                src={item.src} 
                alt="" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
              />
            )}
          </div>
        ))}
      </div>

    </div>
  </div>
)}
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
                  Ne rappelle aucun événement majeur de l'église. Retrouvez l'intégralité de nos conférences, croisades et directs pour vivre la puissance et la direction du Seigneur Jésus où que vous soyez.
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
      <section
        id="conversion"
        className="py-24 px-6 md:px-20 bg-blue-900 text-white text-center"
      >
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
              Service Communication : 0545946345
            </p>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500">
          © 2026 ERPEVAI - Tous droits réservés
        </div>
      </section>

    </main>
  );
}