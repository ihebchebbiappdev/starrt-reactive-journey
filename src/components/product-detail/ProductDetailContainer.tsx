import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Minus, Plus } from 'lucide-react';
import { toast } from 'sonner';
import { calculateFinalPrice, formatPrice } from '@/utils/priceCalculations';
import { useCart } from '@/hooks/use-cart';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
import { Product } from '@/types/product';

interface ProductDetailContainerProps {
  product: Product;
  onProductAdded?: (productName: string) => void;
}

const ProductDetailContainer = ({ product, onProductAdded }: ProductDetailContainerProps) => {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const { addItem } = useCart();
  const isMobile = useIsMobile();

  const hasDiscount = product.discount_product !== "" && 
                     !isNaN(parseFloat(product.discount_product)) && 
                     parseFloat(product.discount_product) > 0;

  const finalPrice = calculateFinalPrice(
    product.price,
    product.discount_product,
    product.itemgroup_product,
    false
  );

  const handleQuantityChange = (newQuantity: number) => {
    if (parseInt(product.quantity.toString()) < newQuantity) {
      toast.error("La quantité demandée n'est pas disponible");
      return;
    }
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Veuillez sélectionner une taille");
      return;
    }

    const itemToAdd = {
      ...product,
      size: selectedSize,
      quantity: quantity,
    };

    addItem(itemToAdd);
    toast.success("Article ajouté au panier");
    if (onProductAdded) {
      onProductAdded(product.name);
    }
  };

  const availableSizes = Object.entries(product.sizes)
    .filter(([_, value]) => value > 0)
    .map(([size]) => size.toUpperCase());

  return (
    <div className="flex flex-col gap-6">
      <div className="relative w-full aspect-square md:aspect-[4/3] overflow-hidden bg-gray-100 rounded-lg">
        {inView && (
          <img
            ref={ref}
            src={product.image}
            alt={product.name}
            className={cn(
              "w-full h-full object-contain transition-opacity duration-300",
              isImageLoaded ? "opacity-100" : "opacity-0"
            )}
            onLoad={() => setIsImageLoaded(true)}
          />
        )}
        {(!isImageLoaded || !inView) && (
          <div className="absolute inset-0 bg-gray-100 animate-pulse" />
        )}
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-gray-900">
            {product.name}
          </h1>
          <div className="flex items-center gap-4">
            {hasDiscount ? (
              <>
                <span className="text-2xl font-bold text-[#700100]">
                  {formatPrice(finalPrice)} TND
                </span>
                <span className="text-lg text-gray-500 line-through">
                  {formatPrice(product.price)} TND
                </span>
              </>
            ) : (
              <span className="text-2xl font-bold text-gray-900">
                {formatPrice(finalPrice)} TND
              </span>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-900">
              Taille
            </label>
            <div className="grid grid-cols-4 gap-2">
              {availableSizes.map((size) => (
                <Button
                  key={size}
                  type="button"
                  variant={selectedSize === size ? "default" : "outline"}
                  className={cn(
                    "text-sm font-medium",
                    selectedSize === size && "bg-[#700100] text-white hover:bg-[#500100]"
                  )}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-900">
              Quantité
            </label>
            <div className="flex items-center gap-2">
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => handleQuantityChange(Math.max(1, quantity - 1))}
                className="h-8 w-8"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="text-lg font-medium w-8 text-center">
                {quantity}
              </span>
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => handleQuantityChange(quantity + 1)}
                className="h-8 w-8"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Button
            onClick={handleAddToCart}
            className="w-full bg-[#700100] hover:bg-[#500100]"
          >
            Ajouter au panier
          </Button>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Description
          </h2>
          <p className="text-sm text-gray-600">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailContainer;
