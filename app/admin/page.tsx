'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../supabase';

export default function AdminPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminName, setAdminName] = useState('');
  const [password, setPassword] = useState('');
  
  // État pour afficher/masquer le mot de passe
  const [showPassword, setShowPassword] = useState(false);
  
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('ANNONCE');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const [loading, setLoading] = useState(false);

  // État pour afficher ou masquer la modale "Mot de passe oublié"
  const [isForgotOpen, setIsForgotOpen] = useState(false);

  // Vérification directement dans la table 'admins' de Supabase
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase
        .from('admins')
        .select('*')
        .eq('username', adminName.trim())
        .eq('password', password)
        .single();

      if (error || !data) {
        alert("Identifiant ou mot de passe incorrect !");
      } else {
        setIsAuthenticated(true);
      }
    } catch (err) {
      console.error('Erreur de connexion :', err);
      alert("Une erreur est survenue lors de la connexion.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.from('communiques').insert([
        {
          title,
          category,
          content,
          date: date || new Date().toISOString().split('T')[0],
        },
      ]);

      if (error) throw error;

      router.push('/');
    } catch (error) {
      console.error('Erreur :', error);
      alert('Une erreur est survenue lors de la publication.');
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#111827', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <div style={{ position: 'relative', backgroundColor: '#1f2937', padding: '40px', borderRadius: '12px', border: '1px solid #374151', width: '100%', maxWidth: '400px' }}>
          <button
            onClick={() => router.push('/')}
            style={{ position: 'absolute', top: '15px', right: '15px', background: 'none', border: 'none', color: '#9ca3af', fontSize: '20px', cursor: 'pointer' }}
          >
            &times;
          </button>

          <h1 style={{ color: '#ffffff', fontSize: '22px', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>
            Espace Admin ERPEVAI
          </h1>
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', color: '#9ca3af' }}>Service Communication / Login</label>
              <input
                type="text"
                placeholder="Entrez votre identifiant"
                value={adminName}
                onChange={(e) => setAdminName(e.target.value)}
                required
                style={{ width: '100%', padding: '12px', borderRadius: '6px', backgroundColor: '#374151', border: '1px solid #4b5563', color: '#fff', boxSizing: 'border-box' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', color: '#9ca3af' }}>Mot de passe personnel</label>
              <div style={{ position: 'relative', width: '100%' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Votre code secret"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{ width: '100%', padding: '12px', paddingRight: '45px', borderRadius: '6px', backgroundColor: '#374151', border: '1px solid #4b5563', color: '#fff', boxSizing: 'border-box' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#9ca3af',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 0
                  }}
                  title={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                >
                  {showPassword ? (
                    // Icône Oeil barré (Masquer)
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                      <line x1="1" y1="1" x2="23" y2="23"></line>
                    </svg>
                  ) : (
                    // Icône Oeil ouvert (Afficher)
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* LIEN MOT DE PASSE OUBLIÉ */}
            <div style={{ textAlign: 'right', marginTop: '-5px' }}>
              <button
                type="button"
                onClick={() => setIsForgotOpen(true)}
                style={{ background: 'none', border: 'none', color: '#9ca3af', fontSize: '12px', cursor: 'pointer', padding: 0 }}
                onMouseOver={(e) => (e.currentTarget.style.color = '#ef4444')}
                onMouseOut={(e) => (e.currentTarget.style.color = '#9ca3af')}
              >
                Mot de passe oublié ?
              </button>
            </div>

            <button
              type="submit"
              style={{ width: '100%', backgroundColor: '#dc2626', color: '#fff', padding: '12px', borderRadius: '6px', fontWeight: 'bold', border: 'none', cursor: 'pointer', marginTop: '5px' }}
            >
              Se connecter
            </button>
          </form>
        </div>

        {/* MODALE DE RÉCUPÉRATION WHATSAPP */}
        {isForgotOpen && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(4px)', padding: '20px' }}>
            <div style={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '12px', maxWidth: '400px', width: '100%', padding: '30px', position: 'relative', color: '#ffffff', boxSizing: 'border-box' }}>
              
              <button 
                onClick={() => setIsForgotOpen(false)}
                style={{ position: 'absolute', top: '15px', right: '15px', background: 'none', border: 'none', color: '#9ca3af', fontSize: '20px', cursor: 'pointer' }}
              >
                &times;
              </button>

              <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '12px', color: '#ef4444' }}>Récupération d'accès</h3>
              <p style={{ fontSize: '13px', color: '#d1d5db', marginBottom: '24px', lineHeight: '1.5' }}>
                Cliquez sur le bouton ci-dessous pour contacter directement le support technique par WhatsApp afin de réinitialiser vos accès administrateur en toute sécurité.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a
                  href="https://wa.me/2250545946345?text=Bonjour,%20je%20suis%20bloqué%20sur%20l'espace%20admin%20d'ERPEVAI%20et%20j'aimerais%20réinitialiser%20mon%20mot%20de%20passe."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'block', width: '100%', textAlign: 'center', backgroundColor: '#16a34a', color: '#ffffff', padding: '12px', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none', boxSizing: 'border-box' }}
                >
                  Contacter le Support via WhatsApp
                </a>

                <button
                  type="button"
                  onClick={() => setIsForgotOpen(false)}
                  style={{ width: '100%', backgroundColor: '#374151', color: '#d1d5db', padding: '12px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}
                >
                  Fermer
                </button>
              </div>

            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#111827', color: '#ffffff', padding: '40px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'relative', width: '100%', maxWidth: '600px', backgroundColor: '#1f2937', padding: '30px', borderRadius: '12px', border: '1px solid #374151' }}>
        <button
          onClick={() => router.push('/')}
          style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', color: '#9ca3af', fontSize: '24px', cursor: 'pointer' }}
        >
          &times;
        </button>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h1 style={{ fontSize: '22px', fontWeight: 'bold' }}>Publier une information</h1>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Titre du communiqué</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              style={{ width: '100%', padding: '10px', borderRadius: '6px', backgroundColor: '#374151', border: '1px solid #4b5563', color: '#fff', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Catégorie</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={{ width: '100%', padding: '10px', borderRadius: '6px', backgroundColor: '#374151', border: '1px solid #4b5563', color: '#fff', boxSizing: 'border-box' }}
            >
              <option value="ANNONCE">Annonce</option>
              <option value="CULTE">Culte</option>
              <option value="COMMUNIQUÉ">Communiqué</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              style={{ width: '100%', padding: '10px', borderRadius: '6px', backgroundColor: '#374151', border: '1px solid #4b5563', color: '#fff', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Contenu / Message</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              rows={5}
              style={{ width: '100%', padding: '10px', borderRadius: '6px', backgroundColor: '#374151', border: '1px solid #4b5563', color: '#fff', boxSizing: 'border-box' }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{ backgroundColor: '#dc2626', color: '#fff', padding: '12px', borderRadius: '6px', fontWeight: 'bold', border: 'none', cursor: 'pointer', marginTop: '10px' }}
          >
            {loading ? 'Publication en cours...' : 'Publier et voir sur le site'}
          </button>
        </form>
      </div>
    </div>
  );
}