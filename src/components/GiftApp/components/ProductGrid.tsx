import React from 'react';
import { motion, PanInfo } from 'framer-motion';
import { Product } from '@/types/product';
import { formatPrice } from '@/utils/priceCalculations';

interface ProductGridProps {
  products: Product[];
  onProductSelect: (product: Product) => void;
}

const ProductGrid = ({ products, onProductSelect }: ProductGridProps) => {
  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    // Handle drag end logic here
    console.log('Drag ended', info);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <motion.div
          key={product.id}
          className="cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onProductSelect(product)}
          onDragEnd={handleDragEnd}
        >
          <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="mt-2">
            <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
            <p className="text-sm text-gray-500">{formatPrice(product.price)} TND</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProductGrid;