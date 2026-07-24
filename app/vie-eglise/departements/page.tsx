'use client';
import Image from "next/image";
import Link from "next/link";

export default function NosDepartementsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* 1. HEADER (BARRE DE MENU) */}
      <header className="relative z-40 w-full h-20 bg-green-600/95 backdrop-blur-md border-b border-green-500/20 px-4 md:px-8 flex items-center justify-between text-white">
        <div className="relative flex items-center h-full">
          <Link href="/" className="absolute top--5 left-0 w-20 h-20 md:w-28 md:h-28 z-50 drop-shadow">
            <Image
              src="/logo.png"
              alt="Logo ERPEVAI"
              fill
              className="object-contain"
            />
          </Link>
          <div className="pl-24 md:pl-32 flex flex-col justify-center">
            <h1 className="text-lg md:text-xl font-bold leading-tight">
              Église de Réveil du Plein Évangile
            </h1>
            <p className="text-xs text-green-100 hidden sm:block">
              Vision Apostolique Internationale
            </p>
          </div>
        </div>

        <nav className="hidden md:flex gap-8 text-lg font-medium items-center">
          <Link href="/" className="hover:text-green-200 transition">Accueil</Link>
          
          <div className="relative group py-2">
            <button className="hover:text-green-200 transition flex items-center gap-1">
              Vie de l'Église ▾
            </button>
<div className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-100 py-2">
  <Link href="/vie-eglise/notre-histoire" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600">
    Notre histoire
  </Link>
  <Link href="/vie-eglise/cdn" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600">
    Le CDN
  </Link>
  <Link href="/vie-eglise/departements" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 font-semibold">
    Nos départements
  </Link>
  <Link href="/vie-eglise/institut-pastoral" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600">
    Institut Pastoral
  </Link>
</div>
          </div>

          <Link href="/nos-eglises" className="hover:text-green-200 transition">Nos églises</Link>
          <Link href="/espace-medias" className="hover:text-green-200 transition">Espace médias</Link>
    <button
  onClick={() => window.dispatchEvent(new CustomEvent('open-donation'))}
  className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-xl shadow transition-colors"
>
  Faire un don
