export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Free Permanent QR Code Generator",
  "url": "https://qorina.vercel.app",
  "description": "Generate unlimited permanent QR codes from any URL that will work indefinitely. Fast, free, and no registration required.",
  "keywords": "qr code generator, free qr code, permanent qr code, unlimited qr codes, qr code maker, create qr code, qr code online, business qr code"
};

export const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "QR Code Generator",
  "url": "https://qorina.vercel.app",
  "description": "A free online tool to create permanent QR codes from any URL with no registration required.",
  "applicationCategory": "Utility",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a QR code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A QR code (Quick Response code) is a type of barcode that can be scanned by smartphones and other devices to quickly access information such as websites, contact details, or other digital content."
      }
    },
    {
      "@type": "Question",
      "name": "Are your QR codes really permanent?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Our QR codes are designed to work indefinitely. Once generated, they will continue to function without expiration dates or scan limits."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to register to use your service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No registration is required. Our QR code generator is completely free to use with no signup process needed. Simply enter your URL and generate your QR code instantly."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use the generated QR codes commercially?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Our QR codes can be used for both personal and commercial purposes without any restrictions."
      }
    }
  ]
};