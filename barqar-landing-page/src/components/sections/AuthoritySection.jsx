import React, { useState } from 'react';
import Section from '../common/Section';
import Container from '../common/Container';
import Button from '../common/Button';
import FadeIn from '../animations/FadeIn';
import ContactForm from '../forms/ContactForm';
import { motion } from 'framer-motion';

const AuthoritySection = () => {
  const [showForm, setShowForm] = useState(false);

  const stats = [
    { number: '15+', label: 'Years of Marketing Expertise' },
    { number: '500+', label: 'Successful Campaigns' },
    { number: '95%', label: 'Client Satisfaction' },
  ];

  return (
    <>
      <Section background="light" padding="large" id="authority">
        <Container>
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <blockquote className="text-4xl md:text-5xl font-headline text-barqar-blue mb-8 italic">
                "Sales has changed more in the past two years than in the previous hundred."
              </blockquote>
              
              <div className="space-y-6 text-xl text-barqar-grey">
                <p>
                  Your sales process can't keep up unless your marketing helps buyers make 
                  confident decisions on their own.
                </p>
                
                <p className="font-bold text-barqar-blue">
                  That's what we do.
                </p>
                
                <p>
                  We build marketing that helps buyers buy — and helps your salespeople close.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Stats Section */}
          <FadeIn delay={0.3}>
            <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                  <div className="text-5xl font-headline text-barqar-green mb-2">
                    {stat.number}
                  </div>
                  <div className="text-barqar-black font-body font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Haley Marketing Brand Badge */}
          <FadeIn delay={0.5}>
            <div className="text-center">
              <div className="inline-block bg-barqar-blue text-white px-8 py-4 rounded-lg mb-8">
                <p className="text-sm uppercase tracking-wider mb-1">Powered By</p>
                <p className="text-2xl font-headline">Haley Marketing</p>
              </div>
              
              <div className="mb-8">
                <Button 
                  variant="primary" 
                  size="lg"
                  onClick={() => setShowForm(true)}
                >
                  Let's Build Your Blueprint
                </Button>
              </div>
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

export default AuthoritySection;

