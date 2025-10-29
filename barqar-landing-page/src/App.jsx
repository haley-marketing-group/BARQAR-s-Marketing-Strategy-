import React, { useState } from 'react';
import Hero from './components/sections/Hero';
import PromoFlyIn from './components/sections/PromoFlyIn';
import ProblemSection from './components/sections/ProblemSection';
import SolutionSection from './components/sections/SolutionSection';
import BlueprintSection from './components/sections/BlueprintSection';
import AuthoritySection from './components/sections/AuthoritySection';
import FinalCTA from './components/sections/FinalCTA';
import Footer from './components/sections/Footer';
import ContactForm from './components/forms/ContactForm';
import { motion } from 'framer-motion';

function App() {
  const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () => {
    setShowForm(true);
  };

  return (
    <div className="App">
      {/* Main Landing Page Sections */}
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <BlueprintSection />
      <AuthoritySection />
      <FinalCTA />
      <Footer />

      {/* Promotional Fly-In Banner */}
      <PromoFlyIn onOpenForm={handleOpenForm} delay={5000} />

      {/* Global Contact Form Modal (triggered by PromoFlyIn) */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-headline text-barqar-blue">
                Get Your Strategic Marketing Blueprint
              </h2>
              <button
                onClick={() => setShowForm(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
                aria-label="Close form"
              >
                ×
              </button>
            </div>
            <div className="p-6">
              <ContactForm onClose={() => setShowForm(false)} />
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default App;
