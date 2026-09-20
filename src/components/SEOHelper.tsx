import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PERSONAL_INFO } from '../data/portfolioData';

interface SEOHelperProps {
  title: string;
  description: string;
  image?: string;
  type?: string;
}

export const SEOHelper: React.FC<SEOHelperProps> = ({
  title,
  description,
  image = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop',
  type = 'website',
}) => {
  const location = useLocation();
  const currentUrl = `https://jasurbekazizov.com${location.pathname}`;

  useEffect(() => {
    // 1. Set document title
    document.title = `${title} | Jasurbek Azizov Portfolio`;

    // 2. Helper to set or create meta tag
    const setMetaTag = (nameAttr: string, attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${nameAttr}="${attrValue}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameAttr, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMetaTag('name', 'description', description);
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', currentUrl);
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:image', image);
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', image);

    // 3. Schema.org Person JSON-LD for Homepage
    if (location.pathname === '/' || location.pathname === '') {
      let script = document.querySelector('#schema-person-jsonld');
      if (!script) {
        script = document.createElement('script');
        script.id = 'schema-person-jsonld';
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      const schemaData = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: PERSONAL_INFO.name,
        jobTitle: PERSONAL_INFO.title,
        url: 'https://jasurbekazizov.com',
        email: PERSONAL_INFO.emailPrimary,
        telephone: PERSONAL_INFO.phonePrimary,
        alumniOf: [
          {
            '@type': 'CollegeOrUniversity',
            name: 'Webster University Geneva',
            sameAs: 'https://www.webster.ch',
          },
          {
            '@type': 'EducationalOrganization',
            name: 'Monday Training Center',
          },
        ],
        sameAs: [
          PERSONAL_INFO.linkedinUrl,
          PERSONAL_INFO.telegramUrl,
          PERSONAL_INFO.instagramUrl,
          PERSONAL_INFO.githubUrl,
        ],
        knowsLanguage: ['Uzbek', 'Russian', 'English', 'Tajik', 'Spanish', 'French'],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Geneva',
          addressCountry: 'Switzerland',
        },
      };
      script.textContent = JSON.stringify(schemaData);
    }
  }, [title, description, image, type, location.pathname, currentUrl]);

  return null;
};
