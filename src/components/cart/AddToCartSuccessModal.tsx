import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { ShoppingCart, ArrowRight, ShoppingBag } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface AddToCartSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

const AddToCartSuccessModal = ({ isOpen, onClose, productName }: AddToCartSuccessModalProps) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/cart');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center flex flex-col items-center gap-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center"
            >
              <ShoppingBag className="w-8 h-8 text-green-600" />
            </motion.div>
            <span className="text-xl font-semibold text-gray-900">
              Article ajouté au panier !
            </span>
          </DialogTitle>
        </DialogHeader>
        <div className="p-6">
          <p className="text-center text-gray-600 mb-6">
            {productName} a été ajouté à votre panier
          </p>
          <div className="space-y-3">
            <Button
              onClick={handleCheckout}
              className="w-full bg-[#700100] hover:bg-[#590000] text-white flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-4 h-4" />
              Voir mon panier
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              onClick={onClose}
              variant="outline"
              className="w-full border-[#700100] text-[#700100] hover:bg-[#700100] hover:text-white"
            >
              Continuer mes achats
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddToCartSuccessModal;