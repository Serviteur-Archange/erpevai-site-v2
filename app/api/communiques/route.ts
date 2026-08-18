import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    // Essayez de récupérer les données avec un tri par created_at décroissant
    const { data, error } = await supabase
      .from('communiques') // Vérifiez bien si c'est 'communiques' ou 'communique'
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error("Erreur Supabase détaillée :", error.message);
      throw new Error(error.message);
    }

    // Si data est vide, on renvoie un tableau vide au lieu de passer au catch
    return NextResponse.json({ data: data || [] });
    
  } catch (err: any) {
    console.error("Erreur critique dans l'API :", err.message);
    
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}