'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QRCodeCanvas, QRCodeSVG } from 'qrcode.react';
import { Copy, Download, RotateCcw, Sparkles, QrCode, CheckCircle } from 'lucide-react';

export default function Home() {
  const [url, setUrl] = useState('');
  const [qrValue, setQrValue] = useState('');
  const [useSVG, setUseSVG] = useState(false);
  const [transparentBackground, setTransparentBackground] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [copied, setCopied] = useState(false);

  // Auto-hide onboarding after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOnboarding(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url) {
      setIsGenerating(true);
      // Simulate generation delay for better UX
      setTimeout(() => {
        // Ensure the URL has a protocol
        let formattedUrl = url;
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
          formattedUrl = 'https://' + url;
        }
        setQrValue(formattedUrl);
        setIsGenerating(false);
      }, 800);
    }
  };

  const handleDownload = () => {
    if (useSVG) {
      const svg = document.getElementById('qr-code-svg');
      if (svg) {
        const svgData = new XMLSerializer().serializeToString(svg);
        const blob = new Blob([svgData], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = 'qr-code.svg';
        link.href = url;
        link.click();
      }
    } else {
      const canvas = document.getElementById('qr-code-canvas') as HTMLCanvasElement;
      if (canvas) {
        const url = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = 'qr-code.png';
        link.href = url;
        link.click();
      }
    }
  };

  const copyToClipboard = () => {
    // Check if clipboard API is available
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(qrValue).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }).catch(err => {
        console.error('Failed to copy: ', err);
        // Fallback for copying
        fallbackCopyTextToClipboard(qrValue);
      });
    } else {
      // Fallback for older browsers or insecure contexts
      fallbackCopyTextToClipboard(qrValue);
    }
  };

  const fallbackCopyTextToClipboard = (text: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    
    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      const successful = document.execCommand('copy');
      if (successful) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }
    
    document.body.removeChild(textArea);
  };

  const resetForm = () => {
    setQrValue('');
    setUrl('');
    setUseSVG(false);
    setTransparentBackground(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Onboarding Animation */}
      <AnimatePresence>
        {showOnboarding && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4, type: "spring", stiffness: 300, damping: 15 }}
                className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <QrCode className="text-white w-8 h-8" />
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-2xl font-bold text-gray-800 mb-3"
              >
                QR Code Generator
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-gray-600 mb-6"
              >
                Create beautiful, permanent QR codes from any URL in seconds
              </motion.p>
              
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowOnboarding(false)}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full max-w-2xl bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white z-10">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 p-6 text-white text-center relative">
          <div className="absolute top-4 right-4">
            <Sparkles className="w-6 h-6 opacity-80" />
          </div>
          <h1 className="text-3xl font-bold mb-2">QR Code Generator</h1>
          <p className="opacity-90">Create beautiful, permanent QR codes instantly</p>
        </div>
        
        <div className="p-6 md:p-8">
          <AnimatePresence mode="wait">
            {!qrValue ? (
              <motion.div
                key="input-form"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <form onSubmit={handleSubmit} className="mb-8">
                  <div className="flex flex-col space-y-4">
                    <label htmlFor="url" className="text-gray-700 font-medium">
                      Enter URL
                    </label>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <input
                        type="text"
                        id="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="https://example.com"
                        className="flex-grow px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition shadow-sm"
                      />
                      <motion.button
                        type="submit"
                        disabled={!url || isGenerating}
                        whileHover={{ scale: !url || isGenerating ? 1 : 1.03 }}
                        whileTap={{ scale: !url || isGenerating ? 1 : 0.98 }}
                        className={`px-6 py-3 font-medium rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center ${
                          !url || isGenerating
                            ? 'bg-gray-300 cursor-not-allowed'
                            : 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:shadow-xl'
                        }`}
                      >
                        {isGenerating ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                            ></motion.div>
                            Generating...
                          </>
                        ) : (
                          <>
                            <QrCode className="mr-2 w-5 h-5" />
                            Generate QR
                          </>
                        )}
                      </motion.button>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Format Options</h3>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="format-png"
                          name="format"
                          checked={!useSVG}
                          onChange={() => setUseSVG(false)}
                          className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 focus:ring-indigo-500"
                        />
                        <label htmlFor="format-png" className="ml-2 text-sm font-medium text-gray-700">
                          PNG (Default)
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="format-svg"
                          name="format"
                          checked={useSVG}
                          onChange={() => setUseSVG(true)}
                          className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 focus:ring-indigo-500"
                        />
                        <label htmlFor="format-svg" className="ml-2 text-sm font-medium text-gray-700">
                          SVG
                        </label>
                      </div>
                    </div>
                    
                    {useSVG && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 flex items-center"
                      >
                        <input
                          type="checkbox"
                          id="transparent-bg"
                          checked={transparentBackground}
                          onChange={(e) => setTransparentBackground(e.target.checked)}
                          className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <label htmlFor="transparent-bg" className="ml-2 text-sm font-medium text-gray-700">
                          Transparent Background
                        </label>
                      </motion.div>
                    )}
                  </div>
                </form>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-center py-8"
                >
                  <div className="inline-block p-4 bg-indigo-100 rounded-full mb-4">
                    <QrCode className="w-12 h-12 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">How to use</h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    Enter any valid URL above, choose your preferred format, and click &quot;Generate QR&quot; to create a scannable QR code.
                  </p>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="qr-result"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col items-center">
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 mb-6">
                    {useSVG ? (
                      <QRCodeSVG
                        id="qr-code-svg"
                        value={qrValue}
                        size={256}
                        level={'H'}
                        includeMargin={true}
                        className="rounded-lg"
                        bgColor={transparentBackground ? 'transparent' : 'white'}
                      />
                    ) : (
                      <QRCodeCanvas
                        id="qr-code-canvas"
                        value={qrValue}
                        size={256}
                        level={'H'}
                        includeMargin={true}
                        className="rounded-lg"
                      />
                    )}
                  </div>
                  
                  <div className="w-full max-w-md mb-6">
                    <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3 mb-4">
                      <span className="text-sm font-medium text-gray-700 truncate mr-2">{qrValue}</span>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={copyToClipboard}
                        className="flex-shrink-0 p-2 rounded-md hover:bg-gray-200 transition-colors"
                      >
                        {copied ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : (
                          <Copy className="w-5 h-5 text-gray-500" />
                        )}
                      </motion.button>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleDownload}
                        className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
                      >
                        <Download className="mr-2 w-5 h-5" />
                        Download
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={resetForm}
                        className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
                      >
                        <RotateCcw className="mr-2 w-5 h-5" />
                        Regenerate
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setQrValue('')}
                        className="flex items-center justify-center px-4 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg shadow hover:shadow-md transition-all"
                      >
                        New QR
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        <div className="bg-gray-50 px-6 py-4 text-center text-sm text-gray-500 border-t border-gray-200">
          <p>All generated QR codes are permanent and will continue to work indefinitely</p>
        </div>
      </div>
      
      {/* Custom styles for animations */}
      <style jsx>{`
        .animate-blob {
          animation: blob-animation 8s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes blob-animation {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
      `}</style>
    </div>
  );
}