import React from 'react';
import Container from '../common/Container';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = {
    company: [
      { name: 'Home', href: 'https://www.barqar.com/' },
      { name: 'About Us', href: 'https://www.barqar.com/marketing-services-buffalo/' },
      { name: 'Services', href: 'https://www.barqar.com/marketing-agencies/' },
      { name: 'Work', href: 'https://www.barqar.com/best-marketing-buffalo/' },
      { name: 'Free Resources', href: 'https://www.barqar.com/free-marketing-resources/' },
      { name: 'Blog', href: 'https://www.barqar.com/blog/' },
      { name: 'Contact Us', href: 'https://www.barqar.com/buffalo-marketing/' },
    ],
    legal: [
      { name: 'Privacy Policy', href: 'https://www.barqar.com/privacy-policy/' },
    ],
    social: [
      {
        name: 'Facebook',
        href: 'https://www.facebook.com/BARQARmarketing',
        icon: (
          <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        ),
      },
      {
        name: 'Twitter',
        href: 'https://twitter.com/barqarmarketing',
        icon: (
          <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        ),
      },
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/company/barqar',
        icon: (
          <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        ),
      },
      {
        name: 'YouTube',
        href: 'https://www.youtube.com/channel/UCk0dCbBskRBCD8RV8ubIjgA',
        icon: (
          <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        ),
      },
    ],
  };

  return (
    <footer className="bg-barqar-blue text-white">
      <Container className="py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Branding */}
          <div className="md:col-span-2">
            <img 
              src="/barqar-logo-white.png" 
              alt="BARQAR - Don't be part of the herd. BE HEARD." 
              className="h-12 md:h-14 w-auto mb-4"
            />
            <p className="text-gray-300 text-sm mb-4">
              A Haley Marketing Brand
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <p>📧 info@barqar.com</p>
              <p>📞 716-204-3514</p>
              <p>📞 Toll Free: 1-888-576-6100</p>
              <p>📍 6028 Sheridan Dr, P.O. Box 410</p>
              <p className="pl-6">Williamsville, NY 14221</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-headline text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-barqar-green transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-headline text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-barqar-green transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-barqar-green transition-colors duration-200"
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
            <p className="text-gray-300 text-sm">
              © {currentYear} BARQAR. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

