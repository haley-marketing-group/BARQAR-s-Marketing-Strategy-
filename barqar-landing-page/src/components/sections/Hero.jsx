import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import Button from '../common/Button';
import ContactForm from '../forms/ContactForm';

const Hero = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-barqar-blue via-barqar-blue to-barqar-black">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" 
            style={{
              backgroundImage: `linear-gradient(rgba(183, 212, 54, 0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(183, 212, 54, 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-barqar-green rounded-full opacity-20"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{ 
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}

        <Container className="relative z-10">
          <div className="text-center max-w-5xl mx-auto pt-12 md:pt-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 flex justify-center"
            >
              <img 
                src="/barqar-logo-white.png" 
                alt="BARQAR - Don't be part of the herd. BE HEARD." 
                className="h-20 md:h-24 w-auto"
              />
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-headline text-white mb-6 leading-tight"
            >
              Marketing Strategy That Helps Buyers Buy and Salespeople Close
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 mb-4 max-w-4xl mx-auto"
            >
              Today's buyers don't want to be sold. They want to self-educate, compare options, 
              and decide with confidence.
            </motion.p>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              We help you build the marketing system that makes that possible.
            </motion.p>

            {/* Credibility Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-barqar-blue/40 backdrop-blur-sm rounded-lg p-6 mb-8 max-w-3xl mx-auto border-2 border-barqar-green"
            >
              <p className="text-white text-lg leading-relaxed">
                Powered by <span className="text-barqar-green font-bold">AI-driven research</span> and 
                deep human marketing expertise, we create persona-based strategies that turn 
                information into influence — so your buyers reach <span className="text-barqar-green font-bold">80%</span> of 
                the decision before they ever talk to sales.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="mb-24 md:mb-32"
            >
              <Button 
                variant="primary" 
                size="xl"
                onClick={() => setShowForm(true)}
                className="shadow-2xl shadow-barqar-green/50 hover:shadow-barqar-green/70"
              >
                Get Your Strategic Marketing Blueprint!
              </Button>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-white text-sm flex flex-col items-center bg-barqar-blue/60 px-6 py-3 rounded-full backdrop-blur-sm"
              >
                <span className="mb-2 font-semibold">Scroll to explore</span>
                <svg className="w-6 h-6 text-barqar-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

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

export default Hero;

