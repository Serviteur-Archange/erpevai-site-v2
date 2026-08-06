'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../supabase';

interface Communique {
  title: string;
  category: string;
  content: string;
  date: string;
}

export default function AdminPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminName, setAdminName] = useState('');
  const [password, setPassword] = useState('');
  
  // État pour afficher/masquer le mot de passe
  const [showPassword, setShowPassword] = useState(false);
  const [isForgotOpen, setIsForgotOpen] = useState(false);

  // États pour la gestion des communiqués (Dashboard)
  const [communiques, setCommuniques] = useState<Communique[]>([]);
  const [originalTitle, setOriginalTitle] = useState<string | null>(null); // Pour suivre l'ancien titre en cas de modification
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('ANNONCE');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const [loading, setLoading] = useState(false);

  // Charger les communiqués depuis Supabase une fois connecté
  useEffect(() => {
    if (isAuthenticated) {
      fetchCommuniques();
    }
  }, [isAuthenticated]);

  const fetchCommuniques = async () => {
    const { data, error } = await supabase
      .from('communiques')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Erreur chargement communiqués :', error);
    } else {
      setCommuniques(data || []);
    }
  };

  // Vérification dans la table 'admins' de Supabase
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

  // Soumission (Ajout ou Modification)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const communiqueData = {
        title,
        category,
        content,
        date: date || new Date().toISOString().split('T')[0],
      };

      if (originalTitle !== null) {
        // Mode Modification (on cible l'élément par son ancien titre)
        const { error } = await supabase
          .from('communiques')
          .update(communiqueData)
          .eq('title', originalTitle);

        if (error) throw error;
        alert('Communiqué mis à jour avec succès !');
      } else {
        // Mode Ajout
        const { error } = await supabase
          .from('communiques')
          .insert([communiqueData]);

        if (error) throw error;
        alert('Communiqué publié avec succès !');
      }

      // Réinitialiser le formulaire
      resetForm();
      fetchCommuniques();
    } catch (error) {
      console.error('Erreur :', error);
      alert('Une erreur est survenue lors de l\'enregistrement.');
    } finally {
      setLoading(false);
    }
  };

  // Préparer le formulaire pour la modification
  const handleEdit = (communique: Communique) => {
    setOriginalTitle(communique.title);
    setTitle(communique.title);
    setCategory(communique.category);
    setContent(communique.content);
    setDate(communique.date);
  };

  // Supprimer un communiqué
  const handleDelete = async (itemTitle: string) => {
    if (!confirm('Voulez-vous vraiment supprimer ce communiqué ?')) return;

    try {
      const { error } = await supabase
        .from('communiques')
        .delete()
        .eq('title', itemTitle);

      if (error) throw error;
      fetchCommuniques();
    } catch (error) {
      console.error('Erreur lors de la suppression :', error);
      alert('Impossible de supprimer ce communiqué.');
    }
  };

  // Annuler l'édition
  const resetForm = () => {
    setOriginalTitle(null);
    setTitle('');
    setCategory('ANNONCE');
    setContent('');
    setDate('');
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
                  style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af', padding: 0 }}
                >
                  {showPassword ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                  )}
                </button>
              </div>
            </div>

            <div style={{ textAlign: 'right', marginTop: '-5px' }}>
              <button
                type="button"
                onClick={() => setIsForgotOpen(true)}
                style={{ background: 'none', border: 'none', color: '#9ca3af', fontSize: '12px', cursor: 'pointer', padding: 0 }}
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

        {isForgotOpen && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(4px)', padding: '20px' }}>
            <div style={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '12px', maxWidth: '400px', width: '100%', padding: '30px', position: 'relative', color: '#ffffff' }}>
              <button onClick={() => setIsForgotOpen(false)} style={{ position: 'absolute', top: '15px', right: '15px', background: 'none', border: 'none', color: '#9ca3af', fontSize: '20px', cursor: 'pointer' }}>&times;</button>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '12px', color: '#ef4444' }}>Récupération d'accès</h3>
              <p style={{ fontSize: '13px', color: '#d1d5db', marginBottom: '24px', lineHeight: '1.5' }}>
                Contactez directement le support technique par WhatsApp pour réinitialiser vos accès administrateur.
              </p>
              <a
                href="https://wa.me/2250545946345?text=Bonjour,%20je%20suis%20bloqué%20sur%20l'espace%20admin%20d'ERPEVAI%20et%20j'aimerais%20réinitialiser%20mon%20mot%20de%20passe."
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', width: '100%', textAlign: 'center', backgroundColor: '#16a34a', color: '#ffffff', padding: '12px', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none', boxSizing: 'border-box' }}
              >
                Contacter le Support via WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#111827', color: '#ffffff', padding: '40px 20px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '30px', position: 'relative' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#1f2937', padding: '20px', borderRadius: '12px', border: '1px solid #374151' }}>
          <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Tableau de bord - Gestion des Communiqués</h1>
          <button
            onClick={() => router.push('/')}
            style={{ backgroundColor: '#374151', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}
          >
            Retour au site
          </button>
        </div>

        {/* Formulaire Ajout / Modification */}
        <div style={{ backgroundColor: '#1f2937', padding: '30px', borderRadius: '12px', border: '1px solid #374151' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '15px', color: originalTitle !== null ? '#3b82f6' : '#22c55e' }}>
            {originalTitle !== null ? 'Modifier le communiqué' : 'Publier une nouvelle information'}
          </h2>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', color: '#9ca3af' }}>Titre</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                style={{ width: '100%', padding: '10px', borderRadius: '6px', backgroundColor: '#374151', border: '1px solid #4b5563', color: '#fff', boxSizing: 'border-box' }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', color: '#9ca3af' }}>Catégorie</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  style={{ width: '100%', padding: '10px', borderRadius: '6px', backgroundColor: '#374151', border: '1px solid #4b5563', color: '#fff', boxSizing: 'border-box' }}
                >
                  <option value="ANNONCE">Annonce</option>
                  <option value="CULTE">Culte</option>
                  <option value="COMMUNIQUÉ">Communiqué</option>
                  <option value="DIRECTION">Direction</option>
                  <option value="ÉVÉNEMENT">Événement</option>
                  <option value="SÉMINAIRE">Séminaire</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', color: '#9ca3af' }}>Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  style={{ width: '100%', padding: '10px', borderRadius: '6px', backgroundColor: '#374151', border: '1px solid #4b5563', color: '#fff', boxSizing: 'border-box' }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', color: '#9ca3af' }}>Contenu / Message</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                rows={4}
                style={{ width: '100%', padding: '10px', borderRadius: '6px', backgroundColor: '#374151', border: '1px solid #4b5563', color: '#fff', boxSizing: 'border-box' }}
              />
            </div>

            <div style={{ display: 'flex', gap: '10px', marginTop: '5px' }}>
              <button
                type="submit"
                disabled={loading}
                style={{ flex: 1, backgroundColor: originalTitle !== null ? '#3b82f6' : '#dc2626', color: '#fff', padding: '12px', borderRadius: '6px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}
              >
                {loading ? 'Enregistrement...' : originalTitle !== null ? 'Mettre à jour' : 'Publier'}
              </button>

              {originalTitle !== null && (
                <button
                  type="button"
                  onClick={resetForm}
                  style={{ backgroundColor: '#4b5563', color: '#fff', padding: '12px 20px', borderRadius: '6px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}
                >
                  Annuler
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Liste des communiqués existants avec options Modifier / Supprimer */}
        <div style={{ backgroundColor: '#1f2937', padding: '30px', borderRadius: '12px', border: '1px solid #374151' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px' }}>Communiqués enregistrés</h2>

          {communiques.length === 0 ? (
            <p style={{ color: '#9ca3af', fontSize: '14px' }}>Aucun communiqué pour le moment.</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {communiques.map((item, index) => (
                <div key={index} style={{ backgroundColor: '#374151', padding: '15px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '15px' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '5px' }}>
                      <span style={{ fontSize: '11px', backgroundColor: '#dc2626', padding: '2px 8px', borderRadius: '4px', fontWeight: 'bold' }}>{item.category}</span>
                      <span style={{ fontSize: '12px', color: '#9ca3af' }}>{item.date}</span>
                    </div>
                    <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '5px' }}>{item.title}</h3>
                    <p style={{ fontSize: '13px', color: '#d1d5db', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{item.content}</p>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <button
                      onClick={() => handleEdit(item)}
                      style={{ backgroundColor: '#3b82f6', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}
                    >
                      Modifier
                    </button>
                    <button
                      onClick={() => handleDelete(item.title)}
                      style={{ backgroundColor: '#ef4444', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}