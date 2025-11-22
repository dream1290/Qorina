import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { QrCode } from 'lucide-react';
import { websiteSchema, softwareSchema } from './schema';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Free Permanent QR Code Generator | Create Unlimited QR Codes Forever",
  description: "Generate unlimited permanent QR codes from any URL that will work indefinitely. Fast, free, and no registration required. Perfect for businesses, marketing, and personal use.",
  keywords: "qr code generator, free qr code, permanent qr code, unlimited qr codes, qr code maker, create qr code, qr code online, business qr code",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex`}
      >
        {/* Left sidebar for ads */}
        <aside className="hidden lg:block w-24 xl:w-64 flex-shrink-0">
          <div className="sticky top-0 h-screen flex items-center justify-center bg-gray-100 border-r border-gray-200">
            <div className="text-center p-4">
              <span className="text-xs text-gray-500">Advertisement</span>
              <div className="mt-2 bg-gray-200 border-2 border-dashed rounded-xl w-16 h-64 xl:w-48 xl:h-96 mx-auto" />
            </div>
          </div>
        </aside>
        
        {/* Main content */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* Right sidebar for ads */}
        <aside className="hidden lg:block w-24 xl:w-64 flex-shrink-0">
          <div className="sticky top-0 h-screen flex items-center justify-center bg-gray-100 border-l border-gray-200">
            <div className="text-center p-4">
              <span className="text-xs text-gray-500">Advertisement</span>
              <div className="mt-2 bg-gray-200 border-2 border-dashed rounded-xl w-16 h-64 xl:w-48 xl:h-96 mx-auto" />
            </div>
          </div>
        </aside>
      </body>
    </html>
  );
}