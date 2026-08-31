"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Footer from '../../components/Footer';
import { supabase } from '@/lib/supabase';

interface Enseignement {
  id: string;
  title: string;
  category?: string;
  image_url?: string;
  excerpt?: string;
  content?: string;
  content_text?: string;
  slug?: string;
  created_at?: string;
  [key: string]: any;
}

export default function DetailEnseignement({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = React.use(params);
  const slugParam = resolvedParams.slug;

  const [article, setArticle] = useState<Enseignement | null>(null);
  const [otherArticles, setOtherArticles] = useState<Enseignement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slugParam) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        let { data, error } = await supabase
          .from('enseignements')
          .select('*')
          .eq('slug', slugParam)
          .single();

        if (!data && error) {
          const { data: dataById } = await supabase
            .from('enseignements')
            .select('*')
            .eq('id', slugParam)
            .single();
          data = dataById;
        }

        setArticle(data || null);

        if (data) {
          // Récupération de plus d'enseignements pour alimenter la barre latérale
          const { data: others } = await supabase
            .from('enseignements')
            .select('*')
            .neq('id', data.id)
            .order('created_at', { ascending: false })
            .limit(6);

          if (others) {
            setOtherArticles(others);
          }
        }
      } catch (err) {
        console.error("Erreur de chargement :", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slugParam]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex flex-col justify-between">
        <div className="flex flex-col items-center justify-center p-6 text-center my-auto py-24">
          <p className="text-slate-500 text-base">Chargement...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-white flex flex-col justify-between">
        <div className="flex flex-col items-center justify-center p-6 text-center my-auto py-24 max-w-xl mx-auto">
          <h1 className="text-3xl font-bold text-slate-900 mb-3">Enseignement non trouvé</h1>
          <p className="text-slate-500 mb-8">Cet article n'existe pas ou a été déplacé.</p>
          <Link href="/" className="bg-slate-900 text-white font-medium px-5 py-2.5 rounded-lg hover:bg-slate-800 transition">
            Retour à l'accueil
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const fullText = article.content_text || article.content || article.description || article.body || "";

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col justify-between">
      <div>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
          
          {/* LIEN DE RETOUR */}
          <div className="mb-6">
            <Link 
              href="/#enseignements" 
              className="text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors uppercase tracking-wider"
            >
              ← Enseignements
            </Link>
          </div>

          {/* DISPOSITION EN GRILLE (ARTICLE + BARRE LATÉRALE) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* COLONNE PRINCIPALE DE L'ENSEIGNEMENT (8/12) */}
            <article className="lg:col-span-8">
              {/* CATÉGORIE & TITRE */}
              <header className="mb-8 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-red-600 block">
                  {article.category || "Enseignement"}
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {article.title}
                </h1>
                {article.created_at && (
                  <p className="text-slate-400 text-xs font-medium pt-1">
                    Publié le {new Date(article.created_at).toLocaleDateString('fr-FR')}
                  </p>
                )}
              </header>

              {/* IMAGE PRINCIPALE */}
              {article.image_url && (
                <div className="mb-8 rounded-xl overflow-hidden bg-slate-100">
                  <img 
                    src={article.image_url} 
                    alt={article.title} 
                    className="w-full h-auto max-h-[500px] object-cover"
                  />
                </div>
              )}

              {/* EXCERPT / CHAPEAU */}
              {article.excerpt && (
                <div className="pl-4 border-l-4 border-red-600 mb-8">
                  <p className="text-lg md:text-xl font-medium text-slate-700 leading-relaxed italic">
                    {article.excerpt}
                  </p>
                </div>
              )}

              {/* CORPS DU TEXTE */}
              {fullText ? (
                <div className="text-base sm:text-lg text-slate-800 leading-relaxed space-y-6 whitespace-pre-line font-normal">
                  {fullText}
                </div>
              ) : null}
            </article>

            {/* BARRE LATÉRALE - AUTRES ENSEIGNEMENTS (4/12) */}
            <aside className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-slate-200 pt-8 lg:pt-0 lg:pl-8">
              <div className="sticky top-8 space-y-6">
                <h2 className="text-lg font-bold text-slate-900 uppercase tracking-wide border-b border-slate-200 pb-3">
                  Autres enseignements
                </h2>

                <div className="space-y-6">
                  {otherArticles.map((other) => (
                    <Link 
                      key={other.id}
                      href={`/enseignements/${other.slug || other.id}`}
                      className="group flex gap-4 items-start pb-4 border-b border-slate-100 last:border-0 last:pb-0"
                    >
                      {/* MINIATURE */}
                      <div className="w-24 h-20 shrink-0 rounded-lg overflow-hidden bg-slate-100">
                        {other.image_url ? (
                          <img 
                            src={other.image_url} 
                            alt={other.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-full h-full bg-slate-200 flex items-center justify-center text-[10px] text-slate-400">
                            Pas d'image
                          </div>
                        )}
                      </div>

                      {/* TEXTE / TITRE */}
                      <div className="flex-1 min-w-0 space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 block">
                          {other.category || "Enseignement"}
                        </span>
                        <h3 className="text-sm font-bold text-slate-900 group-hover:text-red-600 transition-colors leading-snug line-clamp-2">
                          {other.title}
                        </h3>
                        {other.created_at && (
                          <p className="text-[11px] text-slate-400">
                            {new Date(other.created_at).toLocaleDateString('fr-FR')}
                          </p>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>

          </div>

        </main>
      </div>

      <Footer />
    </div>
  );
}