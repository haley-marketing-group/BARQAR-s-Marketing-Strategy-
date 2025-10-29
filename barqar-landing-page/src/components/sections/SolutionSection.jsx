import React from 'react';
import Section from '../common/Section';
import Container from '../common/Container';
import FadeIn from '../animations/FadeIn';
import NumberCounter from '../animations/NumberCounter';

const SolutionSection = () => {
  return (
    <Section background="light" padding="large" id="solution">
      <Container>
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-headline text-barqar-blue mb-6">
              The Shift: Buyer Enablement
            </h2>
            <p className="text-3xl font-headline text-barqar-green mb-8">
              Stop Pushing. Start Empowering.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 mb-16 max-w-5xl mx-auto">
          {/* Old Way */}
          <FadeIn delay={0.2} direction="left">
            <div className="text-center p-8 bg-gray-100 rounded-lg opacity-60">
              <h3 className="text-2xl font-headline text-gray-500 mb-4 line-through">
                OLD WAY
              </h3>
              <ul className="space-y-3 text-left text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  Aggressive cold calling
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  Generic sales pitches
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  Interruption marketing
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  Pushy sales tactics
                </li>
              </ul>
            </div>
          </FadeIn>

          {/* New Way */}
          <FadeIn delay={0.4} direction="right">
            <div className="text-center p-8 bg-barqar-green bg-opacity-10 border-2 border-barqar-green rounded-lg">
              <h3 className="text-2xl font-headline text-barqar-blue mb-4">
                NEW WAY: Buyer Enablement
              </h3>
              <ul className="space-y-3 text-left text-barqar-black">
                <li className="flex items-start">
                  <span className="text-barqar-green mr-2">✓</span>
                  Educational content
                </li>
                <li className="flex items-start">
                  <span className="text-barqar-green mr-2">✓</span>
                  Trust-building resources
                </li>
                <li className="flex items-start">
                  <span className="text-barqar-green mr-2">✓</span>
                  Self-service information
                </li>
                <li className="flex items-start">
                  <span className="text-barqar-green mr-2">✓</span>
                  Empowering decision-making
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.6}>
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="text-8xl font-headline text-barqar-green mb-4">
                <NumberCounter to={80} suffix="%" duration={2.5} />
              </div>
              <p className="text-2xl text-barqar-grey">
                of the buying decision happens before buyers talk to sales
              </p>
            </div>

            <div className="space-y-6 text-lg text-barqar-grey">
              <p>
                The best companies aren't <span className="font-bold">"selling harder."</span> They're 
                helping customers <span className="font-bold text-barqar-blue">buy smarter.</span>
              </p>
              
              <p>
                That's <span className="text-barqar-green font-bold">buyer enablement</span> — marketing 
                that educates, builds trust, and answers the questions buyers ask while they're still deciding.
              </p>
              
              <p className="text-2xl font-headline text-barqar-blue pt-6">
                When you enable buyers to get 80% of the way to "yes" on their own, your sales team 
                can focus on what they do best: closing deals.
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
};

export default SolutionSection;

