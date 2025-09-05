import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { OptimizedImage } from './OptimizedImage';

interface HeroProps {
  title: string;
  subtitle: string;
  showTrustBadges: boolean;
  backgroundImage: string;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  showTrustBadges,
  backgroundImage
}) => {
  // Carousel images
  const images = [
    backgroundImage, // First image from props
    'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/Abg-services%20-Images/herosection-1-1.jpg', /* EDITABLE: Carousel image 2 */
    'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/Abg-services%20-Images/herosection-2-2.jpg' /* EDITABLE: Carousel image 3 */
  ];

  // State for current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative bg-qpath-text py-16 sm:py-24 lg:py-32 overflow-hidden font-sans">
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.div
            key={currentImageIndex}
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 0.6 }} // Slightly increased visibility from 0.5
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <OptimizedImage
              src={images[currentImageIndex]}
              alt={`Hero background ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
              width={1920}
              height={1080}
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-qpath-green/60 to-qpath-blue/60"></div> {/* Reduced opacity */}
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 mt-6"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
        >
          <Link
            to="/contact" /* EDITABLE: Booking page link */
            className="bg-white text-qpath-text px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            Book Your Test
          </Link>
          <Link
            to="/xray" /* EDITABLE: Learn more page link */
            className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-white hover:text-qpath-text transition-all"
          >
            About ABG
          </Link>
        </motion.div>
        {showTrustBadges && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-white leading-relaxed"
          >
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              <span>ICMR Associated</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              <span>24/7 Service</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              <span>99.8% Accuracy</span>
            </div>
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-6"
        >
          <a
            href="tel:+918712197228" /* EDITABLE: Call phone number */
            className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-white hover:text-qpath-text transition-all inline-block"
          >
            Call: +91 87121 97228
          </a>
        </motion.div>
      </div>
    </section>
  );
};