import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact" className="py-20 px-6 md:px-20 bg-black text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-3xl font-bold mb-6">ERPEVAI</h3>
          <p className="text-gray-400 leading-8">
            Église de Réveil du Plein Évangile Vision Apostolique Internationale.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6">Navigation</h3>
          <ul className="space-y-3 text-gray-400">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/Nos-eglises" className="hover:text-white transition-colors">
                Nos églises
              </Link>
            </li>
            <li>
              <Link href="/espace-medias" className="hover:text-white transition-colors">
                Espace médias
              </Link>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6">Contact</h3>
          <p className="text-gray-400">Bouaké - Côte d’Ivoire</p>
          <p className="text-gray-400 mt-3">WhatsApp : 0709172800</p>
          <p className="text-gray-400 mt-3">Service Communication : 05946345</p>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500">
        © 2026 ERPEVAI - Tous droits réservés
      </div>
    </footer>
  );
}