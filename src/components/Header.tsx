import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Activity, Heart, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/* 
 * HEADER COMPONENT - SITE-WIDE NAVIGATION
 * 
 * EDITABLE SECTIONS:
 * 1. Logo: company logo image and name
 * 2. Navigation Items: menu items and their destinations
 * 3. CTA Button: main call-to-action in header
 * 4. Mobile Menu: responsive navigation for mobile devices
 */

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* EDITABLE: Navigation Items - UPDATED: Removed Services dropdown, added direct service links */
  const navigationItems = [
    { name: 'Home', path: '/', icon: null }, /* EDITABLE: Home page link */
    // { name: 'ABG', path: '/abg', icon: Activity }, /* EDITABLE: ABG service page link */
    { name: 'X-Ray', path: '/xray', icon: Zap }, /* EDITABLE: X-Ray service page link */
    { name: 'ECG', path: '/ecg', icon: Heart }, /* EDITABLE: ECG service page link */
    { name: 'Contact', path: '/contact', icon: null } /* EDITABLE: Contact page link */
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white shadow-xl backdrop-blur-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* EDITABLE: Company Logo Section */}
          <Link to="/" className="flex items-center group">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {/* EDITABLE: Company Logo Image - Replace src to change logo */}
              <img
                src="https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/Abg-services%20-Images/Q%20path%20Logo%20300dpi.png" /* EDITABLE: Logo image URL */
                alt="Q Path Diagnostics Logo" /* EDITABLE: Logo alt text */
                width={250}
                height={80}
                className="object-contain"
              />
            </motion.div>
          </Link>

          {/* EDITABLE: Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navigationItems.map((item, index) => {
              const IconComponent = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link 
                    to={item.path}
                    className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 group ${
                      isActive 
                        ? 'text-[#1E8449] bg-[#1E8449]/10' 
                        : 'text-[#34495E] hover:text-[#1E8449] hover:bg-[#1E8449]/5'
                    }`}
                  >
                    {IconComponent && (
                      <>
                        {/* EDITABLE: Navigation Item Icons */}
                        <IconComponent className="w-4 h-4" />
                      </>
                    )}
                    <span>{item.name}</span>
                    
                    {/* EDITABLE: Active Page Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1E8449] rounded-full"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}

            {/* EDITABLE: Header CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Link
                to="/contact" /* EDITABLE: Header CTA destination link */
                className="ml-4 bg-gradient-to-r from-[#1E8449] to-[#2980B9] text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-medium transform hover:scale-105"
              >
                Book a Test {/* EDITABLE: Header CTA button text */}
              </Link>
            </motion.div>
          </nav>

          {/* EDITABLE: Mobile Menu Toggle Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#34495E] hover:text-[#1E8449] transition-colors rounded-lg hover:bg-[#1E8449]/10"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* EDITABLE: Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden bg-white border-t border-gray-100 shadow-lg"
            >
              {/* EDITABLE: Mobile Navigation Items */}
              <nav className="px-4 py-6 space-y-2">
                {navigationItems.map((item, index) => {
                  const IconComponent = item.icon;
                  const isActive = location.pathname === item.path;
                  
                  return (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        to={item.path}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                          isActive 
                            ? 'text-[#1E8449] bg-[#1E8449]/10' 
                            : 'text-[#34495E] hover:text-[#1E8449] hover:bg-[#1E8449]/5'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {IconComponent && (
                          <>
                            {/* EDITABLE: Mobile Navigation Icons */}
                            <IconComponent className="w-5 h-5" />
                          </>
                        )}
                        <span>{item.name}</span>
                      </Link>
                    </motion.div>
                  );
                })}
                
                {/* EDITABLE: Mobile CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  className="pt-4"
                >
                  <Link
                    to="/contact" /* EDITABLE: Mobile CTA destination link */
                    className="block bg-gradient-to-r from-[#1E8449] to-[#2980B9] text-white text-center px-6 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Book a Test Now {/* EDITABLE: Mobile CTA button text */}
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};