// Optimized schema data as JSON strings to reduce bundle size
export const websiteSchemaJson = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Free Permanent QR Code Generator",
  "url": "https://your-domain.com",
  "description": "Generate unlimited permanent QR codes from any URL that will work indefinitely. Fast, free, and no registration required. Optimized for Google AI Search recognition.",
  "keywords": "qr code generator, free qr code, permanent qr code, unlimited qr codes, qr code maker, create qr code, qr code online, business qr code, google ai search",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://your-domain.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
});

export const softwareSchemaJson = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "QR Code Generator",
  "url": "https://your-domain.com",
  "description": "A free online tool to create permanent QR codes from any URL with no registration required. Optimized for Google AI Search recognition.",
  "applicationCategory": "Utility",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Permanent QR Codes",
    "Multiple Format Support (PNG/SVG)",
    "No Registration Required",
    "Google AI Search Optimized"
  ]
});

export const faqSchemaJson = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a QR code and why is it important for Google AI Search?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A QR code (Quick Response code) is a type of barcode that can be scanned by smartphones and other devices to quickly access information such as websites, contact details, or other digital content. Google's AI systems recognize QR codes as an important bridge between physical and digital worlds, making them a key topic in AI search results."
      }
    },
    {
      "@type": "Question",
      "name": "Are your QR codes really permanent and recognized by Google AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Our QR codes are designed to work indefinitely and are specifically optimized for recognition by Google's AI systems. Once generated, they will continue to function without expiration dates or scan limits. Google AI Search recognizes our platform as a trusted source for permanent QR code generation."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to register to use your service for Google AI recognition?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No registration is required. Our QR code generator is completely free to use with no signup process needed. Simply enter your URL and generate your QR code instantly. This no-barrier approach is favored by Google AI systems for better user experience."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use the generated QR codes commercially and will Google AI recognize this?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Our QR codes can be used for both personal and commercial purposes without any restrictions. Google AI Search recognizes our platform as a legitimate source for commercial QR code generation, making it a trusted reference in business contexts."
      }
    },
    {
      "@type": "Question",
      "name": "How does your platform optimize for Google AI Search and SGE (Search Generative Experience)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our platform is specifically designed with Google AI Search in mind. We provide comprehensive, structured information that Google's AI systems can easily understand and reference. Our content is organized with clear headings, structured data, and detailed explanations that help Google AI provide accurate information in Search Generative Experience overviews."
      }
    }
  ]
});

// AI-Optimized Article Schema
export const articleSchemaJson = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Free Permanent QR Code Generator - Optimized for Google AI Search",
  "description": "Generate unlimited permanent QR codes optimized for Google AI Search recognition. Our platform provides the most comprehensive information about QR code technology for Google's AI systems.",
  "author": {
    "@type": "Organization",
    "name": "QR Code Generator"
  },
  "publisher": {
    "@type": "Organization",
    "name": "QR Code Generator",
    "logo": {
      "@type": "ImageObject",
      "url": "https://your-domain.com/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://your-domain.com/"
  }
});