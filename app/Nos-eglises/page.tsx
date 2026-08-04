'use client';
import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import DonationModal from '../DonationModal';

export default function NosEglisesPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDonationOpen, setIsDonationOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsDonationOpen(true);
    window.addEventListener('open-donation', handleOpen);
    return () => window.removeEventListener('open-donation', handleOpen);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      
      {/* 1. HEADER GLOBAL */}
<header className="relative z-40 w-full h-20 bg-red-600 backdrop-blur-md border-b border-red-500 shadow-lg">
  <div className="relative flex items-center h-full px-4 md:px-8 justify-between max-w-7xl mx-auto">
    
    <div className="relative flex items-center h-full">
      <Link href="/" className="absolute top-[-5px] left-0 w-20 h-20 md:w-28 md:h-28 z-50 drop-shadow-md">
        <Image
          src="/logo.png"
          alt="Logo ERPEVAI"
          fill
          className="object-contain"
        />
      </Link>
      <div className="pl-24 md:pl-32 flex flex-col justify-center">
        <h1 className="text-lg md:text-xl font-bold leading-tight text-white">
          Église de Réveil du Plein Évangile
        </h1>
        <p className="text-sm text-white/80 hidden sm:block">
          Vision Apostolique Internationale
        </p>
      </div>
    </div>

    <div className="flex items-center gap-8">
      <nav className="hidden md:flex items-center gap-8 text-lg font-medium text-white relative">
        <Link href="/" className="hover:text-red-200 transition-colors">Accueil</Link>
        
        <div 
          className="relative py-2 cursor-pointer"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <button className="hover:text-red-200 transition-colors flex items-center gap-1 focus:outline-none">
            Vie de l'Église
            <svg className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-slate-100 py-2 text-slate-800 flex flex-col z-50">
              <Link href="/vie-eglise/notre-histoire" className="px-4 py-2.5 hover:bg-slate-50 text-sm font-semibold transition-colors text-slate-700 hover:text-green-600">Notre histoire</Link>
              <Link href="/vie-eglise/cdn" className="px-4 py-2.5 hover:bg-slate-50 text-sm font-semibold transition-colors text-slate-700 hover:text-green-600">Le CDN</Link>
              <Link href="/vie-eglise/departements" className="px-4 py-2.5 hover:bg-slate-50 text-sm font-semibold transition-colors text-slate-700 hover:text-green-600">Nos départements</Link>
              <Link href="/vie-eglise/institut-pastoral" className="px-4 py-2.5 bg-slate-50 text-sm font-bold transition-colors text-green-600">Institut Pastoral</Link>
            </div>
          )}
        </div>

        <Link href="/Nos-eglises" className="hover:text-red-200 transition-colors">Nos églises</Link>
        <Link href="/medias" className="hover:text-red-200 transition-colors">Espace médias</Link>
      </nav>

      <button 
        onClick={() => window.dispatchEvent(new CustomEvent('open-donation'))}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-xl text-sm transition-all shadow-md"
      >
        Faire un don
      </button>
    </div>
  </div>
