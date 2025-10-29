import React, { useState } from 'react';
import Section from '../common/Section';
import Container from '../common/Container';
import Card from '../common/Card';
import Button from '../common/Button';
import FadeIn from '../animations/FadeIn';
import ContactForm from '../forms/ContactForm';
import { motion } from 'framer-motion';

const BlueprintSection = () => {
  const [showForm, setShowForm] = useState(false);

  const deliverables = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Deep Audience & Persona Analysis',
      description: 'AI-powered research combined with human insight to understand your ideal customers, their motivations, and decision-making process.',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      title: 'Pain Point-Driven Messaging',
      description: 'Messaging frameworks that speak directly to buyer challenges, objections, and desired outcomes.',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Channel & Content Strategies',
      description: 'Tailored recommendations for where to show up, what to say, and how to align with buyer search behavior.',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: 'Implementation Roadmap',
      description: 'Clear KPIs, milestones, and step-by-step guidance to turn strategy into action.',
    },
  ];

  return (
    <>
      <Section background="grey" padding="large" id="blueprint">
        <Container>
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-headline text-barqar-blue mb-6">
                The Solution: The Strategic Marketing Blueprint
              </h2>
              <p className="text-3xl font-headline text-barqar-green mb-6">
                Your Roadmap to a Buyer-Led Growth Engine
              </p>
              <p className="text-xl text-barqar-grey max-w-4xl mx-auto">
                We combine <span className="text-barqar-green font-bold">AI + human insight</span> to 
                uncover what motivates your ideal customers, how they make decisions, and what stories inspire action.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {deliverables.map((item, index) => (
              <FadeIn key={index} delay={index * 0.1} direction="up">
                <Card hover className="h-full">
                  <div className="text-barqar-blue mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-headline text-barqar-blue mb-3">
                    {item.title}
                  </h3>
                  <p className="text-barqar-grey">{item.description}</p>
                </Card>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.6}>
            <div className="text-center">
              <p className="text-2xl text-barqar-grey mb-8 max-w-3xl mx-auto">
                It's not a template. It's your <span className="text-barqar-blue font-bold">step-by-step guide</span> to 
                turn marketing into a sales multiplier.
              </p>

              {/* Pricing Box */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="bg-gradient-to-br from-barqar-blue to-barqar-black text-white rounded-xl p-8 shadow-2xl">
                  <div className="mb-4">
                    <p className="text-gray-300 line-through text-xl">Normally $7,500</p>
                    <div className="text-6xl font-headline text-barqar-green mb-2">$2,500</div>
                    <p className="text-xl text-gray-200">
                      100% credited toward implementation
                    </p>
                  </div>
                  <div className="border-t border-gray-600 pt-4 mt-4">
                    <p className="text-sm text-gray-300">
                      Limited time offer. Your investment rolls directly into execution.
                    </p>
                  </div>
                </div>
              </div>

              <Button 
                variant="primary" 
                size="xl"
                onClick={() => setShowForm(true)}
                className="shadow-xl"
              >
                Order Your Strategic Blueprint
              </Button>
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

export default BlueprintSection;

