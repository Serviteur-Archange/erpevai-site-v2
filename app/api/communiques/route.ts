import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('communiques')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error("Erreur Supabase détaillée :", error.message);
      throw new Error(error.message);
    }

    return NextResponse.json({ data: data || [] });
    
  } catch (err: any) {
    console.error("Erreur critique dans l'API :", err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}