</header>

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
            <p className="text-4xl font-black text-blue-400">4</p>
            <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">grandes régions pastorales</p>
          </div>
          <div className="space-y-1">
            <p className="text-4xl font-black text-amber-500">~+6000</p>
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
    <p className="text-gray-600">Retrouvez chaque ville, son pasteur responsable et contactez-les directement.</p>
  </div>

  <div className="overflow-x-auto shadow-lg rounded-2xl border border-gray-200 bg-white">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="bg-red-600 text-white uppercase text-sm tracking-wider">
          <th className="py-4 px-6">Ville / Localité</th>
          <th className="py-4 px-6">Pasteur Responsable</th>
          <th className="py-4 px-6">Contact / Téléphone</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 text-gray-700 text-sm">
        
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Abengourou</td>
          <td className="py-4 px-6">Pasteur Yao Koffi</td>
          <td className="py-4 px-6"><a href="tel:+2250500000010" className="text-red-600 font-bold hover:underline">+225 05 00 00 00 10</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Aboisso</td>
          <td className="py-4 px-6">Pasteur N'Cho Aka</td>
          <td className="py-4 px-6"><a href="tel:+2250500000013" className="text-red-600 font-bold hover:underline">+225 05 00 00 00 13</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Adiaké</td>
          <td className="py-4 px-6">Pasteur Amon Roger</td>
          <td className="py-4 px-6"><a href="tel:+2250500000016" className="text-red-600 font-bold hover:underline">+225 05 00 00 00 16</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Adzopé</td>
          <td className="py-4 px-6">Pasteur Yapi Atsé</td>
          <td className="py-4 px-6"><a href="tel:+2250700000066" className="text-red-600 font-bold hover:underline">+225 07 00 00 00 66</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Agboville</td>
          <td className="py-4 px-6">Pasteur Kouassi Jean</td>
          <td className="py-4 px-6"><a href="tel:+2250700000001" className="text-red-600 font-bold hover:underline">+225 07 00 00 00 01</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Agnibilékrou</td>
          <td className="py-4 px-6">Pasteur Adou Koffi</td>
          <td className="py-4 px-6"><a href="tel:+2250100000012" className="text-red-600 font-bold hover:underline">+225 01 00 00 00 12</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Akoupé</td>
          <td className="py-4 px-6">Pasteur Effi N'Cho</td>
          <td className="py-4 px-6"><a href="tel:+2250100000067" className="text-red-600 font-bold hover:underline">+225 01 00 00 00 67</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Alépé</td>
          <td className="py-4 px-6">Pasteur Ossohou Pierre</td>
          <td className="py-4 px-6"><a href="tel:+2250700000069" className="text-red-600 font-bold hover:underline">+225 07 00 00 00 69</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Arrah</td>
          <td className="py-4 px-6">Pasteur N'Guessan Assoumou</td>
          <td className="py-4 px-6"><a href="tel:+2250500000047" className="text-red-600 font-bold hover:underline">+225 05 00 00 00 47</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Bangolo</td>
          <td className="py-4 px-6">Pasteur Sahi Edmond</td>
          <td className="py-4 px-6"><a href="tel:+2250500000085" className="text-red-600 font-bold hover:underline">+225 05 00 00 00 85</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Béoumi</td>
          <td className="py-4 px-6">Pasteur Kouadio N'Guessan</td>
          <td className="py-4 px-6"><a href="tel:+2250500000131" className="text-red-600 font-bold hover:underline">+225 05 00 00 01 31</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Biankouma</td>
          <td className="py-4 px-6">Pasteur Mahi Gueu</td>
          <td className="py-4 px-6"><a href="tel:+2250500000082" className="text-red-600 font-bold hover:underline">+225 05 00 00 00 82</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Bloléquin</td>
          <td className="py-4 px-6">Pasteur Gueï Nestor</td>
          <td className="py-4 px-6"><a href="tel:+2250100000087" className="text-red-600 font-bold hover:underline">+225 01 00 00 00 87</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Bocanda</td>
          <td className="py-4 px-6">Pasteur Yao N'Guessan</td>
          <td className="py-4 px-6"><a href="tel:+2250500000050" className="text-red-600 font-bold hover:underline">+225 05 00 00 00 50</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Bondoukou</td>
          <td className="py-4 px-6">Pasteur Kobenan Kouassi</td>
          <td className="py-4 px-6"><a href="tel:+2250790000060" className="text-red-600 font-bold hover:underline">+225 07 90 00 00 60</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Bongouanou</td>
          <td className="py-4 px-6">Pasteur Aka Aman</td>
          <td className="py-4 px-6"><a href="tel:+2250100000046" className="text-red-600 font-bold hover:underline">+225 01 00 00 00 46</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Bonoua</td>
          <td className="py-4 px-6">Pasteur Aka Joseph</td>
          <td className="py-4 px-6"><a href="tel:+2250100000015" className="text-red-600 font-bold hover:underline">+225 01 00 00 00 15</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Botro</td>
          <td className="py-4 px-6">Pasteur N'Dri Koffi</td>
          <td className="py-4 px-6"><a href="tel:+2250700000132" className="text-red-600 font-bold hover:underline">+225 07 00 00 01 32</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Bouaflé</td>
          <td className="py-4 px-6">Pasteur Kouassi Jean-Marc</td>
          <td className="py-4 px-6"><a href="tel:+2250500000104" className="text-red-600 font-bold hover:underline">+225 05 00 00 01 04</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Bouaké</td>
          <td className="py-4 px-6">Pasteur Konan Blaise</td>
          <td className="py-4 px-6"><a href="tel:+2250100000003" className="text-red-600 font-bold hover:underline">+225 01 00 00 00 03</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Bouna</td>
          <td className="py-4 px-6">Pasteur Kambiré Hien</td>
          <td className="py-4 px-6"><a href="tel:+2250100000154" className="text-red-600 font-bold hover:underline">+225 01 00 00 01 54</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Boundiali</td>
          <td className="py-4 px-6">Pasteur Koné Zana</td>
          <td className="py-4 px-6"><a href="tel:+2250700000116" className="text-red-600 font-bold hover:underline">+225 07 00 00 01 16</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Buyo</td>
          <td className="py-4 px-6">Pasteur Lohoues Paul</td>
          <td className="py-4 px-6"><a href="tel:+2250700000005" className="text-red-600 font-bold hover:underline">+225 07 00 00 00 05</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Dabakala</td>
          <td className="py-4 px-6">Pasteur Ouattara Lacina</td>
          <td className="py-4 px-6"><a href="tel:+2250700000135" className="text-red-600 font-bold hover:underline">+225 07 00 00 01 35</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Dabou</td>
          <td className="py-4 px-6">Pasteur Agnero Gbalou</td>
          <td className="py-4 px-6"><a href="tel:+2250700000063" className="text-red-600 font-bold hover:underline">+225 07 00 00 00 63</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Daloa</td>
          <td className="py-4 px-6">Pasteur Zouzoua Paul</td>
          <td className="py-4 px-6"><a href="tel:+2250160000030" className="text-red-600 font-bold hover:underline">+225 01 60 00 00 30</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Danané</td>
          <td className="py-4 px-6">Pasteur Diomandé Siaka</td>
          <td className="py-4 px-6"><a href="tel:+2250100000081" className="text-red-600 font-bold hover:underline">+225 01 00 00 00 81</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Daoukro</td>
          <td className="py-4 px-6">Pasteur Bini Kouamé</td>
          <td className="py-4 px-6"><a href="tel:+2250100000043" className="text-red-600 font-bold hover:underline">+225 01 00 00 00 43</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Dianra</td>
          <td className="py-4 px-6">Pasteur Sylla Morifing</td>
          <td className="py-4 px-6"><a href="tel:+2250500000146" className="text-red-600 font-bold hover:underline">+225 05 00 00 01 46</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Dikodougou</td>
          <td className="py-4 px-6">Pasteur Coulibaly Yacouba</td>
          <td className="py-4 px-6"><a href="tel:+2250100000111" className="text-red-600 font-bold hover:underline">+225 01 00 00 01 11</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Dimbokro</td>
          <td className="py-4 px-6">Pasteur Koffi Lazare</td>
          <td className="py-4 px-6"><a href="tel:+2250100000049" className="text-red-600 font-bold hover:underline">+225 01 00 00 00 49</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Divo</td>
          <td className="py-4 px-6">Pasteur Gnepa François</td>
          <td className="py-4 px-6"><a href="tel:+2250700000033" className="text-red-600 font-bold hover:underline">+225 07 00 00 00 33</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Djékanou</td>
          <td className="py-4 px-6">Pasteur Koffi N'Dri</td>
          <td className="py-4 px-6"><a href="tel:+2250500000041" className="text-red-600 font-bold hover:underline">+225 05 00 00 00 41</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Doropo</td>
          <td className="py-4 px-6">Pasteur Dah Sansan</td>
          <td className="py-4 px-6"><a href="tel:+2250500000155" className="text-red-600 font-bold hover:underline">+225 05 00 00 01 55</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Duékoué</td>
          <td className="py-4 px-6">Pasteur Gba Théophile</td>
          <td className="py-4 px-6"><a href="tel:+2250100000084" className="text-red-600 font-bold hover:underline">+225 01 00 00 00 84</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Ferkessédougou</td>
          <td className="py-4 px-6">Pasteur Tuo Péhé</td>
          <td className="py-4 px-6"><a href="tel:+2250700000113" className="text-red-600 font-bold hover:underline">+225 07 00 00 01 13</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Fresco</td>
          <td className="py-4 px-6">Pasteur Kouassi Serge</td>
          <td className="py-4 px-6"><a href="tel:+2250500000007" className="text-red-600 font-bold hover:underline">+225 05 00 00 00 07</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Gagnoa</td>
          <td className="py-4 px-6">Pasteur Baha Marc</td>
          <td className="py-4 px-6"><a href="tel:+2250789000004" className="text-red-600 font-bold hover:underline">+225 07 89 00 00 04</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Grand-Bassam</td>
          <td className="py-4 px-6">Pasteur Ehui Paul</td>
          <td className="py-4 px-6"><a href="tel:+2250700000014" className="text-red-600 font-bold hover:underline">+225 07 00 00 00 14</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Grand-Béréby</td>
          <td className="py-4 px-6">Pasteur Zadi Joël</td>
          <td className="py-4 px-6"><a href="tel:+2250700000002" className="text-red-600 font-bold hover:underline">+225 07 00 00 00 02</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Grand-Lahou</td>
          <td className="py-4 px-6">Pasteur Djaha Kouadio</td>
          <td className="py-4 px-6"><a href="tel:+2250100000064" className="text-red-600 font-bold hover:underline">+225 01 00 00 00 64</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Guéyo</td>
          <td className="py-4 px-6">Pasteur Zouzou Grah</td>
          <td className="py-4 px-6"><a href="tel:+2250500000035" className="text-red-600 font-bold hover:underline">+225 05 00 00 00 35</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Guibéroua</td>
          <td className="py-4 px-6">Pasteur Lago Digbeu</td>
          <td className="py-4 px-6"><a href="tel:+2250500000032" className="text-red-600 font-bold hover:underline">+225 05 00 00 00 32</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Guiglo</td>
          <td className="py-4 px-6">Pasteur Tié Hié</td>
          <td className="py-4 px-6"><a href="tel:+2250700000086" className="text-red-600 font-bold hover:underline">+225 07 00 00 00 86</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Issia</td>
          <td className="py-4 px-6">Pasteur Bi Trazié</td>
          <td className="py-4 px-6"><a href="tel:+2250500000101" className="text-red-600 font-bold hover:underline">+225 05 00 00 01 01</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Jacqueville</td>
          <td className="py-4 px-6">Pasteur Mobio Marc</td>
          <td className="py-4 px-6"><a href="tel:+2250500000065" className="text-red-600 font-bold hover:underline">+225 05 00 00 00 65</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Kani</td>
          <td className="py-4 px-6">Pasteur Soumahoro Losseni</td>
          <td className="py-4 px-6"><a href="tel:+2250500000143" className="text-red-600 font-bold hover:underline">+225 05 00 00 01 43</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Kaniasso</td>
          <td className="py-4 px-6">Pasteur Bamba Moussa</td>
          <td className="py-4 px-6"><a href="tel:+2250100000117" className="text-red-600 font-bold hover:underline">+225 01 00 00 01 17</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Katiola</td>
          <td className="py-4 px-6">Pasteur Coulibaly Kigbafori</td>
          <td className="py-4 px-6"><a href="tel:+2250500000134" className="text-red-600 font-bold hover:underline">+225 05 00 00 01 34</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Kong</td>
          <td className="py-4 px-6">Pasteur Konaté Dramane</td>
          <td className="py-4 px-6"><a href="tel:+2250100000114" className="text-red-600 font-bold hover:underline">+225 01 00 00 01 14</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Korhogo</td>
          <td className="py-4 px-6">Pasteur Soro Coulibaly</td>
          <td className="py-4 px-6"><a href="tel:+2250770000040" className="text-red-600 font-bold hover:underline">+225 07 70 00 00 40</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Kouassi-Kouassikro</td>
          <td className="py-4 px-6">Pasteur Kouadio Simplice</td>
          <td className="py-4 px-6"><a href="tel:+2250700000051" className="text-red-600 font-bold hover:underline">+225 07 00 00 00 51</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Koun-Fao</td>
          <td className="py-4 px-6">Pasteur Kouadio Kra</td>
          <td className="py-4 px-6"><a href="tel:+2250500000152" className="text-red-600 font-bold hover:underline">+225 05 00 00 01 52</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Kounahiri</td>
          <td className="py-4 px-6">Pasteur Cissé Alassane</td>
          <td className="py-4 px-6"><a href="tel:+2250100000145" className="text-red-600 font-bold hover:underline">+225 01 00 00 01 45</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Lakota</td>
          <td className="py-4 px-6">Pasteur Akpa Théodore</td>
          <td className="py-4 px-6"><a href="tel:+2250100000034" className="text-red-600 font-bold hover:underline">+225 01 00 00 00 34</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">M'Bahiakro</td>
          <td className="py-4 px-6">Pasteur Kra Djè</td>
          <td className="py-4 px-6"><a href="tel:+2250500000044" className="text-red-600 font-bold hover:underline">+225 05 00 00 00 44</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">M'Batto</td>
          <td className="py-4 px-6">Pasteur Kouassi Amoikon</td>
          <td className="py-4 px-6"><a href="tel:+2250700000048" className="text-red-600 font-bold hover:underline">+225 07 00 00 00 48</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">M'Bengué</td>
          <td className="py-4 px-6">Pasteur Ouattara Tiémoko</td>
          <td className="py-4 px-6"><a href="tel:+2250500000112" className="text-red-600 font-bold hover:underline">+225 05 00 00 01 12</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Madinani</td>
          <td className="py-4 px-6">Pasteur Cissé Souleymane</td>
          <td className="py-4 px-6"><a href="tel:+2250100000021" className="text-red-600 font-bold hover:underline">+225 01 00 00 00 21</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Man</td>
          <td className="py-4 px-6">Pasteur Gueu Blaise</td>
          <td className="py-4 px-6"><a href="tel:+2250550000020" className="text-red-600 font-bold hover:underline">+225 05 50 00 00 20</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Mankono</td>
          <td className="py-4 px-6">Pasteur Bakayoko Dramane</td>
          <td className="py-4 px-6"><a href="tel:+2250700000144" className="text-red-600 font-bold hover:underline">+225 07 00 00 01 44</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Méagui</td>
          <td className="py-4 px-6">Pasteur Dago Blaise</td>
          <td className="py-4 px-6"><a href="tel:+2250500000004" className="text-red-600 font-bold hover:underline">+225 05 00 00 00 04</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Minignan</td>
          <td className="py-4 px-6">Pasteur Touré Bakary</td>
          <td className="py-4 px-6"><a href="tel:+2250500000022" className="text-red-600 font-bold hover:underline">+225 05 00 00 00 22</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Nassian</td>
          <td className="py-4 px-6">Pasteur Ouattara Siaka</td>
          <td className="py-4 px-6"><a href="tel:+2250700000156" className="text-red-600 font-bold hover:underline">+225 07 00 00 01 56</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Niablé</td>
          <td className="py-4 px-6">Pasteur Kouakou Jean</td>
          <td className="py-4 px-6"><a href="tel:+2250700000011" className="text-red-600 font-bold hover:underline">+225 07 00 00 00 11</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Niakaramadougou</td>
          <td className="py-4 px-6">Pasteur Soro Gnenéma</td>
          <td className="py-4 px-6"><a href="tel:+2250100000136" className="text-red-600 font-bold hover:underline">+225 01 00 00 01 36</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Odienné</td>
          <td className="py-4 px-6">Pasteur Koné Moussa</td>
          <td className="py-4 px-6"><a href="tel:+2250700000020" className="text-red-600 font-bold hover:underline">+225 07 00 00 00 20</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Ouaninou</td>
          <td className="py-4 px-6">Pasteur Bamba Vafoumba</td>
          <td className="py-4 px-6"><a href="tel:+2250700000141" className="text-red-600 font-bold hover:underline">+225 07 00 00 01 41</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Ouangolodougou</td>
          <td className="py-4 px-6">Pasteur Sanogo Lassina</td>
          <td className="py-4 px-6"><a href="tel:+2250500000115" className="text-red-600 font-bold hover:underline">+225 05 00 00 01 15</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Oumé</td>
          <td className="py-4 px-6">Pasteur Goly Zégbé</td>
          <td className="py-4 px-6"><a href="tel:+2250100000031" className="text-red-600 font-bold hover:underline">+225 01 00 00 00 31</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Prikro</td>
          <td className="py-4 px-6">Pasteur Kouadio Tanoh</td>
          <td className="py-4 px-6"><a href="tel:+2250700000045" className="text-red-600 font-bold hover:underline">+225 07 00 00 00 45</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Sakassou</td>
          <td className="py-4 px-6">Pasteur Yao Kan</td>
          <td className="py-4 px-6"><a href="tel:+2250100000133" className="text-red-600 font-bold hover:underline">+225 01 00 00 01 33</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">San-Pédro</td>
          <td className="py-4 px-6">Pasteur Gba Théodore</td>
          <td className="py-4 px-6"><a href="tel:+2250545000001" className="text-red-600 font-bold hover:underline">+225 05 45 00 00 01</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Sassandra</td>
          <td className="py-4 px-6">Pasteur Gnagne Marcel</td>
          <td className="py-4 px-6"><a href="tel:+2250100000006" className="text-red-600 font-bold hover:underline">+225 01 00 00 00 06</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Séguéla</td>
          <td className="py-4 px-6">Pasteur Dosso Vacaba</td>
          <td className="py-4 px-6"><a href="tel:+2250100000142" className="text-red-600 font-bold hover:underline">+225 01 00 00 01 42</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Sikensi</td>
          <td className="py-4 px-6">Pasteur Mambo Simplice</td>
          <td className="py-4 px-6"><a href="tel:+2250500000062" className="text-red-600 font-bold hover:underline">+225 05 00 00 00 62</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Sinfra</td>
          <td className="py-4 px-6">Pasteur Bi Zan Paul</td>
          <td className="py-4 px-6"><a href="tel:+2250700000105" className="text-red-600 font-bold hover:underline">+225 07 00 00 01 05</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Soubré</td>
          <td className="py-4 px-6">Pasteur Boli Arsène</td>
          <td className="py-4 px-6"><a href="tel:+2250100000003" className="text-red-600 font-bold hover:underline">+225 01 00 00 00 03</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Taï</td>
          <td className="py-4 px-6">Pasteur Oulai Simplice</td>
          <td className="py-4 px-6"><a href="tel:+2250700000089" className="text-red-600 font-bold hover:underline">+225 07 00 00 00 89</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Tanda</td>
          <td className="py-4 px-6">Pasteur Kouakou Adou</td>
          <td className="py-4 px-6"><a href="tel:+2250100000151" className="text-red-600 font-bold hover:underline">+225 01 00 00 01 51</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Tengrela</td>
          <td className="py-4 px-6">Pasteur Traoré Adama</td>
          <td className="py-4 px-6"><a href="tel:+2250500000118" className="text-red-600 font-bold hover:underline">+225 05 00 00 01 18</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Tiébissou</td>
          <td className="py-4 px-6">Pasteur Yao Kouassi</td>
          <td className="py-4 px-6"><a href="tel:+2250700000042" className="text-red-600 font-bold hover:underline">+225 07 00 00 00 42</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Tiassalé</td>
          <td className="py-4 px-6">Pasteur N'Guessan Paul</td>
          <td className="py-4 px-6"><a href="tel:+2250100000061" className="text-red-600 font-bold hover:underline">+225 01 00 00 00 61</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Touba</td>
          <td className="py-4 px-6">Pasteur Diomandé Souleymane</td>
          <td className="py-4 px-6"><a href="tel:+2250580000050" className="text-red-600 font-bold hover:underline">+225 05 80 00 00 50</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Toulepleu</td>
          <td className="py-4 px-6">Pasteur Doué Gérôme</td>
          <td className="py-4 px-6"><a href="tel:+2250500000088" className="text-red-600 font-bold hover:underline">+225 05 00 00 00 88</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Toumodi</td>
          <td className="py-4 px-6">Pasteur Kouamé N'Guessan</td>
          <td className="py-4 px-6"><a href="tel:+2250123000006" className="text-red-600 font-bold hover:underline">+225 01 23 00 00 06</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Transua</td>
          <td className="py-4 px-6">Pasteur Kobenan Yao</td>
          <td className="py-4 px-6"><a href="tel:+2250700000153" className="text-red-600 font-bold hover:underline">+225 07 00 00 01 53</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Vavoua</td>
          <td className="py-4 px-6">Pasteur Loué Gonné</td>
          <td className="py-4 px-6"><a href="tel:+2250700000102" className="text-red-600 font-bold hover:underline">+225 07 00 00 01 02</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Yakassé-Attobrou</td>
          <td className="py-4 px-6">Pasteur Bédé Landry</td>
          <td className="py-4 px-6"><a href="tel:+2250500000068" className="text-red-600 font-bold hover:underline">+225 05 00 00 00 68</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Zouan-Hounien</td>
          <td className="py-4 px-6">Pasteur Tia Gomé</td>
          <td className="py-4 px-6"><a href="tel:+2250700000083" className="text-red-600 font-bold hover:underline">+225 07 00 00 00 83</a></td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-semibold">Zuénoula</td>
          <td className="py-4 px-6">Pasteur Bi Irié Honoré</td>
          <td className="py-4 px-6"><a href="tel:+2250100000103" className="text-red-600 font-bold hover:underline">+225 01 00 00 01 03</a></td>
        </tr>

      </tbody>
    </table>
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