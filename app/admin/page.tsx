'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

interface Communique {
  id?: string;
  title: string;
  category: string;
  content: string;
  date?: string;
}

interface Enseignement {
  id?: string;
  title: string;
  category: string;
  image_url?: string;
  excerpt: string;
  content: string; // <-- Remettre content
  slug?: string;
  created_at?: string;
}

export default function AdminPage() {
  const router = useRouter();

  // Auth
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminName, setAdminName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isForgotOpen, setIsForgotOpen] = useState(false);

  // Navigation Onglets
  const [activeTab, setActiveTab] = useState<'communiques' | 'enseignements'>('communiques');

  // --- ÉTATS COMMUNIQUÉS ---
  const [communiques, setCommuniques] = useState<Communique[]>([]);
  const [originalTitleCommunique, setOriginalTitleCommunique] = useState<string | null>(null);
  const [communiqueTitle, setCommuniqueTitle] = useState('');
  const [communiqueCategory, setCommuniqueCategory] = useState('ANNONCE');
  const [communiqueContent, setCommuniqueContent] = useState('');
  const [communiqueDate, setCommuniqueDate] = useState('');
  const [loadingCommunique, setLoadingCommunique] = useState(false);

  // --- ÉTATS ENSEIGNEMENTS ---
  const [enseignements, setEnseignements] = useState<Enseignement[]>([]);
  const [editingEnseignementId, setEditingEnseignementId] = useState<string | null>(null);
  const [ensTitle, setEnsTitle] = useState('');
  const [ensCategory, setEnsCategory] = useState('Prière & Jeûne');
  const [ensImageUrl, setEnsImageUrl] = useState('');
  const [uploadingImage, setUploadingImage] = useState(false);
  const [ensExcerpt, setEnsExcerpt] = useState('');
  const [ensContent, setEnsContent] = useState('');
  const [loadingEnseignement, setLoadingEnseignement] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      fetchCommuniques();
      fetchEnseignements();
    }
  }, [isAuthenticated]);

  const fetchCommuniques = async () => {
    const { data, error } = await supabase
      .from('communiques')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) setCommuniques(data);
  };

  const fetchEnseignements = async () => {
    const { data, error } = await supabase
      .from('enseignements')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) setEnseignements(data);
  };

  // UPLOAD D'IMAGE VERS SUPABASE STORAGE (Bucket: images)
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from('images')
        .upload(fileName, file, { cacheControl: '3600', upsert: true });

      if (uploadError) throw uploadError;

      const { data } = supabase.storage.from('images').getPublicUrl(fileName);
      setEnsImageUrl(data.publicUrl);
    } catch (err: any) {
      console.error("Erreur téléversement :", err);
      alert("Erreur d'envoi de l'image : " + (err?.message || "Vérifiez votre bucket 'images'"));
    } finally {
      setUploadingImage(false);
    }
  };

  // Connexion Admin
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

  // --- ACTIONS COMMUNIQUÉS ---
  const handleCommuniqueSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoadingCommunique(true);

   try {
  // 1. Générer le slug proprement à partir du titre
  const generatedSlug = ensTitle
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Enlève les caractères spéciaux
    .replace(/[\s_-]+/g, '-') // Remplace les espaces par des tirets
    .replace(/^-+|-+$/g, '');

  // 2. Préparer le payload
  const payload = {
    title: ensTitle,
    category: ensCategory,
    image_url: ensImageUrl,
    excerpt: ensExcerpt,
    content: ensContent, // <-- Remplacez "content" si votre colonne s'appelle différemment dans Supabase
    slug: `${generatedSlug}-${Date.now()}`
  };

      if (originalTitleCommunique !== null) {
        const { error } = await supabase
          .from('communiques')
          .update(payload)
          .eq('title', originalTitleCommunique);
        if (error) throw error;
        alert('Communiqué mis à jour !');
      } else {
        const { error } = await supabase.from('communiques').insert([payload]);
        if (error) throw error;
        alert('Communiqué publié !');
      }

      resetCommuniqueForm();
      fetchCommuniques();
    } catch (err: any) {
      console.error(err);
      alert('Erreur lors de l\'enregistrement : ' + (err?.message || 'Inconnue'));
    } finally {
      setLoadingCommunique(false);
    }
  };

  const handleEditCommunique = (item: Communique) => {
    setOriginalTitleCommunique(item.title);
    setCommuniqueTitle(item.title);
    setCommuniqueCategory(item.category);
    setCommuniqueContent(item.content);
    setCommuniqueDate(item.date || '');
  };

  const handleDeleteCommunique = async (itemTitle: string) => {
    if (!confirm('Supprimer ce communiqué ?')) return;
    const { error } = await supabase.from('communiques').delete().eq('title', itemTitle);
    if (!error) fetchCommuniques();
  };

  const resetCommuniqueForm = () => {
    setOriginalTitleCommunique(null);
    setCommuniqueTitle('');
    setCommuniqueCategory('ANNONCE');
    setCommuniqueContent('');
    setCommuniqueDate('');
  };

  // --- ACTIONS ENSEIGNEMENTS ---
  const handleEnseignementSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoadingEnseignement(true);

    const generatedSlug = ensTitle
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");

    try {
      const payload = {
        title: ensTitle,
        category: ensCategory,
        image_url: ensImageUrl,
        excerpt: ensExcerpt,
        description: ensContent,
        slug: `${generatedSlug}-${Date.now()}`
      };

      if (editingEnseignementId) {
        const { error } = await supabase
          .from('enseignements')
          .update(payload)
          .eq('id', editingEnseignementId);

        if (error) {
          alert(`Erreur Supabase: ${error.message}`);
          return;
        }
        alert('Enseignement mis à jour !');
      } else {
        const { error } = await supabase.from('enseignements').insert([payload]);

        if (error) {
          alert(`Erreur Supabase: ${error.message}`);
          return;
        }
        alert('Enseignement publié avec succès !');
      }

      resetEnseignementForm();
      fetchEnseignements();
    } catch (err: any) {
      alert(`Erreur: ${err?.message || 'Une erreur est survenue'}`);
    } finally {
      setLoadingEnseignement(false);
    }
  };

  const handleEditEnseignement = (item: Enseignement) => {
    if (item.id) setEditingEnseignementId(item.id);
    setEnsTitle(item.title);
    setEnsCategory(item.category);
    setEnsImageUrl(item.image_url || '');
    setEnsExcerpt(item.excerpt);
    setEnsContent(item.description || '');
  };

  const handleDeleteEnseignement = async (id?: string) => {
    if (!id || !confirm('Supprimer cet enseignement ?')) return;
    const { error } = await supabase.from('enseignements').delete().eq('id', id);
    if (!error) fetchEnseignements();
  };

  const resetEnseignementForm = () => {
    setEditingEnseignementId(null);
    setEnsTitle('');
    setEnsCategory('Prière & Jeûne');
    setEnsImageUrl('');
    setEnsExcerpt('');
    setEnsContent('');
  };

  // ÉCRAN DE CONNEXION
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
              <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', color: '#9ca3af' }}>Identifiant Admin</label>
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
              <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', color: '#9ca3af' }}>Mot de passe</label>
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
                  👁
                </button>
              </div>
            </div>

            <div style={{ textAlign: 'right' }}>
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
              style={{ width: '100%', backgroundColor: '#dc2626', color: '#fff', padding: '12px', borderRadius: '6px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}
            >
              Se connecter
            </button>
          </form>
        </div>

        {isForgotOpen && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)', padding: '20px' }}>
            <div style={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '12px', maxWidth: '400px', width: '100%', padding: '30px', position: 'relative', color: '#ffffff' }}>
              <button onClick={() => setIsForgotOpen(false)} style={{ position: 'absolute', top: '15px', right: '15px', background: 'none', border: 'none', color: '#9ca3af', fontSize: '20px', cursor: 'pointer' }}>&times;</button>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '12px', color: '#ef4444' }}>Récupération d'accès</h3>
              <p style={{ fontSize: '13px', color: '#d1d5db', marginBottom: '24px' }}>
                Contactez le support technique via WhatsApp pour réinitialiser vos identifiants.
              </p>
              <a
                href="https://wa.me/2250545946345?text=Bonjour,%20je%20souhaite%20reinitialiser%20mon%20mot%20de%20passe%20admin%20ERPEVAI."
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', width: '100%', textAlign: 'center', backgroundColor: '#16a34a', color: '#ffffff', padding: '12px', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none' }}
              >
                Contacter via WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    );
  }

  // DASHBOARD ADMIN CONNECTÉ
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#111827', color: '#ffffff', padding: '40px 20px' }}>
      <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Entête Dashboard */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#1f2937', padding: '20px', borderRadius: '12px', border: '1px solid #374151' }}>
          <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Panneau Administration</h1>
          <button
            onClick={() => router.push('/')}
            style={{ backgroundColor: '#374151', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}
          >
            Retour au site
          </button>
        </div>

        {/* Boutons d'Onglets */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={() => setActiveTab('communiques')}
            style={{
              flex: 1,
              padding: '12px',
              borderRadius: '8px',
              fontWeight: 'bold',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: activeTab === 'communiques' ? '#dc2626' : '#1f2937',
              color: '#ffffff'
            }}
          >
            Communiqués Officiels
          </button>
          <button
            onClick={() => setActiveTab('enseignements')}
            style={{
              flex: 1,
              padding: '12px',
              borderRadius: '8px',
              fontWeight: 'bold',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: activeTab === 'enseignements' ? '#2563eb' : '#1f2937',
              color: '#ffffff'
            }}
          >
            Gestion des Enseignements
          </button>
        </div>

        {/* --- ONGLET 1 : COMMUNIQUÉS --- */}
        {activeTab === 'communiques' && (
          <>
            <div style={{ backgroundColor: '#1f2937', padding: '30px', borderRadius: '12px', border: '1px solid #374151' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '15px', color: originalTitleCommunique !== null ? '#3b82f6' : '#ef4444' }}>
                {originalTitleCommunique !== null ? 'Modifier le communiqué' : 'Publier une annonce / communiqué'}
              </h2>

              <form onSubmit={handleCommuniqueSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', color: '#9ca3af' }}>Titre</label>
                  <input
                    type="text"
                    value={communiqueTitle}
                    onChange={(e) => setCommuniqueTitle(e.target.value)}
                    required
                    style={{ width: '100%', padding: '10px', borderRadius: '6px', backgroundColor: '#374151', border: '1px solid #4b5563', color: '#fff', boxSizing: 'border-box' }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', color: '#9ca3af' }}>Catégorie</label>
                    <select
                      value={communiqueCategory}
                      onChange={(e) => setCommuniqueCategory(e.target.value)}
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
                      value={communiqueDate}
                      onChange={(e) => setCommuniqueDate(e.target.value)}
                      style={{ width: '100%', padding: '10px', borderRadius: '6px', backgroundColor: '#374151', border: '1px solid #4b5563', color: '#fff', boxSizing: 'border-box' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', color: '#9ca3af' }}>Message</label>
                  <textarea
                    value={communiqueContent}
                    onChange={(e) => setCommuniqueContent(e.target.value)}
                    required
                    rows={4}
                    style={{ width: '100%', padding: '10px', borderRadius: '6px', backgroundColor: '#374151', border: '1px solid #4b5563', color: '#fff', boxSizing: 'border-box' }}
                  />
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    type="submit"
                    disabled={loadingCommunique}
                    style={{ flex: 1, backgroundColor: originalTitleCommunique !== null ? '#3b82f6' : '#dc2626', color: '#fff', padding: '12px', borderRadius: '6px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}
                  >
                    {loadingCommunique ? 'Enregistrement...' : originalTitleCommunique !== null ? 'Mettre à jour' : 'Publier'}
                  </button>
                  {originalTitleCommunique !== null && (
                    <button type="button" onClick={resetCommuniqueForm} style={{ backgroundColor: '#4b5563', color: '#fff', padding: '12px 20px', borderRadius: '6px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
                      Annuler
                    </button>
                  )}
                </div>
              </form>
            </div>

            <div style={{ backgroundColor: '#1f2937', padding: '30px', borderRadius: '12px', border: '1px solid #374151' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px' }}>Communiqués en ligne ({communiques.length})</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {communiques.map((item, idx) => (
                  <div key={idx} style={{ backgroundColor: '#374151', padding: '15px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <span style={{ fontSize: '11px', backgroundColor: '#dc2626', padding: '2px 8px', borderRadius: '4px', fontWeight: 'bold', marginRight: '8px' }}>{item.category}</span>
                      <span style={{ fontSize: '12px', color: '#9ca3af' }}>{item.date}</span>
                      <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginTop: '4px' }}>{item.title}</h3>
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button onClick={() => handleEditCommunique(item)} style={{ backgroundColor: '#3b82f6', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}>Modifier</button>
                      <button onClick={() => handleDeleteCommunique(item.title)} style={{ backgroundColor: '#ef4444', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}>Supprimer</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* --- ONGLET 2 : ENSEIGNEMENTS --- */}
        {activeTab === 'enseignements' && (
          <>
            <div style={{ backgroundColor: '#1f2937', padding: '30px', borderRadius: '12px', border: '1px solid #374151' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '15px', color: editingEnseignementId ? '#3b82f6' : '#2563eb' }}>
                {editingEnseignementId ? 'Modifier l\'enseignement' : 'Publier un nouvel enseignement'}
              </h2>

              <form onSubmit={handleEnseignementSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', color: '#9ca3af' }}>Titre de l'enseignement</label>
                  <input
                    type="text"
                    value={ensTitle}
                    onChange={(e) => setEnsTitle(e.target.value)}
                    placeholder="ex: La puissance de la prière fervente"
                    required
                    style={{ width: '100%', padding: '10px', borderRadius: '6px', backgroundColor: '#374151', border: '1px solid #4b5563', color: '#fff', boxSizing: 'border-box' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', color: '#9ca3af' }}>Catégorie</label>
                  <select
                    value={ensCategory}
                    onChange={(e) => setEnsCategory(e.target.value)}
                    style={{ width: '100%', padding: '10px', borderRadius: '6px', backgroundColor: '#374151', border: '1px solid #4b5563', color: '#fff', boxSizing: 'border-box' }}
                  >
                    <option value="Prière & Jeûne">Prière & Jeûne</option>
                    <option value="Foi & Victoire">Foi & Victoire</option>
                    <option value="Vie Chrétienne">Vie Chrétienne</option>
                    <option value="Éditorial">Éditorial</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', color: '#9ca3af', fontWeight: 'bold' }}>
                    IMAGE DE L'ARTICLE
                  </label>
                  <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '10px 15px', border: '1px solid #d1d5db' }}>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      style={{
                        width: '100%',
                        color: '#374151',
                        fontSize: '14px',
                        cursor: 'pointer'
                      }}
                    />
                  </div>
                  {uploadingImage && <p style={{ fontSize: '12px', color: '#3b82f6', marginTop: '6px' }}>Téléversement en cours...</p>}
                  {ensImageUrl && !uploadingImage && (
                    <div style={{ marginTop: '10px', borderRadius: '8px', overflow: 'hidden', height: '120px', width: '200px', backgroundColor: '#111827' }}>
                      <img src={ensImageUrl} alt="Aperçu" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  )}
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', color: '#9ca3af' }}>Résumé (Extrait court)</label>
                  <textarea
                    value={ensExcerpt}
                    onChange={(e) => setEnsExcerpt(e.target.value)}
                    required
                    rows={2}
                    placeholder="Court aperçu..."
                    style={{ width: '100%', padding: '10px', borderRadius: '6px', backgroundColor: '#374151', border: '1px solid #4b5563', color: '#fff', boxSizing: 'border-box' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', color: '#9ca3af' }}>Contenu complet du message</label>
                  <textarea
                    value={ensContent}
                    onChange={(e) => setEnsContent(e.target.value)}
                    required
                    rows={6}
                    placeholder="Message complet..."
                    style={{ width: '100%', padding: '10px', borderRadius: '6px', backgroundColor: '#374151', border: '1px solid #4b5563', color: '#fff', boxSizing: 'border-box' }}
                  />
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    type="submit"
                    disabled={loadingEnseignement || uploadingImage}
                    style={{ flex: 1, backgroundColor: editingEnseignementId ? '#3b82f6' : '#2563eb', color: '#fff', padding: '12px', borderRadius: '6px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}
                  >
                    {loadingEnseignement ? 'Enregistrement...' : editingEnseignementId ? 'Mettre à jour' : 'Publier Enseignement'}
                  </button>
                  {editingEnseignementId && (
                    <button type="button" onClick={resetEnseignementForm} style={{ backgroundColor: '#4b5563', color: '#fff', padding: '12px 20px', borderRadius: '6px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
                      Annuler
                    </button>
                  )}
                </div>
              </form>
            </div>

            <div style={{ backgroundColor: '#1f2937', padding: '30px', borderRadius: '12px', border: '1px solid #374151' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px' }}>Enseignements publiés ({enseignements.length})</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {enseignements.map((item) => (
                  <div key={item.id} style={{ backgroundColor: '#374151', padding: '15px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      {item.image_url && (
                        <img src={item.image_url} alt="" style={{ width: '50px', height: '50px', borderRadius: '6px', objectFit: 'cover' }} />
                      )}
                      <div>
                        <span style={{ fontSize: '11px', backgroundColor: '#2563eb', padding: '2px 8px', borderRadius: '4px', fontWeight: 'bold', marginRight: '8px' }}>{item.category}</span>
                        <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginTop: '4px' }}>{item.title}</h3>
                        <p style={{ fontSize: '12px', color: '#9ca3af', marginTop: '2px' }}>{item.excerpt}</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button onClick={() => handleEditEnseignement(item)} style={{ backgroundColor: '#3b82f6', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}>Modifier</button>
                      <button onClick={() => handleDeleteEnseignement(item.id)} style={{ backgroundColor: '#ef4444', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}>Supprimer</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

      </div>
    </div>
  );
}