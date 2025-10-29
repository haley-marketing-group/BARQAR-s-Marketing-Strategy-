/**
 * Analytics Utility Functions
 * For tracking user interactions and conversion events
 */

// Track CTA button clicks
export const trackCTAClick = (ctaLocation) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'cta_click', {
      event_category: 'engagement',
      event_label: ctaLocation,
      value: 1,
    });
  }
  console.log(`CTA Click tracked: ${ctaLocation}`);
};

// Track form submissions
export const trackFormSubmit = (formType = 'contact') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_submit', {
      event_category: 'conversion',
      event_label: formType,
      value: 1,
    });
  }
  console.log(`Form submission tracked: ${formType}`);
};

// Track form starts
export const trackFormStart = (formType = 'contact') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_start', {
      event_category: 'engagement',
      event_label: formType,
      value: 1,
    });
  }
  console.log(`Form start tracked: ${formType}`);
};

// Track scroll depth
export const trackScrollDepth = (percentage) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'scroll_depth', {
      event_category: 'engagement',
      event_label: `${percentage}%`,
      value: percentage,
    });
  }
  console.log(`Scroll depth tracked: ${percentage}%`);
};

// Track page section views
export const trackSectionView = (sectionName) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'section_view', {
      event_category: 'engagement',
      event_label: sectionName,
      value: 1,
    });
  }
  console.log(`Section view tracked: ${sectionName}`);
};

// Track promotional banner interactions
export const trackPromoInteraction = (action) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'promo_interaction', {
      event_category: 'engagement',
      event_label: action,
      value: 1,
    });
  }
  console.log(`Promo interaction tracked: ${action}`);
};

// Initialize Google Analytics 4
export const initGA4 = (measurementId) => {
  if (typeof window !== 'undefined' && measurementId) {
    // Load GA4 script
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', measurementId);

    console.log('Google Analytics 4 initialized');
  }
};

// Initialize Google Tag Manager
export const initGTM = (containerId) => {
  if (typeof window !== 'undefined' && containerId) {
    // GTM script
    (function(w,d,s,l,i){
      w[l]=w[l]||[];
      w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
      var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
      j.async=true;
      j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
      f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer',containerId);

    console.log('Google Tag Manager initialized');
  }
};

// Track custom events
export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
  console.log(`Custom event tracked: ${eventName}`, eventParams);
};

