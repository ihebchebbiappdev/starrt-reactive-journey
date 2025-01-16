import React from "react";
import { useLocation } from "react-router-dom";

const BeltsSection = () => {
  const location = useLocation();
  const pathSegments = location.pathname
    .split('/')
    .filter(segment => segment !== '' && segment !== 'category');

  const [type, category, itemgroup] = pathSegments;

  const getContent = () => {
    if (itemgroup === 'portefeuilles') {
      return {
        title: "Portefeuilles",
        subtitle: "ÉLÉGANCE ET FONCTIONNALITÉ",
        description: (
          <div className="space-y-4">
            <p>
              Le portefeuille en cuir est une pièce emblématique et essentielle dans une collection d'accessoires dont chaque homme a besoin dans son quotidien. Il allie fonctionnalité, durabilité et esthétique raffinée.
            </p>
            <p>
              Accompagnée avec son coffret cadeau, cette pièce peut être offerte en ajoutant l'option de personnalisation des initiales en dorure à chaud ou nom et prénom ou un petit mot en gravure laser.
            </p>
            <p>Découvrir plus....</p>
            
            <div className="mt-6">
              <h3 className="text-lg font-bold mb-3">Design et Style</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Silhouette épurée :</strong> Compact, fin et ergonomique, idéal pour s'insérer facilement dans une poche de veste ou de pantalon.</li>
                <li><strong>Élégance intemporelle :</strong> Des lignes minimalistes avec des finitions soignées qui reflètent la sophistication.</li>
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-bold mb-3">Matériaux et Fabrication</h3>
              <p><strong>Cuir haut de gamme :</strong> Fabriqué à partir de cuir pleine fleur, réputé pour sa souplesse, sa résistance et son vieillissement naturel élégant.</p>
              
              <h4 className="font-bold mt-4 mb-2">Variations de cuir :</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Cuir lisse pour une allure classique.</li>
                <li>Cuir grainé pour une texture subtile et robuste.</li>
                <li>Cuir exotique (alligator, autruche, python) pour un luxe extrême et exclusif.</li>
              </ul>
              
              <p className="mt-4"><strong>Finitions artisanales :</strong> Bords peints à la main, coutures invisibles ou légèrement contrastées pour un détail subtil.</p>
            </div>
          </div>
        ),
        imageUrl: "/Articles/Main.png"
      };
    } else if (itemgroup === 'ceintures') {
      return {
        title: "Ceintures",
        subtitle: "RAFFINEMENT ET ÉLÉGANCE",
        description: (
          <div className="space-y-4">
            <p>
              La ceinture en cuir est un accessoire essentiel dans une collection de prêt-à-porter pour homme de luxe.
              Cette ceinture est destinée à l'homme élégant, soucieux de détails et de qualité. Que ce soit pour compléter un costume ou pour rehausser une tenue décontractée, elle s'adapte à toutes les situations avec sophistication.
            </p>
            <p>
              Cette pièce est accompagnée d'une housse personnalisée avec le nom de la marque et un coffret qui met en valeur la ceinture qui peut être offerte en lui rajoutant une personnalisation des initiales à l'extérieur ou une gravure à l'intérieur.
            </p>

            <div className="mt-6">
              <h3 className="text-lg font-bold mb-3">Matériaux et Finitions</h3>
              <h4 className="font-bold mt-4 mb-2">Cuir Premium :</h4>
              <p>Fabriquée à partir de cuir pleine fleur, sélectionné pour sa souplesse et sa durabilité. Plusieurs options sont disponibles :</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Cuir lisse : Pour une apparence classique et élégante.</li>
                <li>Cuir grainé : Ajoutant une touche texturée et robuste.</li>
                <li>Cuir strié : Pour un look exclusif et haut de gamme.</li>
              </ul>

              <h4 className="font-bold mt-4 mb-2">Boucles :</h4>
              <p>Réalisées en métal poli (acier inoxydable, laiton, ou finition dorée/argentée). Certaines boucles présentent :</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Une forme classique rectangulaire.</li>
                <li>Une forme ronde</li>
                <li>Une forme carré</li>
              </ul>

              <h4 className="font-bold mt-4 mb-2">Finitions artisanales :</h4>
              <p>Chaque ceinture est teinte à la main avec des bords soigneusement scellés et polis pour un rendu impeccable.</p>

              <h4 className="font-bold mt-4 mb-2">Largeurs disponibles :</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Fine (2-3 cm) : Idéale pour les costumes et les tenues habillées.</li>
                <li>Standard (3.5-4 cm) : Parfait pour un look casual ou semi-formel.</li>
              </ul>

              <h4 className="font-bold mt-4 mb-2">Palette de Couleurs</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Classiques intemporels :</strong> Noir, marron foncé, cognac.</li>
                <li><strong>Tons modernes :</strong> Bleu marine, gris, vert bouteille.</li>
                <li><strong>Éditions spéciales :</strong> Modèles bicolores ou à motifs discrets pour une touche audacieuse.</li>
              </ul>

              <h4 className="font-bold mt-4 mb-2">Détails Distinctifs</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Gravures personnalisées :</strong> Logo discret ou initiales gravées sur la boucle ou la languette.</li>
                <li><strong>Doublure contrastée :</strong> Une doublure intérieure en cuir de couleur différente (Nubik)</li>
                <li><strong>Accessoires assortis :</strong> Certaines ceintures sont proposées avec une pochette de rangement en cuir.</li>
              </ul>
            </div>
          </div>
        ),
        imageUrl: "/Articles/Main.png"
      };
    }
    return {
      title: "Collection Accessoires",
      subtitle: "ARTISANAT",
      description: "Découvrez nos créations exclusives, façonnées avec passion et savoir-faire en Tunisie.",
      imageUrl: "/Articles/Main.png"
    };
  };

  const content = getContent();

  return (
    <section className="flex flex-col md:flex-row items-start justify-center px-4 md:px-6 py-6 bg-[#EFEDED]">
      <div className="w-full md:w-2/3 text-left md:pr-8">
        <h1 className="text-[24px] md:text-[36px] font-light text-[#4C3A36] mb-2">
          {content.title}
        </h1>
        <h3 className="text-[12px] md:text-[16px] font-normal text-[#4C3A36] tracking-widest uppercase mb-4">
          {content.subtitle}
        </h3>
        <div className="text-[14px] md:text-[16px] text-[#4C3A36] leading-relaxed">
          {content.description}
        </div>
      </div>
      <div className="w-full md:w-1/3 mt-6 md:mt-0">
        <img
          src={content.imageUrl}
          alt={content.title}
          className="rounded-md object-cover w-full h-auto max-h-[260px]"
        />
      </div>
    </section>
  );
};

export default BeltsSection;