
import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '@/config/products';
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const Mugs = () => {
  const mugProducts = products.filter(
    product => product.type === 'accessoires' && product.name.toLowerCase().includes('mug')
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-8">
        <Link to="/produits-marketing" className="hover:text-primary">
          <Button variant="ghost" size="sm" className="gap-2">
            <ChevronLeft className="h-4 w-4" />
            Retour aux produits marketing
          </Button>
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-6">Mugs Personnalisés</h1>
      <p className="text-gray-600 mb-8">
        Découvrez notre collection de mugs personnalisables pour votre entreprise.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mugProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="aspect-square">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-primary">
                  À partir de {product.startingPrice}€
                </span>
                <Link to={`/personalization?product=${product.id}`}>
                  <Button>Personnaliser</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mugs;
