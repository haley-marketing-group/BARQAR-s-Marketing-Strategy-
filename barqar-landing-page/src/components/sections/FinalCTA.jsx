import React, { useState } from 'react';
import Section from '../common/Section';
import Container from '../common/Container';
import Button from '../common/Button';
import FadeIn from '../animations/FadeIn';
import ContactForm from '../forms/ContactForm';
import { motion } from 'framer-motion';

const FinalCTA = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Section background="gradient" padding="large" id="get-started">
        <Container>
          <FadeIn>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-headline mb-8">
                Ready to Turn Marketing Into Your Sales Multiplier?
              </h2>
              
              <div className="bg-barqar-blue/60 backdrop-blur-sm rounded-lg p-8 mb-8 border-2 border-barqar-green">
                <div className="mb-4">
                  <div className="text-5xl font-headline text-barqar-green mb-2">
                    $2,500 Blueprint
                  </div>
                  <p className="text-2xl text-white font-semibold">
                    100% Credited Toward Implementation
                  </p>
                </div>
                <p className="text-white text-base italic font-medium">
                  Limited spots available for Q4 2025
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="primary" 
                  size="xl"
                  onClick={() => setShowForm(true)}
                  className="shadow-2xl shadow-barqar-green/50"
                >
                  Get Started Now
                </Button>
              </motion.div>

              <p className="text-white text-sm mt-6 opacity-75">
                No commitment required. Let's discuss your marketing goals.
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Contact Form Modal */}
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
    </>
  );
};

export default FinalCTA;

