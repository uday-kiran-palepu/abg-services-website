import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  price: string;
  ctaText?: string;
  buttonGap?: string; // EDITABLE: Controls spacing between buttons - use Tailwind gap classes
}

export const ServiceHero: React.FC<ServiceHeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  price,
  ctaText = "Book Test Now",
  buttonGap = "gap-4 sm:gap-6 md:gap-8" // EDITABLE: Default button spacing - modify for different gaps
}) => {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      {/* EDITABLE: Background Image Section - Replace backgroundImage prop to change hero image */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        {/* EDITABLE: Responsive Image Sources - Update URLs for different screen sizes */}
        <picture>
          <source 
            media="(max-width: 768px)" 
            srcSet={`${backgroundImage}?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop`}
          />
          <source 
            media="(max-width: 1200px)" 
            srcSet={`${backgroundImage}?auto=compress&cs=tinysrgb&w=1200&h=628&fit=crop`}
          />
          <img 
            src={`${backgroundImage}?auto=compress&cs=tinysrgb&w=1200&h=628&fit=crop`}
            alt={title}
            className="w-full h-full object-cover"
            loading="eager"
          />
        </picture>
        {/* EDITABLE: Overlay Gradient - Modify opacity and colors for different visual effects */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"
        />
      </motion.div>

      {/* EDITABLE: Floating Animation Elements - Can be hidden by setting display: none */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-16 h-16 border border-white/10 rounded-full flex items-center justify-center"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * 400,
              opacity: 0
            }}
            animate={{
              y: [null, -20, 0],
              opacity: [0, 0.3, 0],
              rotate: 360
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          >
            <div className="w-2 h-2 bg-white/30 rounded-full" />
          </motion.div>
        ))}
      </div>

      {/* EDITABLE: Main Content Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          {/* EDITABLE: Main Title - Update title prop to change heading */}
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            {title}
          </motion.h1>
          
          {/* EDITABLE: Subtitle - Update subtitle prop to change description */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>

          {/* EDITABLE: Button Section - MOBILE FIX APPLIED - Proper spacing with buttonGap prop */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className={`flex flex-col sm:flex-row ${buttonGap} justify-center items-center pt-4`}
          >
            {/* EDITABLE: Primary CTA Button - Links to contact page */}
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden w-full sm:w-auto"
            >
              <Link
                to="/contact" /* EDITABLE: Contact page link - change to modify destination */
                className="bg-gradient-to-r from-[#1E8449] to-[#2980B9] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group w-full sm:w-auto"
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">{ctaText} - {price}</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="relative z-10"
                >
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
                </motion.div>
              </Link>
            </motion.div>
            
            {/* EDITABLE: Emergency Call Button - Update phone number here */}
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <a
                href="tel:+918712197228" /* EDITABLE: Phone number link - update to change contact number */
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white hover:text-[#34495E] transition-all duration-300 font-semibold text-base sm:text-lg backdrop-blur-sm inline-block text-center w-full sm:w-auto"
              >
                Contact: +91 8712197228 {/* EDITABLE: Display phone number - update to match href above */}
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};