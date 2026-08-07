"use client";
import { useState } from 'react';
import Image from 'next/image';

// 1. Importe les composants de la librairie et son style CSS
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Gallery() {
  // Tes images (je reprends ta liste de 8 photos pour l'exemple)
  const images = [
    "IMG_2496.jpg", "IMG_2503.jpg", "IMG_2507.jpg", "IMG_2509.jpg",
    "IMG_2513.jpg", "IMG_2515.jpg", "IMG_2516.jpg", "IMG_2518.jpg"
  ];

  // 2. État pour savoir quelle image est ouverte (-1 = aucune)
  const [index, setIndex] = useState(-1);

  // 3. Transforme tes noms de fichiers en un tableau d'objets requis par la Lightbox
  const slides = images.map((imageName) => ({
    src: `/${imageName}`,
    alt: imageName
  }));

  return (
    <div className="w-full">
      {/* Grille des miniatures */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((imageName, slideIndex) => (
          <div
            key={slideIndex}
            // 4. Au clic, on ouvre la lightbox à l'index correspondant
            onClick={() => setIndex(slideIndex)}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-gray-200 group cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={`/${imageName}`}
              alt={imageName}
              fill
              priority={slideIndex < 4}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* 5. Intégration de la Lightbox */}
      <Lightbox
        // La lightbox s'ouvre si 'index' n'est pas -1
        open={index >= 0}
        // Affiche l'image correspondant à l'index cliqué
        index={index}
        // Ferme la lightbox en remettant l'index à -1
        close={() => setIndex(-1)}
        // Les sources des images
        slides={slides}
        // --- OPTIONS SUPPLÉMENTAIRES ---
        // Ajoute les plugins de Zoom et de plein écran si tu le souhaites
        // (Tu devras installer ces plugins séparément si tu veux les options avancées)
        // plugins={[Zoom, Fullscreen]}
      />
    </div>
  );
}