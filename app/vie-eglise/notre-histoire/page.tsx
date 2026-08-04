'use client';
import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import DonationModal from '../../DonationModal';

export default function NotreHistoire() {
  const [isDonationOpen, setIsDonationOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsDonationOpen(true);
    window.addEventListener('open-donation', handleOpen);
    return () => window.removeEventListener('open-donation', handleOpen);
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">

      {/* HERO + NAVBAR */}
      <section
        className="relative bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/Capture d’écran 2026-05-22 à 20.39.37.png')",
          backgroundPosition: "center 10%"
        }}
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-900/20"></div>

        

        {/* HERO */}
        <div className="relative z-10 py-24 px-6 md:px-20 text-center text-white flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-black mb-8">
            NOTRE HISTOIRE
          </h1>

          {/* RECTANGLE BLEU */}
          <div className="bg-blue-950/80 backdrop-blur-md border border-blue-500/30 px-8 py-4 rounded-xl max-w-2xl shadow-lg">
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Découvrez les grandes étapes de l'histoire de notre ministère.
            </p>
          </div>
        </div>
      </section>

      {/* RUBRIQUES */}
      <section className="py-24 px-6 md:px-20">
        <div className="max-w-5xl mx-auto flex flex-col gap-16 md:gap-24">

          {/* --- RUBRIQUE 2 (BLEU - Image à Droite) --- */}
          <div className="w-full min-h-[60vh] flex flex-col md:flex-row-reverse items-stretch">
            <div className="w-full md:w-1/2 relative min-h-[40vh] md:min-h-auto">
              <Image
                src="/Collecctif.jpeg"
                alt="SORTIE DE L'ÉGLISE UUESO"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center p-8 md:p-16 bg-blue-950 text-white">
              <h2 className="text-2xl md:text-4xl font-extrabold mb-6 tracking-wide uppercase">
                SORTIE DE L'ÉGLISE UUESO
              </h2>
              <p className="text-white/95 text-base md:text-lg leading-relaxed font-light max-w-xl">
                L' Apôtre Ouli Samuel , alors encore fidèle de l'Union des Églises Évangéliques du Sud-Ouest (UEESO), a été au cœur du mouvement qui a donné naissance à l'Église Évangélique de Réveil de Côte d'Ivoire (EERCI).
                Entre 1985 et 1986, suite à une croisade d'évangélisation a mené en collaboration avec des missionnaires américains, l'Apôtre Ouli Samuel et plusieurs autres chrétiens ont fait l'expérience du baptême du Saint-Esprit. Cependant, l'UEESO n'acceptait pas à cette époque les manifestations du réveil, l'exercice des dons spirituels, ni le baptême du Saint-Esprit.
                Face à ces restrictions et désireux de vivre pleinement leur foi, l'Apôtre Ouli Samuel et ses compagnons ont pris la décision de quitter cette communauté. Se fournissant sous la conduite et la direction de l'Apôtre Jean Glao, ils sont sortis ensemble pour poser les fondements d'une œuvre entièrement apostolique.
              </p>
            </div>
          </div>

          {/* --- RUBRIQUE 3 (VERT - Image à Gauche) --- */}
          <div className="w-full min-h-[60vh] flex flex-col md:flex-row items-stretch">
            <div className="w-full md:w-1/2 relative min-h-[40vh] md:min-h-auto">
              <Image
                src="/fondateur.png"
                alt="PRESIDENCE DE L'EGLISE EVANGELIQUE DE REVEIL DE CÔTE D'IVOIRE"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center p-8 md:p-16 bg-emerald-950 text-white">
              <h2 className="text-2xl md:text-4xl font-extrabold mb-6 tracking-wide uppercase">
                PRESIDENCE DE L'EGLISE EVANGELIQUE DE REVEIL DE CÔTE D'IVOIRE
              </h2>
              <p className="text-white/95 text-base md:text-lg leading-relaxed font-light max-w-xl">
                Après le décès de l'Apôtre Jean Glao, l'Apôtre Ouli Samuel, qui occupait jusque-là les fonctions de Vice-Président, à pris la direction du mouvement en devenant le Président de l'Église Évangélique de Réveil de Côte d'Ivoire (EERCI) de 1989 à 1996. Durant ce mandat charnière, il a assuré avec brio et fidélité la continuité de la vision et du mandat apostolique.Le passage de l'Apôtre Ouli Samuel à la présidence a été marqué par un mérite exceptionnel et une profonde dévotion. Son parcours pastoral reste un modèle de rigueur spirituelle et d'intégrité organisationnelle.Animé d'un amour infatigable pour le salut des âmes, il a fait de l'expansion missionnaire le pilier central de son action. Ce zèle évangélique l'a conduit à multiplier les grandes campagnes et croisades de réveil, tant au niveau national qu'international. Il a parcouru l'intérieur de la Côte d'Ivoire pour implanter et fortifier les communautés locales, avant de porter la flamme du Plein Évangile au-delà des frontières africaines. Sous son impulsion, la voix de l'EERCI a résonné à l'international à travers des missions et des croisades d'envergure, notamment en France , à l'Île Maurice , au Ghana et au Nigéria .Par son leadership stratégique et sa passion pour le Royaume de Dieu, l'Apôtre Ouli Samuel a non seulement consolidé les acquis structurels de l'église, mais il a aussi ouvert la voie à l'influence internationale dont le mouvement hérite aujourd'hui.
              </p>
            </div>
          </div>

          {/* --- RUBRIQUE 4 (ORANGE - Image à Droite) --- */}
          <div className="w-full min-h-[60vh] flex flex-col md:flex-row-reverse items-stretch">
            <div className="w-full md:w-1/2 relative min-h-[40vh] md:min-h-auto">
              <Image
                src="/Photo-15.jpg"
                alt="NAISSANCE DE L'ÉGLISE DE RÉVEIL DU PLEIN ÉVANGILE"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center p-8 md:p-16 bg-orange-950 text-white">
              <h2 className="text-2xl md:text-4xl font-extrabold mb-6 tracking-wide uppercase">
                NAISSANCE DE L'ÉGLISE DE RÉVEIL DU PLEIN ÉVANGILE
              </h2>
              <p className="text-white/95 text-base md:text-lg leading-relaxed font-light max-w-xl">
                Du Mandat National à la Vision Internationale
                Après avoir accompli avec succès deux brillants mandats à la présidence de l'EERCI, l'Apôtre Ouli Samuel est retourné à sa charge de Pasteur Principal de l'église locale de Bouaké. C'est dans ce cadre pastoral et de consécration qu'il a reçu une directive claire du Saint-Esprit : retourner aux sources authentiques de la foi sous la bannière du Plein Évangile.
                Cette orientation divine avait pour objectif central de permettre à l'Église d'expérimenter avec une intensité renouvelée la puissance de direction du Seigneur Jésus-Christ. C'est ce mandat spirituel précis qui a jeté les bases théologiques et opérationnelles de ce qui allait devenir la Vision Apostolique Internationale (VAI), marquant une nouvelle étape décisive dans l'expansion du mouvement.
                Les Débuts Historiques à Bouaké
                C'est dans ce cadre spirituel et pastoral que la vision a pris forme concrète au cœur de la ville de Bouaké. Les premiers pas du mouvement se sont inscrits dans la simplicité : c'est en effet dans l'une des salles de classe du Collège LOUIS LE GRAND, situées au quartier Air France, que l'Église de Réveil du Plein Évangile - Vision Apostolique a vu le jour.
                Cette assemblée pionnière a connu un développement remarquable sous la conduite de l'Apôtre Ouli Samuel, jusqu'à son implantation définitive sur son site actuel. Aujourd'hui, ce lieu historique est devenu la Cathédrale de la Foi et des Miracles , située au quartier Air France, à la rue 18, et demeure le centre névralgique ainsi que le symbole du déploiement de notre mandat apostolique.
              </p>
            </div>
          </div>

          {/* === RUBRIQUE 5 (VISION APOSTOLIQUE INTERNATIONALE) === */}
          <div className="w-full min-h-[60vh] flex flex-col md:flex-row items-stretch py-12 bg-slate-50 text-slate-800">
            
            {/* BLOC DE DEUX GRANDES PHOTOS EMPILÉES (À GAUCHE) */}
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 space-y-8">
              <div className="bg-white p-3 rounded-2xl shadow-xl w-full max-w-[400px]">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/fondateur.png"
                    alt="Apôtre Ouli Samuel"
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>
                <p className="text-center text-xs font-semibold text-slate-500 mt-2">Apôtre Ouli Samuel</p>
              </div>

              <div className="bg-white p-3 rounded-2xl shadow-xl w-full max-w-[400px]">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/316277283_887837392219793_7080000442221618220_n (1).jpg"
                    alt="Apôtre Kpangui Bernard"
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>
                <p className="text-center text-xs font-semibold text-slate-500 mt-2">Apôtre Kpangui Bernard</p>
              </div>
            </div>

            {/* BLOC TEXTE DANS SON RECTANGLE JAUNE AMBRÉ (À DROITE) */}
            <div className="w-full md:w-1/2 flex items-center justify-center px-4 md:px-8 py-8">
              <div className="bg-amber-50/80 border border-amber-200/60 p-8 md:p-12 rounded-3xl shadow-xl space-y-6 text-left w-full max-w-[550px]">
                <h2 className="text-3xl md:text-4xl font-black text-amber-950 leading-tight uppercase tracking-wide">
                  Vision Apostolique Internationale
                </h2>
                
                <p className="text-base md:text-lg leading-relaxed text-amber-900/90">
                  La Vision Apostolique Internationale est un mouvement chrétien mondial et un réseau d'églises unies pour propager le Plein Évangile. Convaincus qu'une croissance durable repose sur une excellente santé spiritualité, nous cultivons des standards élevés d'engagement et d'intégrité pour nos membres et nos dirigeants, afin d'impacter efficacement notre génération.
                </p>

                {/* CONTINUITÉ SPIRITUELLE / DIRIGEANTS */}
                <div className="border-l-4 border-amber-500 pl-4 my-4 space-y-3">
                  <div>
                    <h4 className="font-bold text-amber-950 text-sm md:text-base">
                      L'Apôtre Ouli Samuel <span className="text-amber-700 font-medium">(1997-2015)</span>
                    </h4>
                    <p className="text-xs md:text-sm text-amber-900/80">
                      Pionnier et bâtisseur, il a posé les fondations de cette œuvre avec foi et diligence.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-950 text-sm md:text-base">
                      L'Apôtre Kpangui Bernard <span className="text-amber-700 font-medium">(Depuis 2015)</span>
                    </h4>
                    <p className="text-xs md:text-sm text-amber-900/80">
                      Président actuel, il conduit aujourd'hui le réseau vers de nouveaux horizons en mettant l'accent sur la solidité globale des églises et l'excellence du leadership.
                    </p>
                  </div>
                </div>

                {/* LES TROIS PILIERS */}
                <div className="text-sm md:text-base leading-relaxed text-amber-900/90 pt-2">
                  <p className="font-semibold text-amber-950">Ensemble, à travers l'ensemble de nos communautés, nous nous mobilisons autour de trois piliers fondamentaux :</p>
                  <span className="block mt-3 font-bold text-amber-950">
                    ⚡ Éclairer les nations par la vérité de la Parole de Dieu
                  </span>
                  <span className="block mt-1 font-bold text-amber-950">
                    🌱 Restaurer les vies par la puissance de Jésus-Christ
                  </span>
                  <span className="block mt-1 font-bold text-amber-950">
                    ⚔️ Conquérir les âmes en répondant au mandat apostolique pour prolonger le Royaume de Dieu.
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* === RUBRIQUE 6 (LE RENOUVEAU AVEC L'APÔTRE HENRI KOFFI FAYOL) === */}
          <div className="w-full min-h-[60vh] flex flex-col md:flex-row-reverse items-stretch py-12 bg-white text-slate-800">
            
            {/* BLOC VISUEL (À DROITE) */}
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6">
              <div className="bg-slate-50 p-3 rounded-2xl shadow-xl w-full max-w-[450px]">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/President.png" 
                    fill
                    alt="Apôtre Henri Koffi Fayol"
                    className="rounded-xl object-cover"
                  />
                </div>
                <p className="text-center text-xs font-semibold text-slate-400 mt-2">
                  Une nouvelle ère de croissance et de dynamisme spirituel
                </p>
              </div>
            </div>

            {/* BLOC TEXTE (À GAUCHE) */}
            <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 py-8 space-y-6 text-left">
              <div className="inline-block bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit">
                Nouvelle Ère
              </div>
              
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight uppercase tracking-wide">
                Le Renouveau avec l'Apôtre Henri Koffi Fayol
              </h2>
              
              <p className="text-base md:text-lg leading-relaxed text-slate-600">
                L'année 2022 a marqué le début d'une nouvelle ère pour l'Église de Réveil du Plein Évangile - Vision Apostolique Internationale. Réunis en pastorale à Zuénoula après la démission de l'Apôtre Dahi Isaac, les délégués ont adopté de nouveaux textes organiques et confié la présidence à l'Apôtre Henri Koffi Fayol.
                Dès lors, sous l'impulsion de son nouveau président, l'Église est entrée dans une dynamique de transformation majeure. À travers la modernisation des outils de gestion, la formation continue du corps pastoral et une présence communautaire intensifiée, cette vision redynamise profondément l'ensemble de nos communautés à travers le monde.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="border-t-2 border-sky-500 pt-3">
                  <h5 className="font-bold text-slate-900 text-sm uppercase">Vision Moderne</h5>
                  <p className="text-xs text-slate-500 mt-1">L'intégration d'outils contemporains pour propager l'Évangile plus loin.</p>
                </div>
                <div className="border-t-2 border-sky-500 pt-3">
                  <h5 className="font-bold text-slate-900 text-sm uppercase">Leadership</h5>
                  <p className="text-xs text-slate-500 mt-1">Un accent fort sur l'excellence, l'intégrité et la formation continue.</p>
                </div>
              </div>
            </div>

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

      {/* MODAL DE DON */}
      <DonationModal 
        isOpen={isDonationOpen} 
        onClose={() => setIsDonationOpen(false)} 
      />
    </main>
  );
}