import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Index from './pages/Index';
import Cart from './pages/Cart';
import Devis from './pages/Devis';
import Metiers from './pages/Metiers';
import Marques from './pages/Marques';
import Personalization from './pages/Personalization';
import LoadingScreen from './components/LoadingScreen';

function AppContent() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <LoadingScreen key={location.pathname} />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/devis" element={<Devis />} />
        <Route path="/metiers" element={<Metiers />} />
        <Route path="/marques" element={<Marques />} />
        <Route path="/personalization" element={<Personalization />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;