import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../common/Button';

const PromoFlyIn = ({ onOpenForm, delay = 5000 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user has already dismissed the promo
    const dismissed = sessionStorage.getItem('promoDismissed');
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    // Show promo after delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem('promoDismissed', 'true');
  };

  const handleCTA = () => {
    handleDismiss();
    onOpenForm?.();
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          className="fixed bottom-8 right-8 z-40 max-w-md"
        >
          <div className="bg-white rounded-lg shadow-2xl border-2 border-barqar-green p-6 relative">
            {/* Dismiss Button */}
            <button
              onClick={handleDismiss}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-xl font-bold w-8 h-8 flex items-center justify-center"
              aria-label="Dismiss"
            >
              ×
            </button>

            {/* Content */}
            <div className="pr-6">
              <h3 className="text-2xl font-headline text-barqar-blue mb-2">
                Smarter Strategy, Serious Savings
              </h3>
              <p className="text-barqar-grey mb-3">
                Our full Strategic Marketing Blueprint — <span className="line-through">Normally $7,500</span>, 
                now only <span className="text-barqar-green font-bold text-xl">$2,500</span>.
              </p>
              <p className="text-sm text-barqar-grey mb-4">
                And your $2,500 investment rolls right into implementation.
              </p>
              
              {/* Pulsing CTA Button */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Button 
                  variant="primary" 
                  size="md"
                  onClick={handleCTA}
                  className="w-full"
                >
                  Get My Blueprint
                </Button>
              </motion.div>
            </div>

            {/* Accent Indicator */}
            <div className="absolute top-0 left-0 w-2 h-full bg-barqar-green rounded-l-lg" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PromoFlyIn;

