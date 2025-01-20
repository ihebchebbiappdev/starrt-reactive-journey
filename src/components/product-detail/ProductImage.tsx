import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, ZoomOut } from 'lucide-react';

interface ProductImageProps {
  image: string;
  name: string;
}

const ProductImage = ({ image, name }: ProductImageProps) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [quality, setQuality] = useState<'low' | 'high'>('low');

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
    // Load high quality when zooming
    if (!isZoomed) setQuality('high');
  };

  // Generate optimized image URL
  const getOptimizedImageUrl = (url: string, quality: 'low' | 'high') => {
    // If it's already a data URL or doesn't have a valid extension, return as is
    if (url.startsWith('data:') || !url.match(/\.(jpg|jpeg|png|webp|gif)$/i)) {
      return url;
    }

    // Add quality parameters
    const separator = url.includes('?') ? '&' : '?';
    const qualityParam = quality === 'low' ? 'q=60&w=400' : 'q=100&w=800';
    return `${url}${separator}${qualityParam}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="relative"
    >
      <AnimatePresence>
        {isZoomed ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={toggleZoom}
          >
            <motion.img
              src={getOptimizedImageUrl(image, 'high')}
              alt={name}
              className="max-w-full max-h-full object-contain"
              layoutId="product-image"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onLoad={() => setQuality('high')}
            />
            <button
              className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              onClick={toggleZoom}
            >
              <ZoomOut className="w-6 h-6 text-white" />
            </button>
          </motion.div>
        ) : (
          <div className="group relative">
            <motion.div
              className="aspect-square bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              layoutId="product-image"
              onClick={toggleZoom}
            >
              <img
                src={getOptimizedImageUrl(image, quality)}
                alt={name}
                className="w-full h-full object-contain mix-blend-normal p-4 transition-transform duration-300 group-hover:scale-105"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                onLoad={() => {
                  // Preload high quality version after low quality is loaded
                  const highQualityImg = new Image();
                  highQualityImg.src = getOptimizedImageUrl(image, 'high');
                }}
              />
            </motion.div>
            <button
              className="absolute bottom-4 right-4 p-2 bg-black/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={toggleZoom}
            >
              <ZoomIn className="w-5 h-5 text-gray-700" />
            </button>
            <div className="mt-2 text-center text-sm text-gray-500">
              Cliquez pour zoomer
            </div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProductImage;