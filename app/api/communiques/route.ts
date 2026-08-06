import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('communiques')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(6);

    if (error) {
      throw new Error(error.message);
    }

    return NextResponse.json({ data });
  } catch (err: any) {
    console.warn("Mode hors-ligne actif (réseau bloqué)");
    
    // Les 4 informations pour alimenter le slider
    const mockData = [
      {
        id: 1,
        title: "Titre de ton communiqué 1",
        content: "Le contenu exact que tu veux afficher sur ton site pour le premier communiqué...",
        created_at: new Date().toISOString(),
      },
      {
        id: 2,
        title: "Titre de ton communiqué 2",
        content: "Un autre message important du Conseil National pour le deuxième communiqué...",
        created_at: new Date().toISOString(),
      },
      {
        id: 3,
        title: "Titre de ton communiqué 3",
        content: "Les détails concernant le troisième communiqué officiel...",
        created_at: new Date().toISOString(),
      },
      {
        id: 4,
        title: "Titre de ton communiqué 4",
        content: "Les informations relatives au quatrième communiqué...",
        created_at: new Date().toISOString(),
      }
    ];

    return NextResponse.json({ data: mockData });
  }
}