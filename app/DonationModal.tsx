'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DonationModal({ isOpen, onClose }: DonationModalProps) {
  // États pour le Mobile Money
  const [showMobileMoney, setShowMobileMoney] = useState(false);
  const [selectedOperator, setSelectedOperator] = useState<string | null>(null);

  // États pour les opérations bancaires
  const [showBankOptions, setShowBankOptions] = useState(false);
  const [selectedBankMethod, setSelectedBankMethod] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleClose = () => {
    onClose();
    setShowMobileMoney(false);
    setSelectedOperator(null);
    setShowBankOptions(false);
    setSelectedBankMethod(null);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div 
        className="bg-slate-950 border border-slate-800 w-full max-w-4xl rounded-2xl shadow-2xl relative text-white overflow-hidden flex flex-col md:flex-row min-h-[580px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* PARTIE GAUCHE : L'IMAGE + LOGO */}
        <div className="w-full md:w-1/2 relative min-h-[200px] md:min-h-full bg-slate-900 flex items-center justify-center overflow-hidden">
          <Image 
            src="/Don Gemini.png"
            alt="Offrandes ERPEVAI"
            fill 
            className="object-cover object-center opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-blue-950/20"></div>
          <div className="absolute inset-x-0 top-0 p-6 flex items-center gap-3 bg-gradient-to-b from-black/60 to-transparent pb-12">
             <div className="w-20 h-20 relative flex-shrink-0">
               <Image 
                 src="/logo.png" 
                 alt="Logo Église"
                 fill
                 className="object-contain"
               />
             </div>
             <p className="text-white font-bold tracking-wide text-xs md:text-sm uppercase leading-tight">
               Église de Réveil du Plein Évangile
             </p>
          </div>
        </div>

        {/* PARTIE DROITE : TEXTE & OPTIONS */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center relative max-h-[90vh] overflow-y-auto">
          <button 
            onClick={handleClose}
            className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors z-10"
            aria-label="Fermer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="text-center md:text-left">
            <h3 className="text-2xl font-black text-white mb-2">Soutenir l'œuvre de Dieu</h3>
            <p className="text-slate-400 text-xs md:text-sm mb-6 max-w-md leading-relaxed">
              « Que chacun donne comme il l'a résolu en son cœur, sans tristesse ni contrainte. »
            </p>

            <div className="space-y-4">
              
              {/* --- BLOC 1 : MOBILE MONEY --- */}
              <div 
                onClick={() => {
                  setShowMobileMoney(!showMobileMoney);
                  setSelectedOperator(null);
                  setShowBankOptions(false);
                }}
                className={`p-4 bg-slate-900 border-2 rounded-xl cursor-pointer transition-all ${showMobileMoney ? 'border-blue-500 bg-slate-900/50' : 'border-slate-800 hover:border-slate-700'}`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-base font-bold text-slate-100">Mobile Money</p>
                    <p className="text-xs text-slate-400">Wave, Orange, Moov, MTN</p>
                  </div>
                  <svg className={`w-5 h-5 text-slate-400 transition-transform ${showMobileMoney ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                {showMobileMoney && (
                  <div className="mt-4 pt-4 border-t border-slate-800 grid grid-cols-2 gap-2" onClick={(e) => e.stopPropagation()}>
                    <button onClick={() => setSelectedOperator('wave')} className={`p-2 rounded-lg font-semibold text-sm transition-all ${selectedOperator === 'wave' ? 'bg-cyan-500 text-white' : 'bg-slate-950 text-slate-300 hover:bg-slate-800'}`}>Wave</button>
                    <button onClick={() => setSelectedOperator('orange')} className={`p-2 rounded-lg font-semibold text-sm transition-all ${selectedOperator === 'orange' ? 'bg-orange-500 text-white' : 'bg-slate-950 text-slate-300 hover:bg-slate-800'}`}>Orange Money</button>
                    <button onClick={() => setSelectedOperator('moov')} className={`p-2 rounded-lg font-semibold text-sm transition-all ${selectedOperator === 'moov' ? 'bg-emerald-600 text-white' : 'bg-slate-950 text-slate-300 hover:bg-slate-800'}`}>Moov Money</button>
                    <button onClick={() => setSelectedOperator('mtn')} className={`p-2 rounded-lg font-semibold text-sm transition-all ${selectedOperator === 'mtn' ? 'bg-yellow-500 text-slate-950' : 'bg-slate-950 text-slate-300 hover:bg-slate-800'}`}>MTN Money</button>
                  </div>
                )}
              </div>

              {/* CONTENU MOBILE MONEY */}
{showMobileMoney && selectedOperator && (
  <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-center" onClick={(e) => e.stopPropagation()}>
    {selectedOperator === 'wave' && (
      <div className="flex flex-col items-center py-2">
        <p className="text-sm text-cyan-400 font-bold mb-3">Scannez ce QR Code Wave ou ouvrez l'application :</p>
        
        <button 
          type="button"
          onClick={() => {
            // 1. Copie du numéro
            navigator.clipboard.writeText('0748751083');
            alert('Numéro Wave (07 48 75 10 83) copié dans le presse-papier !');

            // 2. Tente d'ouvrir directement l'application Wave installée
            window.location.href = 'wave://';

            // 3. Secours : si l'app ne s'ouvre pas au bout d'une seconde, redirige vers le store/site
            setTimeout(() => {
              window.open('https://wave.com', '_blank');
            }, 1000);
          }}
          className="w-full bg-[#11b3e5] hover:bg-[#0ea5d4] text-white font-bold py-3 px-4 rounded-xl shadow-lg transition-transform hover:scale-[1.02] flex items-center justify-center gap-2 mb-4 text-sm cursor-pointer"
        >
          <span>📱 Ouvrir l'application Wave</span>
        </button>

        <div className="w-44 h-44 bg-white p-3 rounded-xl relative shadow-lg mb-3">
          <Image src="/Cadre Culte Wave.png" alt="QR Code Wave" fill className="object-contain p-1" />
        </div>
        <p className="text-xs text-slate-400">Ou numéro : <span className="text-white font-bold">+225 07 48 75 10 83</span></p>
      </div>
    )}
    {selectedOperator === 'orange' && (
      <div className="py-2">
        <p className="text-sm text-orange-400 font-bold mb-1">Numéro Orange Money :</p>
        <p className="text-2xl font-mono font-black text-white tracking-wider my-2">07 48 75 10 83</p>
        <p className="text-xs text-slate-400">Nom : <span className="text-slate-200">ÉGLISE ERPEVAI</span></p>
      </div>
    )}
    {selectedOperator === 'moov' && (
      <div className="py-2">
        <p className="text-sm text-emerald-400 font-bold mb-1">Numéro Moov Money :</p>
        <p className="text-2xl font-mono font-black text-white tracking-wider my-2">01 XX XX XX XX</p>
        <p className="text-xs text-slate-400">Nom : <span className="text-slate-200">ÉGLISE ERPEVAI</span></p>
      </div>
    )}
    {selectedOperator === 'mtn' && (
      <div className="py-2">
        <p className="text-sm text-yellow-400 font-bold mb-1">Numéro MTN Money :</p>
        <p className="text-2xl font-mono font-black text-white tracking-wider my-2">05 XX XX XX XX</p>
        <p className="text-xs text-slate-400">Nom : <span className="text-slate-200">ÉGLISE ERPEVAI</span></p>
      </div>
    )}
  </div>
)}

              {/* --- BLOC 2 : OPÉRATIONS BANCAIRES & MICROFINANCE --- */}
              <div 
                onClick={() => {
                  setShowBankOptions(!showBankOptions);
                  setSelectedBankMethod(null);
                  setShowMobileMoney(false);
                }}
                className={`p-4 bg-slate-900 border-2 rounded-xl cursor-pointer transition-all ${showBankOptions ? 'border-blue-500 bg-slate-900/50' : 'border-slate-800 hover:border-slate-700'}`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-base font-bold text-slate-100">Banque, PayPal & COOPEC</p>
                    <p className="text-xs text-slate-400">Sélectionnez votre mode de transfert bancaire</p>
                  </div>
                  <svg className={`w-5 h-5 text-slate-400 transition-transform ${showBankOptions ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                {showBankOptions && (
                  <div className="mt-4 pt-4 border-t border-slate-800 grid grid-cols-3 gap-2" onClick={(e) => e.stopPropagation()}>
                    <button 
                      onClick={() => setSelectedBankMethod('card')}
                      className={`p-2 rounded-lg font-semibold text-xs transition-all flex flex-col items-center gap-1 ${selectedBankMethod === 'card' ? 'bg-blue-600 text-white' : 'bg-slate-950 text-slate-300 hover:bg-slate-800'}`}
                    >
                      <span>Carte Bancaire</span>
                    </button>
                    <button 
                      onClick={() => setSelectedBankMethod('paypal')}
                      className={`p-2 rounded-lg font-semibold text-xs transition-all flex flex-col items-center gap-1 ${selectedBankMethod === 'paypal' ? 'bg-indigo-600 text-white' : 'bg-slate-950 text-slate-300 hover:bg-slate-800'}`}
                    >
                      <span>PayPal</span>
                    </button>
                    <button 
                      onClick={() => setSelectedBankMethod('copec')}
                      className={`p-2 rounded-lg font-semibold text-xs transition-all flex flex-col items-center gap-1 ${selectedBankMethod === 'copec' ? 'bg-amber-600 text-white' : 'bg-slate-950 text-slate-300 hover:bg-slate-800'}`}
                    >
                      <span>COOPEC</span>
                    </button>
                  </div>
                )}
              </div>

              {showBankOptions && selectedBankMethod && (
                <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-left" onClick={(e) => e.stopPropagation()}>
                  
                  {selectedBankMethod === 'card' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                        <p className="text-sm text-blue-400 font-bold">Virement Bancaire (EcoBank)</p>
                        <div className="flex gap-1.5 bg-white/10 px-2 py-1 rounded-md">
                          <span className="text-[10px] font-black tracking-tighter text-cyan-400">VISA</span>
                          <span className="text-[10px] font-black tracking-tighter text-red-400">MC</span>
                        </div>
                      </div>
                      <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 font-mono text-xs text-slate-300 space-y-1 select-all">
                        <p><span className="text-slate-500 font-sans">Banque :</span> ECOBANK CI</p>
                        <p><span className="text-slate-500 font-sans">Code Banque :</span> CI059</p>
                        <p><span className="text-slate-500 font-sans">IBAN :</span> CI76 0590 1012 3456 7890 1234 56</p>
                        <p><span className="text-slate-500 font-sans">Titulaire :</span> ÉGLISE DE RÉVEIL DU PLEIN ÉVANGILE</p>
                      </div>
                      <p className="text-[10px] text-slate-500 text-center italic">Sélectionnez les détails ci-dessus pour effectuer votre virement.</p>
                    </div>
                  )}

                  {selectedBankMethod === 'paypal' && (
                    <div className="space-y-3 text-center py-2">
                      <div className="flex justify-center items-center gap-2 mb-2">
                        <span className="bg-white/10 px-3 py-1 rounded-full text-xs font-black text-indigo-400 tracking-wider">Paypal</span>
                      </div>
                      <p className="text-sm text-slate-300">Cliquez sur le bouton pour faire un don sécurisé en ligne :</p>
                      <a 
                        href="https://www.paypal.me/ton-lien-ici" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-5 rounded-xl text-sm transition-all mt-1"
                      >
                        Ouvrir PayPal
                      </a>
                    </div>
                  )}

                  {selectedBankMethod === 'copec' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                        <p className="text-sm text-amber-400 font-bold">Compte Microfinance COOPEC</p>
                        <span className="bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded text-[10px] font-bold">COOPEC</span>
                      </div>
                      <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 font-mono text-xs text-slate-300 space-y-1 select-all">
                        <p><span className="text-slate-500 font-sans">Institution :</span> UNACOOPEC-CI</p>
                        <p><span className="text-slate-500 font-sans">Numéro de Compte :</span> 300110045751</p>
                        <p><span className="text-slate-500 font-sans">Titulaire :</span> ÉGLISE DE RÉVEIL DU PLEIN ÉVANGILE</p>
                      </div>
                      <p className="text-[10px] text-slate-500 text-center italic">Idéal pour les dépôts directs ou virements depuis un compte COOPEC.</p>
                    </div>
                  )}

                </div>
              )}

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}