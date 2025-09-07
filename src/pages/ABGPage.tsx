import React, { Component, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ServiceHero } from '../components/ServiceHero';
import { AnimatedSection } from '../components/AnimatedSection';
import { AnimatedCard } from '../components/AnimatedCard';
import { OptimizedImage } from '../components/OptimizedImage';
import { Activity, Clock, Home, Users, FileCheck, Heart, Settings as Lungs, AlertCircle, Shield, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

/* 
 * ABG TEST PAGE - ARTERIAL BLOOD GAS TESTING SERVICE
 * 
 * EDITABLE SECTIONS:
 * 1. Hero Section: backgroundImage, title, subtitle, price
 * 2. Benefits Section: benefits array with icons, titles, descriptions
 * 3. Process Steps: process array with step descriptions
 * 4. Target Conditions: whoNeedsABG array
 * 5. Contact Information: phone numbers and links
 * 6. Pricing Information: price displays and service details
 * 7. CTA Section: 24/7 badge text
 * 8. Sample Report Button: link and text for "View Sample Report" button
 */

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<{ children: ReactNode }, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div className="text-center py-20 text-red-600">Something went wrong on this page. Please try again.</div>;
    }
    return this.props.children;
  }
}

export const ABGPage: React.FC = () => {
  console.log('ABGPage rendered'); // Debugging log

  /* EDITABLE: Benefits Section Data - Modify icons, titles, and descriptions */
  const benefits = [
    { icon: Home, title: "Home Comfort", desc: "No hospital visits required, test in familiar environment" },
    { icon: Clock, title: "Quick Results", desc: "Digital reports delivered within 2-5 minutes" },
    { icon: Users, title: "Expert Technicians", desc: "Certified professionals with 15+ years experience" },
    { icon: Shield, title: "Safety First", desc: "Sterile equipment and strict hygiene protocols" }
  ];

  /* EDITABLE: Target Conditions - Add or modify conditions that require ABG testing */
  const whoNeedsABG = [
    "Patients with respiratory conditions (COPD, Asthma)",
    "Post-surgery recovery monitoring", 
    "Critical care and ICU follow-ups",
    "Diabetic ketoacidosis assessment",
    "Kidney disease management",
    "Heart failure monitoring"
  ];

  /* EDITABLE: Process Steps - Modify the ABG testing procedure steps */
  const process = [
    "Patient preparation and positioning",
    "Arterial puncture with minimal discomfort", 
    "Sample collection in specialized syringe",
    "Immediate analysis with portable analyzer",
    "Digital report generation and delivery"
  ];

  return (
    <ErrorBoundary>
      <div className="pt-16 lg:pt-20">
        {/* EDITABLE: ServiceHero Section - Main hero banner with call-to-action buttons */}
        <ServiceHero
          title="ABG Test at Home" /* EDITABLE: Main page title */
          subtitle="Professional Arterial Blood Gas analysis in the comfort of your home. Expert technicians, instant results, complete safety." /* EDITABLE: Page description */
          backgroundImage="https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/Abg-services%20-Images/herosection-3-3.jpg" /* EDITABLE: Hero background image URL */
          price="₹1499" /* EDITABLE: Service price display */
          ctaText="Starts at" /* EDITABLE: Call-to-action button text */
          buttonGap="gap-4 sm:gap-6 md:gap-8" /* EDITABLE: Button spacing */
        />

        {/* EDITABLE: Understanding ABG Section - Educational content about ABG tests */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="slide-left">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#34495E]">
                    Understanding ABG Tests
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    An <span className="border-b-2 border-red-500 inline-block">Arterial Blood Gas (ABG) testing</span> measures oxygen, carbon dioxide, and pH levels in your blood. 
                    This critical diagnostic tool helps assess lung function, kidney function, and overall metabolic status.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Lungs className="w-5 h-5 text-[#1E8449]" />
                      <span className="text-[#34495E] font-medium">Lung Function</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Heart className="w-5 h-5 text-[#2980B9]" />
                      <span className="text-[#34495E] font-medium">Heart Health</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Activity className="w-5 h-5 text-[#1E8449]" />
                      <span className="text-[#34495E] font-medium">Acid-Base Balance</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <AlertCircle className="w-5 h-5 text-[#2980B9]" />
                      <span className="text-[#34495E] font-medium">Emergency Care</span>
                    </div>
                  </div>
                  {/* EDITABLE: View Sample Report Button - Update href to change link, text for button label */}
                  <div className="flex justify-center mt-8">
                    <motion.a
                      href="https://drive.google.com/file/d/1IyuXINrbtxFpbeZU-QQ1M2YVN79OSc8z/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#1E8449] text-white px-6 py-3 rounded-lg hover:bg-[#1E8449]/90 transition-all duration-300 font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl"
                    >
                      View Sample Report
                    </motion.a>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-right" delay={200}>
                <div className="relative">
                  <OptimizedImage
                    src="https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/Abg-services%20-Images/arterial-blood-gas-abg-test-image.webp" /* EDITABLE: Section image URL */
                    alt="ABG test procedure" /* EDITABLE: Image alt text for accessibility */
                    className="w-full rounded-2xl shadow-lg"
                    width={600}
                    height={400}
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* EDITABLE: Benefits Section - Why choose at-home ABG testing */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#34495E] mb-4">
                  Why Choose At-Home ABG Testing?
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Experience superior care with our professional home-based ABG testing service
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection stagger={true} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <AnimatedCard
                  key={benefit.title}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.desc}
                  delay={index * 150}
                  hoverEffect="glow"
                />
              ))}
            </AnimatedSection>
          </div>
        </section>

        {/* EDITABLE: Process Section - Step-by-step ABG testing procedure */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#34495E] mb-4">
                  Our 2-Minute Report Process
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Advanced technology enables instant analysis and detailed report delivery
                </p>
              </div>
            </AnimatedSection>

            <div className="max-w-4xl mx-auto">
              {process.map((step, index) => (
                <AnimatedSection
                  key={index}
                  delay={index * 200}
                  className="flex items-center space-x-6 mb-8 group"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="flex-shrink-0 w-12 h-12 bg-[#1E8449] text-white rounded-full flex items-center justify-center font-bold text-lg relative overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10">{index + 1}</span>
                  </motion.div>
                  <motion.div 
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="flex-1 p-4 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors duration-300"
                  >
                    <p className="text-lg text-[#34495E] font-medium">{step}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* EDITABLE: Who Needs ABG Section - Target conditions and pricing */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="slide-left">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#34495E]">
                    Who Needs ABG Testing?
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    <span className="border-b-2 border-red-500 inline-block">Arterial Blood Gas (ABG) testing</span> is essential for patients with various medical conditions requiring 
                    precise monitoring of blood gases and acid-base balance.
                  </p>
                  <div className="space-y-3">
                    {whoNeedsABG.map((condition, index) => (
                      <motion.div 
                        key={index} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ x: 5 }}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/50 transition-all duration-300"
                      >
                        <CheckCircle className="w-5 h-5 text-[#1E8449] flex-shrink-0" />
                        <span className="text-[#34495E]">{condition}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-right" delay={300}>
                <motion.div 
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-2xl font-bold text-[#34495E] mb-6">Pricing & Information</h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">ABG Test at Home Starts at</span>
                      <motion.span 
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-2xl font-bold text-[#1E8449]"
                      >
                        ₹1499
                      </motion.span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Report Delivery</span>
                      <span className="text-[#34495E] font-medium">2 minutes</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Service Hours</span>
                      <motion.span 
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="bg-[#1E8449] text-white font-semibold text-base sm:text-lg px-3 py-1 rounded-full"
                      >
                        24/7 Available
                      </motion.span>
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to="/contact"
                      className="w-full bg-[#1E8449] text-white py-4 rounded-lg hover:bg-[#1E8449]/90 transition-all duration-300 hover:shadow-lg font-semibold text-lg inline-block text-center relative overflow-hidden group"
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/10"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                      />
                      <span className="relative z-10">Book ABG Test Now</span>
                    </Link>
                  </motion.div>
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* EDITABLE: CTA Section - Final call-to-action with contact options and 24/7 badge */}
        <section className="py-20 bg-gradient-to-r from-[#2980B9] to-[#1E8449]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Schedule Your ABG Test Today
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Professional, rapid, and safe ABG testing at your doorstep
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-[#2980B9] px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:shadow-xl hover:scale-105 font-semibold text-base sm:text-lg w-full sm:w-auto text-center"
                >
                  Book ABG Test
                </Link>
                <a
                  href="tel:+918712197228"
                  className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white hover:text-[#2980B9] transition-all duration-300 font-semibold text-base sm:text-lg w-full sm:w-auto text-center"
                >
                  Contact: +91 8712197228
                </a>
              </div>
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mt-6 inline-block bg-[#1E8449] text-white px-6 py-2 rounded-full font-semibold text-base sm:text-lg shadow-lg"
              >
                24/7 Available 
              </motion.div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </ErrorBoundary>
  );
};