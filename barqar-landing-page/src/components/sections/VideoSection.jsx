import React from 'react';
import Section from '../common/Section';
import Container from '../common/Container';
import FadeIn from '../animations/FadeIn';

const VideoSection = () => {
  return (
    <Section background="light" padding="large" id="video">
      <Container>
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-headline text-barqar-blue mb-4">
              See How We Help Companies Grow
            </h2>
            <p className="text-xl md:text-2xl text-barqar-grey max-w-3xl mx-auto">
              Watch how we transform marketing strategies to help buyers buy and sales teams close more deals
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="max-w-5xl mx-auto">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/6qL8w-w6-6M"
                title="BARQAR Marketing Strategy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
};

export default VideoSection;

