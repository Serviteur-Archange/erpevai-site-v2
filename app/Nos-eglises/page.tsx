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
    <p className="text-gray-600">Retrouvez chaque église, sa localisation et son pasteur responsable.</p>
  </div>

  <div className="overflow-x-auto shadow-lg rounded-2xl border border-gray-300 bg-white">
    <table className="w-full text-left border-collapse border border-gray-300">
      <thead>
        <tr className="bg-red-600 text-white uppercase text-xs sm:text-sm tracking-wider">
          <th className="py-4 px-6 border border-gray-300 border-b-2">Région</th>
          <th className="py-4 px-6 border border-gray-300 border-b-2">Ville</th>
          <th className="py-4 px-6 border border-gray-300 border-b-2">Localisation / Quartier</th>
          <th className="py-4 px-6 border border-gray-300 border-b-2">Pasteur Responsable</th>
          <th className="py-4 px-6 border border-gray-300 border-b-2">Contact / Téléphone</th>
        </tr>
      </thead>
      <tbody className="text-gray-700 text-sm">
        
        {/* RÉGION D'ABIDJAN (4 lignes) */}
        <tr className="hover:bg-gray-50 transition-colors">
          <td rowSpan={4} className="py-4 px-6 font-bold text-gray-900 bg-gray-50 border border-gray-300 align-middle">
            Région d’Abidjan
          </td>
          <td className="py-4 px-6 font-medium border border-gray-300">Abidjan (Angré)</td>
          <td className="py-4 px-6 border border-gray-300">Carrefour Angré derrière la Boulangerie Roi (zone Collège Victor Loba)</td>
          <td className="py-4 px-6 border border-gray-300">Pasteur Basile Mamert Acakpovi</td>
          <td className="py-4 px-6 border border-gray-300">
            <a href="tel:+2250170929295" className="text-red-600 font-bold hover:underline">+225 01 70 92 92 95</a>
          </td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-medium border border-gray-300">Abidjan (Abobo)</td>
          <td className="py-4 px-6 border border-gray-300">Hôpital Houphouët Boigny (ancien fin goudron)</td>
          <td className="py-4 px-6 border border-gray-300">Prophète Samuel Andoh</td>
          <td className="py-4 px-6 border border-gray-300">
            <a href="tel:+2250710101036" className="text-red-600 font-bold hover:underline">+225 07 10 10 10 36</a>
          </td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-medium border border-gray-300">Rubino</td>
          <td className="py-4 px-6 border border-gray-300">Rubino 50 hectares (Campement 50 hectares)</td>
          <td className="py-4 px-6 border border-gray-300">Pasteur Niamien Edouard</td>
          <td className="py-4 px-6 border border-gray-300">
            <a href="tel:+2250708929470" className="text-red-600 font-bold hover:underline">+225 07 08 92 94 70</a>
          </td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-medium border border-gray-300">Abidjan (Yopougon)</td>
          <td className="py-4 px-6 border border-gray-300">Kouté (zone du Palais de Justice)</td>
          <td className="py-4 px-6 border border-gray-300">Pasteur Jérôme Dakoury</td>
          <td className="py-4 px-6 border border-gray-300">
            <a href="tel:+2250709582371" className="text-red-600 font-bold hover:underline">+225 07 09 58 23 71</a>
          </td>
        </tr>

        {/* RÉGION DU HAMBOL (5 lignes) */}
        <tr className="hover:bg-gray-50 transition-colors">
          <td rowSpan={5} className="py-4 px-6 font-bold text-gray-900 bg-gray-50 border border-gray-300 align-middle">
            Région du Hambol
          </td>
          <td className="py-4 px-6 font-medium border border-gray-300">Katiola</td>
          <td className="py-4 px-6 border border-gray-300">Lafonkaha</td>
          <td className="py-4 px-6 border border-gray-300">Ouffoué BROU</td>
          <td className="py-4 px-6 border border-gray-300">
            <a href="tel:+2250707584974" className="text-red-600 font-bold hover:underline">+225 07 07 58 49 74</a>
          </td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-medium border border-gray-300">Fronan</td>
          <td className="py-4 px-6 border border-gray-300">Souroukaha</td>
          <td className="py-4 px-6 border border-gray-300">Koffi Norbert</td>
          <td className="py-4 px-6 border border-gray-300">
            <a href="tel:+2250787676728" className="text-red-600 font-bold hover:underline">+225 07 87 67 67 28</a>
          </td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-medium border border-gray-300">Dabakala</td>
          <td className="py-4 px-6 border border-gray-300">Sambaguien</td>
          <td className="py-4 px-6 border border-gray-300">Evariste KONÉ</td>
          <td className="py-4 px-6 border border-gray-300">
            <a href="tel:+2250709739921" className="text-red-600 font-bold hover:underline">+225 07 09 73 99 21</a>
          </td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-medium border border-gray-300">Ouréguékaha</td>
          <td className="py-4 px-6 border border-gray-300">Sous-préfecture</td>
          <td className="py-4 px-6 border border-gray-300">CAMARA Pierre</td>
          <td className="py-4 px-6 border border-gray-300">
            <a href="tel:+2250708203951" className="text-red-600 font-bold hover:underline">+225 07 08 20 39 51</a>
          </td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-medium border border-gray-300">Attienkaha</td>
          <td className="py-4 px-6 border border-gray-300">Village</td>
          <td className="py-4 px-6 border border-gray-300">Mme DIBONAN</td>
          <td className="py-4 px-6 border border-gray-300">
            <a href="tel:+2250102221436" className="text-red-600 font-bold hover:underline">+225 01 02 22 14 36</a>
          </td>
        </tr>

        {/* RÉGION DU GRAND NORD (4 lignes) */}
        <tr className="hover:bg-gray-50 transition-colors">
          <td rowSpan={4} className="py-4 px-6 font-bold text-gray-900 bg-gray-50 border border-gray-300 align-middle">
            Région du Grand Nord
          </td>
          <td className="py-4 px-6 font-medium border border-gray-300">Ferké 2</td>
          <td className="py-4 px-6 border border-gray-300">SUCAF extension</td>
          <td className="py-4 px-6 border border-gray-300">Pasteur Dali Guy</td>
          <td className="py-4 px-6 border border-gray-300">
            <a href="tel:+2250747319429" className="text-red-600 font-bold hover:underline">+225 07 47 31 94 29</a>
          </td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-medium border border-gray-300">Badikaha</td>
          <td className="py-4 px-6 border border-gray-300">Badikaha ville</td>
          <td className="py-4 px-6 border border-gray-300">Pasteur Lazeme Esaie</td>
          <td className="py-4 px-6 border border-gray-300">
            <a href="tel:+2250748693244" className="text-red-600 font-bold hover:underline">+225 07 48 69 32 44</a>
          </td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-medium border border-gray-300">Ferké ville</td>
          <td className="py-4 px-6 border border-gray-300">Dioulabougou</td>
          <td className="py-4 px-6 border border-gray-300">Pasteur Kouakou Kouadio</td>
          <td className="py-4 px-6 border border-gray-300">
            <a href="tel:+2250709411365" className="text-red-600 font-bold hover:underline">+225 07 09 41 13 65</a>
          </td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-medium border border-gray-300">Korhogo</td>
          <td className="py-4 px-6 border border-gray-300">Kacirime</td>
          <td className="py-4 px-6 border border-gray-300">Pasteur Ouattara Marcel</td>
          <td className="py-4 px-6 border border-gray-300">
            <a href="tel:+2250506029424" className="text-red-600 font-bold hover:underline">+225 05 06 02 94 24</a>
          </td>
        </tr>

        {/* RÉGION BAS-SASSANDRA (5 lignes) */}
        <tr className="hover:bg-gray-50 transition-colors">
          <td rowSpan={5} className="py-4 px-6 font-bold text-gray-900 bg-gray-50 border border-gray-300 align-middle">
            Région Bas-Sassandra
          </td>
          <td className="py-4 px-6 font-medium border border-gray-300">San-Pédro</td>
          <td className="py-4 px-6 border border-gray-300">Quartier Zimbabwe</td>
          <td className="py-4 px-6 border border-gray-300">Pasteur Zakehi Modeste</td>
          <td className="py-4 px-6 border border-gray-300">
            <a href="tel:+2250545418801" className="text-red-600 font-bold hover:underline">+225 05 45 41 88 01</a>
          </td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-medium border border-gray-300">San-Pédro</td>
          <td className="py-4 px-6 border border-gray-300">Cathédrale 1</td>
          <td className="py-4 px-6 border border-gray-300">Rodrigue</td>
          <td className="py-4 px-6 border border-gray-300">
            <a href="tel:+2250103591069" className="text-red-600 font-bold hover:underline">+225 01 03 59 10 69</a>
          </td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-medium border border-gray-300">Sassandra</td>
          <td className="py-4 px-6 border border-gray-300">Quartier Bette</td>
          <td className="py-4 px-6 border border-gray-300">Pasteur Seri Simplice</td>
          <td className="py-4 px-6 border border-gray-300">
            <a href="tel:+2250585400718" className="text-red-600 font-bold hover:underline">+225 05 85 40 07 18</a>
          </td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-medium border border-gray-300">Soubré</td>
          <td className="py-4 px-6 border border-gray-300">Quartier Gabon</td>
          <td className="py-4 px-6 border border-gray-300">Pasteur Ibo Isaac</td>
          <td className="py-4 px-6 border border-gray-300">
            <a href="tel:+2250708128863" className="text-red-600 font-bold hover:underline">+225 07 08 12 88 63</a>
          </td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="py-4 px-6 font-medium border border-gray-300">Yabayo</td>
          <td className="py-4 px-6 border border-gray-300">Quartier Fairtaikro</td>
          <td className="py-4 px-6 border border-gray-300">Pasteur Blé Justin</td>
          <td className="py-4 px-6 border border-gray-300">
            <a href="tel:+2250172121327" className="text-red-600 font-bold hover:underline">+225 01 72 12 13 27</a>
          </td>
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