</button>
          </nav>
        </header>

      {/* 2. BANNIÈRE HERO */}
      <section className="relative h-[400px] flex items-center justify-center border-b border-gray-200">
        <div className="absolute inset-0 z-0">
          <Image
            src="/B27520B2-D629-4B40-A7B5-7F0A62B2FE03_1_201_a.jpeg"
            alt="Arrière-plan Nos Départements"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center text-center text-white">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase drop-shadow-md">
            Nos Départements
          </h2>
          <div className="mt-6 bg-orange-600 text-white px-6 py-3 rounded-md shadow-lg border border-orange-500 max-w-2xl">
            <p className="text-sm md:text-base font-medium tracking-wide">
              Découvrez les différents piliers et ministères actifs qui font vibrer notre communauté au quotidien.
            </p>
          </div>
        </div>
      </section>

      {/* 3. SECTION FOCUS 1 : DIACRES ET DIACONESSES (FOND BLEU ROYAL) */}
      <section className="max-w-6xl mx-auto px-4 pt-16 pb-8">
        <div className="bg-[#E6F0FA] rounded-2xl shadow-xl overflow-hidden border border-blue-200 grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          <div className="p-8 md:p-12 lg:col-span-7 flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0047AB] mb-2 block">Présidence : Diacre Yao Fructueux</span>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Le Département des Diacres et Diaconesses : Le Cœur du Service et de la Logistique
            </h3>
            
            <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-6">
              Au sein de l'Église de Réveil du Plein Évangile, le Département des Diacres et Diaconesses représente le pilier du service pratique, de l'assistance sociale et de la bonne gestion matérielle de la maison de Dieu. Présidé par le <strong>Diacre Yao Fructueux</strong>, ce corps de serviteurs et servantes dévoués met ses compétences et l'amour du prochain au service de la communauté, conformément au modèle biblique de l'Église primitive (Actes 6).
            </p>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-8 border-l-4 border-[#0047AB] pl-4 italic bg-white/80 py-2 rounded-r">
              Par leur engagement quotidien, ils permettent aux ministères spirituels de se consacrer pleinement à la prière et à la dispense de la Parole, garantissant ainsi l'équilibre et la croissance harmonieuse de l'église.
            </p>

            <h4 className="text-lg font-bold text-gray-800 mb-4 uppercase tracking-wider">Nos Piliers d'Action</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="text-[#0047AB] font-bold text-xl">•</div>
                <div>
                  <h5 className="font-semibold text-gray-900 text-sm md:text-base">L'Action Sociale et la Bienfaisance</h5>
                  <p className="text-gray-600 text-sm mt-1">Fidèle à la mission d'amour de l'Évangile, le département veille sur les membres les plus vulnérables. Il coordonne l'assistance matérielle, financière et morale auprès des malades, des veuves, des orphelins et des familles en situation de besoin.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-[#0047AB] font-bold text-xl">•</div>
                <div>
                  <h5 className="font-semibold text-gray-900 text-sm md:text-base">La Logistique et le Patrimoine</h5>
                  <p className="text-gray-600 text-sm mt-1">Sous la supervision de sa direction, les diacres et diaconesses ont la charge de l'entretien, de la préservation et de la valorisation des infrastructures de l'église, incluant la Cathédrale de la Foi et des Miracles et les différentes annexes. Ils veillent à ce que la maison de Dieu demeure un cadre accueillant et fonctionnel.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-[#0047AB] font-bold text-xl">•</div>
                <div>
                  <h5 className="font-semibold text-gray-900 text-sm md:text-base">L'Organisation des Célébrations</h5>
                  <p className="text-gray-600 text-sm mt-1">Qu'il s'agisse des cultes dominicaux, des baptêmes, de la Sainte-Cène ou des grandes conférences nationales, le département supervise l'accueil des fidèles, l'ordre général et la logistique nécessaire au bon déroulement de chaque programme.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative min-h-[300px] lg:h-auto lg:col-span-5 bg-gray-200">
            <Image
              src="/diacre.jpg"
              alt="Département des Diacres et Diaconesses"
              fill
              className="object-cover"
              sizes="(max-w-1024px) 100vw, 40vw"
            />
          </div>

        </div>
      </section>

      {/* 4. SECTION FOCUS 2 : DÉPARTEMENT DES FEMMES (FOND ROSE PURE) */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-[#FFF0F5] rounded-2xl shadow-xl overflow-hidden border border-pink-200 grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          <div className="relative min-h-[300px] lg:h-auto lg:col-span-5 bg-gray-200 lg:order-1">
            <Image
              src="/Conaf2.jpg"
              alt="Département des Femmes"
              fill
              className="object-cover"
              sizes="(max-w-1024px) 100vw, 40vw"
            />
          </div>

          <div className="p-8 md:p-12 lg:col-span-7 flex flex-col justify-center lg:order-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF1493] mb-2 block">Présidence : Prophétesse Évelyne Dago</span>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Le Département des Femmes : Pilier de Foi, de Famille et d'Impact
            </h3>
            
            <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-6">
              Au sein de l'Église de Réveil du Plein Évangile, le Département des Femmes est une force spirituelle et sociale majeure qui œuvre pour l'épanouissement intégral de la femme chrétienne. Présidé par la <strong>Prophétesse Évelyne Dago</strong>, ce département rassemble les femmes de toutes les générations pour les affermir dans leur foi, les fortifier dans leurs rôles familiaux et les équiper pour un impact concret dans l'Église et la société.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-8 border-l-4 border-[#FF1493] pl-4 italic bg-white/80 py-2 rounded-r">
              À travers une dynamique d'entraide et de prière, le département s'assure que chaque femme devienne un modèle de vertu, d'intégrité et de consécration, capable de bâtir sa maison tout en soutenant l'œuvre de Dieu.
            </p>

            <h4 className="text-lg font-bold text-gray-800 mb-4 uppercase tracking-wider">Nos Axes Majeurs d'Action</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="text-[#FF1493] font-bold text-xl">•</div>
                <div>
                  <h5 className="font-semibold text-gray-900 text-sm md:text-base">L'Affermissement Spirituel</h5>
                  <p className="text-gray-600 text-sm mt-1">Le département organise des programmes de prière, des séminaires d'édification et des retraites spirituelles. Sous la direction prophétique, ces temps forts visent à libérer les potentiels spirituels des femmes et à consolider leur vie de piété.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-[#FF1493] font-bold text-xl">•</div>
                <div>
                  <h5 className="font-semibold text-gray-900 text-sm md:text-base">L'Épanouissement Familial et Social</h5>
                  <p className="text-gray-600 text-sm mt-1">Des espaces d'échange et des formations sont proposés pour soutenir les femmes dans leurs responsabilités d'épouses, de mères et de professionnelles. Le département promeut les valeurs de dignité, de sagesse et de leadership féminin selon le modèle biblique.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-[#FF1493] font-bold text-xl">•</div>
                <div>
                  <h5 className="font-semibold text-gray-900 text-sm md:text-base">La Solidarité et les Œuvres de Charité</h5>
                  <p className="text-gray-600 text-sm mt-1">Fidèles au cœur de l'Évangile, les femmes se mobilisent activement à travers des actions de bienfaisance, des visites d'encouragement et un soutien mutuel lors des événements heureux ou difficiles de la vie communautaire.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. SECTION FOCUS 3 : DÉPARTEMENT DES JEUNES (FOND JAUNE PURE) */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-[#FFFFE0] rounded-2xl shadow-xl overflow-hidden border border-yellow-200 grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          <div className="p-8 md:p-12 lg:col-span-7 flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-widest text-yellow-600 mb-2 block">Présidence : Frère Kouadio Nicolas</span>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Le Département des Jeunes : Force Vive, Leadership et Avenir de l'Église
            </h3>
            
            <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-6">
              Au sein de l'Église de Réveil du Plein Évangile, le Département des Jeunes constitue le fer de lance de la mission, la force dynamique et le garant de la relève spirituelle. Présidé par le <strong>Frère Kouadio Nicolas</strong>, ce département rassemble la jeunesse de notre communauté avec un objectif clair : l'équiper spirituellement, intellectuellement et socialement pour relever les défis de sa génération tout en restant ancrée dans les vérités du Plein Évangile.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-8 border-l-4 border-yellow-500 pl-4 italic bg-white/80 py-2 rounded-r">
              Sous cette direction engagée, la jeunesse n'est pas seulement considérée comme l'avenir, mais comme un acteur majeur du présent, pleinement impliqué dans la vie, l'animation et le rayonnement de l'Église.
            </p>

            <h4 className="text-lg font-bold text-gray-800 mb-4 uppercase tracking-wider">Nos Axes Majeurs d'Action</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="text-yellow-600 font-bold text-xl">•</div>
                <div>
                  <h5 className="font-semibold text-gray-900 text-sm md:text-base">L'Éveil et l'Affermissement Spirituel</h5>
                  <p className="text-gray-600 text-sm mt-1">Le département propose des programmes adaptés (cultes de jeunesse, camps de prière, partages bibliques) pour amener chaque jeune à développer une relation intime et authentique avec le Seigneur Jésus-Christ et à manifester ses dons spirituels.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-yellow-600 font-bold text-xl">•</div>
                <div>
                  <h5 className="font-semibold text-gray-900 text-sm md:text-base">La Formation et le Mentorat</h5>
                  <p className="text-gray-600 text-sm mt-1">Afin de préparer les leaders de demain, des séminaires d'orientation scolaire, professionnelle et de leadership chrétien sont régulièrement organisés. Le département encourage l'excellence académique, l'intégrité et l'esprit d'initiative.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-yellow-600 font-bold text-xl">•</div>
                <div>
                  <h5 className="font-semibold text-gray-900 text-sm md:text-base">L'Épanouissement Social et Culturel</h5>
                  <p className="text-gray-600 text-sm mt-1">À travers les arts, la musique, le sport et diverses activités saines, les jeunes cultivent un esprit de fraternité et d'unité. C'est un cadre d'expression sain qui permet de fortifier les liens et de s'entraider face aux réalités de la société moderne.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-yellow-300">
              <h4 className="text-sm font-bold text-gray-800 uppercase mb-2">Une Jeunesse Consacrée pour l'Impact</h4>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                Le Département des Jeunes est une véritable pépinière de talents au service de Dieu. Par leur ferveur lors des évangélisations, leur mobilisation exemplaire dans la logistique des grands événements et leur créativité technologique ou artistique, les jeunes guidés par le Frère Kouadio Nicolas apportent une énergie indispensable à la concrétisation de la vision nationale et internationale de l'Église.
              </p>
            </div>
          </div>

          <div className="relative min-h-[300px] lg:h-auto lg:col-span-5 bg-gray-200">
            <Image
              src="/480327801_609286368510399_7707469783646279788_n.jpg"
              alt="Département des Jeunes"
              fill
              className="object-cover"
              sizes="(max-w-1024px) 100vw, 40vw"
            />
          </div>

        </div>
      </section>

      {/* 6. SECTION FOCUS 4 : DÉPARTEMENT DES ENFANTS (FOND BLANC STANDARD AVEC SES CONTENUS COMPLET) */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          <div className="relative min-h-[300px] lg:h-auto lg:col-span-5 bg-gray-200 lg:order-1">
            <Image
              src="/480264081_609283191844050_6978003992762619725_n.jpg"
              alt="Département des Enfants"
              fill
              className="object-contain p-8"
              sizes="(max-w-1024px) 100vw, 40vw"
            />
          </div>

          <div className="p-8 md:p-12 lg:col-span-7 flex flex-col justify-center lg:order-2">
            <span className="text-xs font-bold uppercase tracking-widest text-green-600 mb-2 block">Direction : Monitrice Kaboré Chantal</span>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Le Département des Enfants : Bâtir les Fondations de la Foi dès l'Enfance
            </h3>
            
            <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-6">
              Au sein de l'Église de Réveil du Plein Évangile, le Département des Enfants représente la pépinière spirituelle de notre communauté, le lieu où sont semées les graines de la Parole de Dieu dans les cœurs des plus jeunes. Dirigé par la <strong>Monitrice Kaboré Chantal</strong>, ce département (l'École du Dimanche) se donne pour mission d'instruire, de guider et d'accompagner les enfants de toutes tranches d'âge dans la découverte de l'amour de Dieu et des enseignements de Jésus-Christ.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-8 border-l-4 border-green-500 pl-4 italic bg-green-50/50 py-2 rounded-r">
              Selon la recommandation biblique d'instruire l'enfant selon la voie qu'il doit, l'équipe des moniteurs et surveillantes travaille chaque semaine à offrir un encadrement adapté, sécurisant et propice à l'épanouissement spirituel des plus petits.
            </p>

            <h4 className="text-lg font-bold text-gray-800 mb-4 uppercase tracking-wider">Nos Axes Majeurs d'Action</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="text-green-600 font-bold text-xl">•</div>
                <div>
                  <h5 className="font-semibold text-gray-900 text-sm md:text-base">L'Enseignement Biblique Adapté</h5>
                  <p className="text-gray-600 text-sm mt-1">À travers des leçons structurées, des récits bibliques captivants et des mémorisations de versets, le département transmet les vérités du Plein Évangile de manière pédagogique et accessible à chaque groupe d'âge.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-green-600 font-bold text-xl">•</div>
                <div>
                  <h5 className="font-semibold text-gray-900 text-sm md:text-base">L'Éveil Spirituel et Pratique</h5>
                  <p className="text-gray-600 text-sm mt-1">Les enfants apprennent très tôt les bases de la vie chrétienne : la prière personnelle et collective, la louange, l'amour du prochain et le respect des parents. Des moments de culte adaptés leur permettent d'expérimenter la présence de Dieu à leur niveau.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-green-600 font-bold text-xl">•</div>
                <div>
                  <h5 className="font-semibold text-gray-900 text-sm md:text-base">L'Épanouissement Créatif et Ludique</h5>
                  <p className="text-gray-600 text-sm mt-1">L'apprentissage passe aussi par le jeu, le chant, le mime et les activités manuelles. Le département veille à ce que l'église soit pour l'enfant un lieu de joie, de fraternité et de souvenirs heureux, renforçant son sentiment d'appartenance à la famille de Dieu.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <h4 className="text-sm font-bold text-gray-800 uppercase mb-2">Une Responsabilité Sacrée pour l'Avenir</h4>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                Le Département des Enfants est un maillon essentiel dans la vision de l'Église de Réveil du Plein Évangile. En soutenant activement les parents dans l'éducation chrétienne de leurs enfants, l'équipe dirigée par la Monitrice Kaboré Chantal prépares avec rigueur, amour et dévouement la génération future de disciples, de serviteurs et de citoyens intègres pour la gloire de Dieu.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-20 px-6 md:px-20 bg-black text-white"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

          <div>
            <h3 className="text-3xl font-bold mb-6">
              ERPEVAI
            </h3>

            <p className="text-gray-400 leading-8">
              Église de Réveil du Plein Évangile
              Vision Apostolique Internationale.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">
              Navigation
            </h3>

            <ul className="space-y-3 text-gray-400">
          <li>
            <Link href="/" className="hover:text-white transition-colors">
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/nos-eglises" className="hover:text-white transition-colors">
              Nos églises
            </Link>
          </li>
          <li>
            <Link href="/medias" className="hover:text-white transition-colors">
              Espace médias
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </li>
        </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">
              Contact
            </h3>

            <p className="text-gray-400">
              Bouaké - Côte d’Ivoire
            </p>

            <p className="text-gray-400 mt-3">
              WhatsApp : 0709172800
            </p>
            <p className="text-gray-400 mt-3">
              Service Communication : 05946345
            </p>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500">
          © 2026 ERPEVAI - Tous droits réservés
        </div>
      </section>
    </main>
  );
}