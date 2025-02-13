
export interface ProductConfig {
  id: string;
  name: string;
  description: string;
  startingPrice: string;
  image?: string;
  presentationImage?: string;
  category: string;
  type: string;
  isPersonalizable: boolean;
}

export const products: ProductConfig[] = [
  // Vêtements Cuisine
  {
    id: "veste-cuisine-1",
    name: "Veste de Chef Premium",
    description: "Veste professionnelle pour chef, confortable et élégante",
    startingPrice: "89.99",
    image: "/ProductImages/BlackButtonsTshirt.png",
    category: "vetements-cuisine",
    type: "vestes",
    isPersonalizable: true
  },
  {
    id: "tablier-cuisine-1",
    name: "Tablier Professionnel Cuisine",
    description: "Tablier robuste pour un usage intensif en cuisine",
    startingPrice: "45.99",
    image: "/ProductImages/BlackTablier.png",
    category: "vetements-cuisine",
    type: "tabliers",
    isPersonalizable: true
  },

  // Vêtements Boucher
  {
    id: "veste-boucher-1",
    name: "Veste de Boucher Classic",
    description: "Veste traditionnelle de boucher, qualité supérieure",
    startingPrice: "79.99",
    image: "/ProductImages/RedLongSleavesShirt.png",
    category: "vetements-boucher",
    type: "vestes",
    isPersonalizable: true
  },
  {
    id: "tablier-boucher-1",
    name: "Tablier de Boucher Pro",
    description: "Tablier résistant aux taches et coupures",
    startingPrice: "55.99",
    image: "/ProductImages/BlackTablier.png",
    category: "vetements-boucher",
    type: "tabliers",
    isPersonalizable: true
  },

  // Vêtements Médicaux
  {
    id: "blouse-medicale-1",
    name: "Blouse Médicale Premium",
    description: "Blouse médicale confortable et professionnelle",
    startingPrice: "69.99",
    image: "/ProductImages/BlackButtonsTshirt.png",
    category: "vetements-medicaux",
    type: "blouses",
    isPersonalizable: true
  },

  // Produits Marketing
  {
    id: "mug-1",
    name: "Mug Personnalisé Premium",
    description: "Mug élégant pour votre café quotidien",
    startingPrice: "15.99",
    image: "/ProductImages/BlackMug.png",
    category: "produits-marketing",
    type: "accessoires",
    isPersonalizable: true
  },
  {
    id: "notebook-1",
    name: "Carnet Professionnel",
    description: "Carnet élégant pour vos notes quotidiennes",
    startingPrice: "19.99",
    image: "/ProductImages/WhiteNotebook.png",
    category: "produits-marketing",
    type: "accessoires",
    isPersonalizable: true
  },
  {
    id: "flag-1",
    name: "Drapeau Publicitaire",
    description: "Drapeau publicitaire haute visibilité",
    startingPrice: "45.99",
    image: "/ProductImages/RedMarketingFlag.png",
    category: "produits-marketing",
    type: "accessoires",
    isPersonalizable: true
  },
  {
    id: "bag-1",
    name: "Sac Shopping Premium",
    description: "Sac réutilisable personnalisable",
    startingPrice: "12.99",
    image: "/ProductImages/YellowSac.png",
    category: "produits-marketing",
    type: "accessoires",
    isPersonalizable: true
  },

  // Vêtements Hôtellerie
  {
    id: "veste-hotel-1",
    name: "Veste Service Hôtelier",
    description: "Veste élégante pour le service hôtelier",
    startingPrice: "89.99",
    image: "/ProductImages/BlackButtonsTshirt.png",
    category: "vetements-hotellerie",
    type: "vestes",
    isPersonalizable: true
  }
];
