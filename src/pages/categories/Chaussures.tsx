
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/config/products";

const Chaussures = () => {
  const [sortBy, setSortBy] = useState("recommended");
  const chaussuresProducts = products.filter(p => p.category === 'chaussures');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="container mx-auto py-3 px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-primary">Accueil</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900 font-medium">Chaussures de Sécurité</span>
          </div>
        </div>
      </div>

      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img
          src="/lovable-uploads/98a68746-eff6-4ad1-b7d9-7fed922db14f.png"
          alt="Chaussures de Sécurité"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Chaussures de Sécurité Professionnelles</h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Des chaussures de sécurité confortables et conformes aux normes. Protection et confort pour vos pieds.
            </p>
            <Button asChild className="bg-white text-primary hover:bg-gray-100">
              <Link to="#products">Explorer la gamme</Link>
            </Button>
          </div>
        </div>
      </div>

      <section id="products" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {chaussuresProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="relative aspect-square">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-primary">{product.startingPrice} €</span>
                      <Button asChild>
                        <Link to="/devis">Demander un devis</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Chaussures;
