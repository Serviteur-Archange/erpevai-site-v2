"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Données fictives d'enseignements pour la mise en page
const dummyEnseignements = [
  {
    id: "1",
    slug: "la-puissance-de-la-priere-fervente",
    title: "La puissance de la prière fervente du juste",
    category: "Prière & Jeûne",
    date: "30 Août 2026",
    author: "Apôtre / Président",
    authorTitle: "Président de l'ERPEVAI",
    readTime: "4 min de lecture",
    verse: "La prière agissante du juste a une grande efficacité. — Jacques 5:16",
    summary: "Découvrez comment maintenir une vie de prière constante et fervente qui déplace les montagnes et transforme les situations les plus difficiles.",
    image: "/micro.jpg",
    featured: true,
  },
  {
    id: "2",
    slug: "marcher-par-la-foi-non-par-la-vue",
    title: "Marcher par la foi et non par la vue dans l'adversité",
    category: "Foi & Victoire",
    date: "27 Août 2026",
    author: "Apôtre / Président",
    authorTitle: "Président de l'ERPEVAI",
    readTime: "3 min de lecture",
    verse: "Car nous marchons par la foi et non par la vue. — 2 Corinthiens 5:7",
    summary: "Dans les temps d'incertitude, la foi demeure notre ancre spirituelle. Apprenons à fixer nos regards sur les promesses de Dieu plutôt que sur nos circonstances.",
    image: "/Broadcast Wallpapers - Wallpaper Cave.jpeg",
    featured: false,
  },
  {
    id: "3",
    slug: "le-pouvoir-de-la-sainte-cene",
    title: "Comprendre la profondeur et le pouvoir de la Sainte-Cène",
    category: "Vie Chrétienne",
    date: "24 Août 2026",
    author: "Apôtre / Président",
    authorTitle: "Président de l'ERPEVAI",
    readTime: "5 min de lecture",
    verse: "Faites ceci en mémoire de moi. — 1 Corinthiens 11:24",
    summary: "La table du Seigneur n'est pas un simple rituel, c'est une alliance vivante de guérison, de délivrance et de communion fraternelle.",
    image: "/RTV.png",
    featured: false,
  },
];

const categories = ["Tous", "Foi & Victoire", "Prière & Jeûne", "Vie Chrétienne", "Méditations"];

export default function EnseignementsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const featuredTeaching = dummyEnseignements.find((item) => item.featured) || dummyEnseignements[0];
  const filteredTeachings = selectedCategory === "Tous"
    ? dummyEnseignements.filter((item) => !item.featured)
    : dummyEnseignements.filter((item) => item.category === selectedCategory);

  const handleShareWhatsApp = (title: string, slug: string) => {
    const url = `${window.location.origin}/enseignements/${slug}`;
    const text = `📖 *Enseignement ERPEVAI* : ${title}\n\nLisez l'enseignement complet ici : ${url}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, "_blank");
  };

  const handleCopyLink = (slug: string, id: string) => {
    const url = `${window.location.origin}/enseignements/${slug}`;
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <main className="min-h-screen bg-slate-50 relative pt-20">
      <Navbar />

      {/* En-tête de la page */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-slate-900 text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="bg-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider inline-block">
            Nourriture Spirituelle
          </span>
          <h1 className="text-3xl md:text-5xl font-black">
            ENSEIGNEMENTS & MÉDITATIONS
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            Retrouvez les résumés et éditoriaux des messages inspirés du Président de l'Église pour fortifier votre foi au quotidien.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
        {/* ARTICLE À LA UNE */}
        {featuredTeaching && (
          <section className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="lg:col-span-7 relative h-64 lg:h-auto min-h-[320px] bg-gray-900">
              <Image
                src={featuredTeaching.image}
                alt={featuredTeaching.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-md uppercase">
                Dernier message
              </div>
            </div>

            <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-gray-500 font-semibold">
                  <span className="text-blue-900 bg-blue-50 px-3 py-1 rounded-full">
                    {featuredTeaching.category}
                  </span>
                  <span>{featuredTeaching.readTime}</span>
                </div>

                <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 leading-tight hover:text-blue-900 transition-colors">
                  {featuredTeaching.title}
                </h2>

                <blockquote className="border-l-4 border-red-600 pl-4 py-1 italic text-sm text-gray-700 bg-red-50/50 rounded-r-md">
                  "{featuredTeaching.verse}"
                </blockquote>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {featuredTeaching.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{featuredTeaching.date}</span>
                  <span className="text-xs font-bold text-blue-950">{featuredTeaching.author}</span>
                </div>

                {/* Boutons d'action : Lire + Partager */}
                <div className="flex items-center gap-3">
                  <Link
                    href={`/enseignements/${featuredTeaching.slug}`}
                    className="flex-1 bg-blue-950 hover:bg-blue-900 text-white text-center font-bold py-2.5 px-4 rounded-xl text-sm transition-colors"
                  >
                    Lire l'enseignement →
                  </Link>

                  <button
                    onClick={() => handleShareWhatsApp(featuredTeaching.title, featuredTeaching.slug)}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold p-2.5 rounded-xl transition-colors flex items-center justify-center cursor-pointer"
                    title="Partager sur WhatsApp"
                  >
                    💬
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FILTRES PAR CATÉGORIES */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-blue-950 text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRILLE DES AUTRES ENSEIGNEMENTS */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTeachings.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col justify-between hover:shadow-xl transition-shadow"
            >
              <div>
                <div className="relative h-48 w-full bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-blue-950 text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                    {item.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{item.date}</span>
                    <span>{item.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 hover:text-blue-900 transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm line-clamp-3">
                    {item.summary}
                  </p>
                </div>
              </div>

              {/* Pied de carte avec boutons d'envoi et de partage */}
              <div className="p-6 pt-0 border-t border-gray-50 mt-4 space-y-3">
                <div className="flex items-center justify-between text-xs text-gray-500 font-medium">
                  <span>Par : {item.author}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    href={`/enseignements/${item.slug}`}
                    className="flex-1 bg-slate-900 hover:bg-blue-950 text-white text-center font-semibold py-2 px-3 rounded-lg text-xs transition-colors"
                  >
                    Lire la suite
                  </Link>

                  <button
                    onClick={() => handleShareWhatsApp(item.title, item.slug)}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                    title="Envoyer via WhatsApp"
                  >
                     Envoyer
                  </button>

                  <button
                    onClick={() => handleCopyLink(item.slug, item.id)}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                    title="Copier le lien"
                  >
                    {copiedId === item.id ? "Copié !" : "🔗"}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>

      <Footer />
    </main>
  );
}