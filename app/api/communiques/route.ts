import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('enseignements')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error("Erreur Supabase :", error.message);
      throw new Error(error.message);
    }

    return NextResponse.json({ data: data || [] });
    
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}