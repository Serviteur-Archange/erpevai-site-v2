"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileVieEgliseOpen, setIsMobileVieEgliseOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-blue-950/95 backdrop-blur-md border-b border-blue-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-3 sm:px-6">
        
        {/* Logo et Titre */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
          <div className="relative w-10 h-10 sm:w-16 sm:h-16 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Logo ERPEVAI"
              fill
              className="object-contain"
            />
          </div>

          <div className="flex flex-col justify-center min-w-0">
            <h1 className="text-xs sm:text-lg font-bold leading-tight truncate">
              Église de Réveil du Plein Évangile
            </h1>
            <p className="text-[9px] sm:text-xs text-gray-300 hidden sm:block">
              Vision Apostolique Internationale
            </p>
          </div>
        </div>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex gap-8 text-lg text-white font-medium items-center flex-shrink-0">
          <Link href="/" className="hover:text-blue-300 transition">
            Accueil
          </Link>

          {/* MENU DÉROULANT */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-blue-300 transition text-white font-medium text-lg h-full py-2 cursor-pointer">
              Vie de l'Église
              <svg
                className="w-4 h-4 transition-transform group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown */}
            <div className="absolute left-0 mt-0 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-100">
              <div className="py-2">
                <Link href="/vie-eglise/notre-histoire" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">
                  Notre histoire
                </Link>
                <Link href="/vie-eglise/cdn" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">
                  Le CDN
                </Link>
                <Link href="/vie-eglise/departements" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">
                  Nos départements
                </Link>
                <Link href="/vie-eglise/institut-pastoral" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">
                  Institut Pastoral
                </Link>
              </div>
            </div>
          </div>

          <Link href="/Nos-eglises" className="hover:text-blue-300 transition">Nos églises</Link>

          <Link href="/espace-medias" className="hover:text-blue-300 transition">
            Espace médias
          </Link>
          
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-donation'))}
            className="bg-red-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-xl shadow transition-colors cursor-pointer"
          >
            Faire un don
          </button>
        </nav>

        {/* BOUTON HAMBURGER MOBILE */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white focus:outline-none p-2 ml-2 flex-shrink-0 z-50 cursor-pointer"
          aria-label="Menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* MENU DÉROULANT MOBILE */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-blue-900 bg-blue-950 px-6 py-6 flex flex-col gap-4 shadow-2xl">
          <Link 
            href="/" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-medium hover:text-blue-300 transition py-2 border-b border-blue-900/50"
          >
            Accueil
          </Link>

          {/* Accordéon Vie de l'Église sur mobile */}
          <div>
            <button 
              onClick={() => setIsMobileVieEgliseOpen(!isMobileVieEgliseOpen)}
              className="w-full flex items-center justify-between text-lg font-medium hover:text-blue-300 transition py-2 border-b border-blue-900/50 cursor-pointer"
            >
              <span>Vie de l'Église</span>
              <svg className={`w-4 h-4 transition-transform ${isMobileVieEgliseOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isMobileVieEgliseOpen && (
              <div className="pl-4 py-2 flex flex-col gap-2 bg-blue-900/40 rounded-lg mt-2">
                <Link 
                  href="/vie-eglise/notre-histoire" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm text-gray-200 hover:text-white py-1.5"
                >
                  Notre histoire
                </Link>
                <Link 
                  href="/vie-eglise/cdn" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm text-gray-200 hover:text-white py-1.5"
                >
                  Le CDN
                </Link>
                <Link 
                  href="/vie-eglise/departements" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm text-gray-200 hover:text-white py-1.5"
                >
                  Nos départements
                </Link>
                <Link 
                  href="/vie-eglise/institut-pastoral" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm text-gray-200 hover:text-white py-1.5"
                >
                  Institut Pastoral
                </Link>
              </div>
            )}
          </div>

          <Link 
            href="/Nos-eglises" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-medium hover:text-blue-300 transition py-2 border-b border-blue-900/50"
          >
            Nos églises
          </Link>

          <Link 
            href="/espace-medias" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-medium hover:text-blue-300 transition py-2 border-b border-blue-900/50"
          >
            Espace médias
          </Link>

          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              window.dispatchEvent(new CustomEvent('open-donation'));
            }}
            className="bg-red-600 hover:bg-blue-700 text-white font-medium px-5 py-3 rounded-xl shadow transition-colors text-center mt-2 cursor-pointer"
          >
            Faire un don
          </button>
        </div>
      )}
    </header>
  );
}