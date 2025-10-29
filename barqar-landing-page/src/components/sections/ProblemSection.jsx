import React from 'react';
import Section from '../common/Section';
import Container from '../common/Container';
import FadeIn from '../animations/FadeIn';

const ProblemSection = () => {
  const problems = [
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: 'Buyers Are Researching',
      description: 'Your buyers are searching, comparing, and deciding long before they reach out.'
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Sales Can\'t Connect',
      description: 'No one wants to talk to your salespeople — not yet. They\'re still in research mode.'
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      title: 'Marketing Disconnect',
      description: 'If your marketing isn\'t part of that journey, you\'re invisible to potential buyers.'
    }
  ];

  return (
    <Section background="dark" padding="large" id="problem">
      <Container>
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-headline mb-6">The Problem...</h2>
            <p className="text-3xl text-barqar-green font-headline mb-8">
              Why is selling so hard right now?
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {problems.map((problem, index) => (
            <FadeIn key={index} delay={index * 0.2} direction="up">
              <div className="text-center p-6">
                <div className="text-barqar-green mb-4 flex justify-center">
                  {problem.icon}
                </div>
                <h3 className="text-2xl font-headline mb-3">{problem.title}</h3>
                <p className="text-gray-300 text-lg">{problem.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.6}>
          <div className="max-w-4xl mx-auto text-center space-y-6 text-lg text-gray-200">
            <p className="text-xl">
              <span className="text-barqar-green font-bold">Because no one wants to talk to your salespeople — not yet.</span>
            </p>
            
            <p>
              Most companies respond with more cold calls, more ads, and more noise.
            </p>
            
            <p className="text-2xl font-headline text-white pt-6">
              But the real solution isn't more selling — it's smarter marketing that helps buyers make decisions.
            </p>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
};

export default ProblemSection;

