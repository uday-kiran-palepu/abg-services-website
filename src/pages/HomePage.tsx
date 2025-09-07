import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { AnimatedSection } from '../components/AnimatedSection';
import { AnimatedCard } from '../components/AnimatedCard';
import { OptimizedImage } from '../components/OptimizedImage';
import { motion } from 'framer-motion';
import { 
  Home, Clock, Award, Users, FileCheck, Shield, 
  Target, CheckCircle, ArrowRight, Activity, Zap, Heart 
} from 'lucide-react';

/* 
 * HOMEPAGE - MAIN LANDING PAGE
 * 
 * EDITABLE SECTIONS:
 * 1. Hero Section: title, subtitle, background image, CTA buttons
 * 2. Why ABG Testing: information about ABG testing with image and call-to-action buttons
 * 3. Why Choose Us: whyChooseUs array with icons and descriptions
 * 4. Services Overview: services array with images, descriptions, prices
 * 5. How It Works: howItWorks array with process steps
 * 6. Contact Information: phone numbers and links throughout
 */

export const HomePage: React.FC = () => {
  /* EDITABLE: Why Choose Us Section Data - Company benefits and features */
  const whyChooseUs = [
    { icon: Home, title: "First in Hyderabad", desc: "Pioneering at-home diagnostic services" },
    { icon: Clock, title: "24/7 Service", desc: "Available round the clock for emergencies" },
    { icon: Award, title: "15+ Years Experience", desc: "Trusted healthcare expertise" },
    { icon: Users, title: "Expert Staff", desc: "Certified medical professionals" },
    { icon: FileCheck, title: "Instant Reports", desc: "Digital reports within minutes" },
    { icon: Shield, title: "99.8% Accurate", desc: "Precise diagnostic results" },
    { icon: Target, title: "100% Safe", desc: "Stringent safety protocols" },
    { icon: CheckCircle, title: "Associated Labs", desc: "ICMR, NABL & CAP accredited" }
  ];

   const services = [
    {
      id: 'abg',
      title: 'ABG Test',
      description: 'Arterial Blood Gas analysis for respiratory and metabolic assessment. Quick, accurate results for critical care decisions.',
      image: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/Abg-services%20-Images/arterial-blood-gas-abg-test-image.webp', /* EDITABLE: ABG service image */
      icon: Activity,
      link: '/abg', /* EDITABLE: ABG page link */
      price: 'Starts at ₹1499' /* EDITABLE: ABG service price */
    },
    {
      id: 'ecg',
      title: 'ECG Test',
      description: 'A 12-Channel ECG(Electrocardiogram) with a Cardiologist testing for heart health monitoring. Painless procedure perfect for elderly and immobile patients.',
      image: 'https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/Abg-services%20-Images/ecg-test-image-1.jpg', /* EDITABLE: ECG service image */
      icon: Heart,
      link: '/ecg', /* EDITABLE: ECG page link */
      price: 'Starts at ₹1499' /* EDITABLE: ECG service price */
    },
    {
      id: 'xray',
      title: 'X-Ray Services',
      description: 'Advanced digital X-ray with a Radiologist imaging for chest, bone, and joint examinations. Low-radiation safety standards.',
      image: 'https://images.pexels.com/photos/4225922/pexels-photo-4225922.jpeg', /* EDITABLE: X-Ray service image */
      icon: Zap,
      link: '/xray', /* EDITABLE: X-Ray page link */
      price: 'Starts at ₹1499' /* EDITABLE: X-Ray service price */
    }
  ];

  /* EDITABLE: How It Works Process - 3-step booking process */
  const howItWorks = [
    {
      step: 1,
      title: "Book Online/Call",
      description: "Schedule your test through our website, WhatsApp, or by calling us directly."
    },
    {
      step: 2,
      title: "Our Expert Visits",
      description: "Certified medical professional arrives at your location with portable equipment."
    },
    {
      step: 3,
      title: "Instant Digital Reports",
      description: "Receive accurate digital reports within minutes via email and WhatsApp."
    }
  ];

  return (
    <div className="font-sans">
      {/* EDITABLE: Hero Section - Main landing page banner */}
      <Hero
        title="Hyderabad's First At-Home ABG(Arterial Blood Gas) Testing" /* EDITABLE: Main hero title */
        subtitle="Fast, accurate diagnostic reports delivered to your doorstep within minutes" /* EDITABLE: Hero subtitle */
        showTrustBadges={true}
        backgroundImage="https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/Abg-services%20-Images/herosection-3-3.jpg" /* EDITABLE: Hero background image */
      />

     {/* NEW: Why ABG Testing Section - Information about ABG testing */}
      <section className="py-16 sm:py-20 bg-qpath-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12 sm:mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2.5xl sm:text-3.6xl md:text-5xl font-bold text-qpath-text mb-4"
              >
                Why ABG Testing
              </motion.h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Left: Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
                    Get an immediate, accurate <span className="border-b-2 border-red-500 inline-block">Arterial Blood Gas (ABG) test</span> right in your home, with results in less than a minute. An ABG test is a crucial blood test that checks oxygen levels and your body's pH balance, giving doctors vital information for conditions like COPD or other breathing difficulties. Our real-time testing eliminates the stressful delays and lab runs that can affect results. This "sample to solution" approach means your doctor gets the critical information they need instantly, allowing for faster and more effective care when it matters most.
                </p>
                {/* EDITABLE: Button Container - Adjust flex, gap, or alignment for buttons */}
                <div className="flex flex-row flex-wrap gap-4 sm:gap-6 justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative overflow-hidden"
                  >
                    <Link
                      to="/contact" /* EDITABLE: Booking page link */
                      className="bg-qpath-green text-white px-4 sm:px-6 py-3 rounded-lg font-semibold text-sm sm:text-lg shadow-lg hover:shadow-xl transition-shadow duration-300 inline-block"
                    >
                      Book Test
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href="tel:+918712197228" /* EDITABLE: Call phone number */
                      className="border-2 border-qpath-green text-qpath-green px-4 sm:px-6 py-3 rounded-lg font-semibold text-sm sm:text-lg hover:bg-qpath-green hover:text-white transition-all duration-300 inline-block"
                    >
                      Call: +91 87121 97228
                    </a>
                  </motion.div>
                </div>
              </motion.div>
              {/* Right: Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <OptimizedImage
                  src="https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/Abg-services%20-Images/homepage-abg-image.jpeg" /* EDITABLE: ABG section image */
                  alt="ABG Testing"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-lg"
                  width={600}
                  height={400}
                />
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>



      {/* EDITABLE: Why Choose Us Section - Company benefits and trust signals */}
      <section className="py-16 sm:py-20 bg-qpath-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12 sm:mb-16">
              {/* EDITABLE: Section Title */}
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-qpath-text mb-4"
              >
                Why Choose Q Path Diagnostics?
              </motion.h2>
              {/* EDITABLE: Section Description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              >
                Experience the convenience of professional healthcare services in the comfort of your home
              </motion.p>
            </div>
          </AnimatedSection>

          {/* EDITABLE: Benefits Cards Grid - Displays company benefits */}
          <AnimatedSection stagger={true} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {whyChooseUs.map((item, index) => (
              <AnimatedCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.desc}
                delay={index * 100}
                hoverEffect={index % 2 === 0 ? 'lift' : 'glow'}
              />
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* EDITABLE: Services Overview Section - Main diagnostic services */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12 sm:mb-16">
              {/* EDITABLE: Services Section Title */}
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-qpath-text mb-4"
              >
                Our Diagnostic Services
              </motion.h2>
              {/* EDITABLE: Section Description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              >
                Professional medical testing services brought directly to your home with state-of-the-art portable equipment
              </motion.p>
            </div>
          </AnimatedSection>

          {/* EDITABLE: Services Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <AnimatedSection
                  key={service.id}
                  delay={index * 200}
                  animation="fade-up"
                >
                  <motion.div
                    whileHover={{ 
                      y: -15,
                      rotateY: 5,
                      transition: { duration: 0.3 }
                    }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group h-full flex flex-col relative"
                  >
                    {/* Animated border */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-qpath-green to-qpath-blue rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ padding: '2px' }}
                    >
                      <div className="w-full h-full bg-white rounded-2xl" />
                    </motion.div>

                    <div className="relative h-48 sm:h-64 overflow-hidden">
                      {/* EDITABLE: Service Image - Replace service.image URLs to change images */}
                      <OptimizedImage
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full"
                        width={400}
                        height={256}
                      />
                      
                      <motion.div 
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                      />
                      
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="absolute top-4 left-4 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg"
                      >
                        <IconComponent className="w-6 h-6 text-qpath-green" />
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-4 right-4 bg-qpath-green text-white px-3 py-1 rounded-full text-sm font-semibold"
                      >
                        {service.price}
                      </motion.div>
                    </div>
                    
                    <div className="p-4 sm:p-6 flex-1 flex flex-col relative z-10">
                      {/* EDITABLE: Service Title and Description */}
                      <h3 className="text-xl sm:text-2xl font-bold text-qpath-text mb-3">{service.title}</h3>
                      <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed flex-1">{service.description}</p>
                      
                      {/* EDITABLE: Learn More Link */}
                      <motion.div 
                        whileHover={{ x: 5 }} 
                        transition={{ duration: 0.2 }}
                        className="relative overflow-hidden"
                      >
                        <Link
                          to={service.link} /* EDITABLE: Service page link */
                          className="inline-flex items-center space-x-2 text-qpath-green hover:text-qpath-green/80 font-semibold transition-colors group/link relative"
                        >
                          <motion.div
                            className="absolute bottom-0 left-0 h-0.5 bg-qpath-green"
                            initial={{ width: '0%' }}
                            whileHover={{ width: '100%' }}
                            transition={{ duration: 0.3 }}
                          />
                          <span>Learn More</span>
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <ArrowRight className="w-4 h-4" />
                          </motion.div>
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* EDITABLE: How It Works Section - 3-step process explanation */}
      <section className="py-16 sm:py-20 bg-qpath-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12 sm:mb-16">
              {/* EDITABLE: How It Works Title */}
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-qpath-text mb-4"
              >
                How It Works
              </motion.h2>
              {/* EDITABLE: How It Works Description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              >
                Simple 3-step process to get your diagnostic tests done at home
              </motion.p>
            </div>
          </AnimatedSection>

          {/* EDITABLE: Process Steps with Connecting Line */}
          <div className="relative">
            {/* EDITABLE: Connecting Line Animation - Can be hidden by setting display: none */}
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-qpath-green to-qpath-blue transform -translate-y-1/2 origin-left rounded-full"
            />
            
            {/* EDITABLE: Process Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {howItWorks.map((step, index) => (
                <AnimatedSection
                  key={step.step}
                  delay={index * 300}
                  animation="bounce-in"
                  className="relative text-center"
                >
                  {/* EDITABLE: Step Number Circle */}
                  <motion.div 
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="relative z-10 mb-6"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 400, 
                        damping: 10,
                        delay: index * 0.2 
                      }}
                      className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-qpath-green to-qpath-blue rounded-full mx-auto flex items-center justify-center text-white text-xl sm:text-2xl font-bold shadow-lg relative overflow-hidden"
                    >
                      {/* Animated ring */}
                      <motion.div
                        className="absolute inset-0 border-4 border-white/30 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      />
                      
                      <motion.span
                        animate={{ 
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.5
                        }}
                        className="relative z-10"
                      >
                        {step.step}
                      </motion.span>
                    </motion.div>
                  </motion.div>
                  
                  {/* EDITABLE: Step Title and Description */}
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                    className="text-xl sm:text-2xl font-bold text-qpath-text mb-4"
                  >
                    {step.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
                    className="text-sm sm:text-base text-gray-600 leading-relaxed"
                  >
                    {step.description}
                  </motion.p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EDITABLE: CTA Section - Final call-to-action with animated background */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-qpath-green to-qpath-blue relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-24 h-24 border border-white/5 rounded-full"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: Math.random() * 400,
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: Math.random() * 400,
                rotate: 360,
                scale: [null, Math.random() * 0.5 + 1, Math.random() * 0.5 + 0.5]
              }}
              transition={{
                duration: Math.random() * 20 + 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection animation="fade-up">
            {/* EDITABLE: CTA Section Title */}
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Ready to Get Your Test Done at Home?
            </motion.h2>
            {/* EDITABLE: CTA Section Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Join thousands of satisfied patients who trust Q Path Diagnostics for accurate, convenient healthcare services
            </motion.p>
            
            {/* EDITABLE: CTA Buttons - Aligned vertically */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
            >
              {/* EDITABLE: Primary Booking Button */}
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden"
              >
                <Link
                  to="/contact" /* EDITABLE: Booking page link */
                  className="bg-white text-qpath-green px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:shadow-xl font-semibold text-base sm:text-lg inline-block relative overflow-hidden group w-full sm:w-auto text-center"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-qpath-green/10 to-qpath-blue/10"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10">
                    Book Your Test Now {/* EDITABLE: Primary CTA button text */}
                  </span>
                </Link>
              </motion.div>
              
              {/* EDITABLE: Emergency Call Button */}
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="tel:+918712197228" /* EDITABLE: Emergency phone link */
                  className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white hover:text-qpath-green transition-all duration-300 font-semibold text-base sm:text-lg w-full sm:w-auto text-center"
                >
                  Contact: +91 8712197228 {/* EDITABLE: Display phone number */}
                </a>
              </motion.div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};