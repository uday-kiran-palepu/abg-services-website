import React, { useState } from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, Clock, MessageCircle, 
  User, Calendar, MessageSquare, ArrowRight, MapPin 
} from 'lucide-react';

/* 
 * CONTACT PAGE - BOOKING AND CONTACT INFORMATION
 * 
 * EDITABLE SECTIONS:
 * 1. Contact Information: phone numbers, email
 * 2. Form Fields: service types, pricing, form validation
 * 3. Google Sheets Integration: form submission endpoint
 * 4. Image: update image source or styling
 */
export const ContactPage: React.FC = () => {
  /* EDITABLE: Form State - Add or modify form fields */
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceType: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
    consent: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  /* EDITABLE: Form Submission Handler - Google Sheets Integration Point */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EDITABLE: Google Apps Script Web App URL - Deployment ID: AKfycbxhogSjsKfOjlKjMnN7as1cNY1EjDS_V1WB64um6fcmxXFaavfSkqhh-V-ojAcFtDSFaQ
      const response = await fetch('https://script.google.com/macros/s/AKfycbxhogSjsKfOjlKjMnN7as1cNY1EjDS_V1WB64um6fcmxXFaavfSkqhh-V-ojAcFtDSFaQ/exec', {
        method: 'POST',
        mode: 'no-cors',  // Required for Google Apps Script
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      setIsSubmitted(true);
      setFormData({
        fullName: '', phone: '', email: '', serviceType: '', 
        preferredDate: '', preferredTime: '', message: '', consent: false
      });
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Submission failed: ' + error.message); // Show error to user
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="pt-16 lg:pt-20 min-h-screen flex items-center justify-center bg-gray-50">
        <AnimatedSection animation="zoom-in" className="text-center max-w-md mx-auto px-4">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-16 h-16 bg-[#1E8449] rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <MessageCircle className="w-8 h-8 text-white" />
            </motion.div>
            {/* EDITABLE: Success Message Title */}
            <h2 className="text-2xl font-bold text-[#34495E] mb-4">Thank You!</h2>
            {/* EDITABLE: Success Message Description */}
            <p className="text-gray-600 mb-6">
              Your test booking request has been submitted successfully. Our team will contact you within 15 minutes to confirm your appointment.
            </p>
            <div className="space-y-3">
              {/* EDITABLE: WhatsApp Contact Button */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/918712197228"
                className="block bg-[#25D366] text-white py-3 px-6 rounded-lg hover:bg-[#25D366]/90 transition-all duration-300 font-medium hover:shadow-lg"
              >
                WhatsApp Us for Immediate Response
              </motion.a>
              {/* EDITABLE: Phone Contact Button */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+918712197228"
                className="block bg-[#2980B9] text-white py-3 px-6 rounded-lg hover:bg-[#2980B9]/90 transition-all duration-300 font-medium hover:shadow-lg"
              >
                Call: +91 87121 97228
              </motion.a>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    );
  }

  return (
    <div className="pt-16 lg:pt-20">
      {/* Page Header Section */}
      <section className="py-20 bg-gradient-to-r from-[#1E8449] to-[#2980B9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact Q Path Diagnostics
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Book your at-home diagnostic test or get in touch with our medical experts
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Card and Image - Centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 mx-auto max-w-2xl justify-center">
            {/* Quick Contact Card */}
            <AnimatedSection animation="zoom-in">
              <motion.div 
                whileHover={{ scale: 1.02, rotateY: 2 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-[#1E8449] to-[#2980B9] p-4 rounded-2xl text-white relative overflow-hidden flex flex-col h-fit w-full"
              >
                <motion.div
                  className="absolute inset-0 opacity-10"
                  animate={{ 
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{
                    backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }}
                />
                <h3 className="text-lg font-bold mb-3 relative z-10">Quick Contact</h3>
                <div className="space-y-2 relative z-10 flex-1 flex flex-col justify-between">
                  <motion.a
                    whileHover={{ x: 5, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    href="tel:+918712197228"
                    className="flex items-center space-x-2 p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    <div>
                      <div className="font-medium text-sm">Call Now</div>
                      <div className="text-xs text-green-100">+91 87121 97228</div>
                    </div>
                  </motion.a>
                  <motion.a
                    whileHover={{ x: 5, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    href="https://wa.me/918712197228"
                    className="flex items-center space-x-2 p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <div>
                      <div className="font-medium text-sm">WhatsApp</div>
                      <div className="text-xs text-green-100">Instant response</div>
                    </div>
                  </motion.a>
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Service Image */}
            <AnimatedSection animation="zoom-in" delay={200}>
              {/* EDITABLE: Adjust image size by modifying 'h-[80px]' (height) or adding 'w-[Xpx]' for width. Use 'object-contain' or 'object-cover' to control scaling. Add 'max-h-[Xpx]' or 'max-w-[Xpx]' to limit dimensions. Wrap in a div for additional styling (e.g., borders, shadows). */}
              <img
                src="https://raw.githubusercontent.com/uday-kiran-palepu/Website-Images/refs/heads/main/Abg-services%20-Images/service-image.png"
                alt="24-Hour Service"
                className="h-[200px] max-w-full object-contain mx-auto"
              />
            </AnimatedSection>
          </div>

          {/* Get in Touch and Contact Form Section */}
          <AnimatedSection animation="slide-up" delay={600}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Get in Touch Section */}
              <AnimatedSection animation="slide-left">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-[#34495E] mb-6">Get in Touch</h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                      Ready to schedule your test? Contact us through any of these convenient methods. 
                      Our medical experts are available 24/7 for emergencies and consultations.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {/* Phone Contact Card */}
                    <motion.div 
                      whileHover={{ x: 5, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 cursor-pointer"
                    >
                      <motion.div 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-12 h-12 bg-[#2980B9] rounded-lg flex items-center justify-center"
                      >
                        <Phone className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <div className="font-semibold text-[#34495E]">Phone Number</div>
                        <a href="tel:+918712197228" className="text-[#2980B9] hover:underline text-lg">
                          +91 87121 97228
                        </a>
                        <div className="text-sm text-gray-500">24/7 Emergency & Booking</div>
                      </div>
                    </motion.div>

                    {/* WhatsApp Contact Card */}
                    <motion.div 
                      whileHover={{ x: 5, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 cursor-pointer"
                    >
                      <motion.div 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-12 h-12 bg-[#25D366] rounded-lg flex items-center justify-center"
                      >
                        <MessageCircle className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <div className="font-semibold text-[#34495E]">WhatsApp</div>
                        <a href="https://wa.me/918712197228" className="text-[#25D366] hover:underline text-lg">
                          +91 87121 97228
                        </a>
                        <div className="text-sm text-gray-500">Instant booking & support</div>
                      </div>
                    </motion.div>

                    {/* Email Contact Card */}
                    <motion.div 
                      whileHover={{ x: 5, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 cursor-pointer"
                    >
                      <motion.div 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-12 h-12 bg-[#1E8449] rounded-lg flex items-center justify-center"
                      >
                        <Mail className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <div className="font-semibold text-[#34495E]">Email</div>
                        <a href="mailto:contact@qpathdiagnostics.com" className="text-[#1E8449] hover:underline">
                          contact@qpathdiagnostics.com
                        </a>
                        <div className="text-sm text-gray-500">Quick response guaranteed</div>
                      </div>
                    </motion.div>

                    {/* Service Hours Card */}
                    <motion.div 
                      whileHover={{ x: 5, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 cursor-pointer"
                    >
                      <motion.div 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-12 h-12 bg-[#34495E] rounded-lg flex items-center justify-center"
                      >
                        <Clock className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <div className="font-semibold text-[#34495E]">Service Hours</div>
                        <div className="text-sm text-gray-600">
                          24/7 Service<br />
                          At your Doorstep
                        </div>
                      </div>
                    </motion.div>

                    {/* Service Coverage Card */}
                    <motion.div 
                      whileHover={{ x: 5, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 cursor-pointer"
                    >
                      <motion.div 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-12 h-12 bg-[#1E8449] rounded-lg flex items-center justify-center"
                      >
                        <MapPin className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <div className="font-semibold text-[#34495E]">Service Coverage</div>
                        <div className="text-sm text-gray-600">
                          All areas of Hyderabad<br />
                          Secunderabad & surrounding areas
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Contact Form Section */}
              <AnimatedSection animation="slide-right">
                <motion.div 
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-2xl font-bold text-[#34495E] mb-6">Book Your Test</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-[#34495E] mb-2">
                        Full Name
                      </label>
                      <motion.div 
                        whileFocus={{ scale: 1.02 }}
                        className="relative"
                      >
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E8449] focus:border-transparent transition-all duration-300 hover:border-[#1E8449]/50"
                          placeholder="Enter your full name"
                        />
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-[#34495E] mb-2">
                          Phone Number *
                        </label>
                        <motion.div 
                          whileFocus={{ scale: 1.02 }}
                          className="relative"
                        >
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E8449] focus:border-transparent transition-all duration-300 hover:border-[#1E8449]/50"
                            placeholder="+91 "
                          />
                        </motion.div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#34495E] mb-2">
                          Email Address
                        </label>
                        <motion.div 
                          whileFocus={{ scale: 1.02 }}
                          className="relative"
                        >
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E8449] focus:border-transparent transition-all duration-300 hover:border-[#1E8449]/50"
                            placeholder="your@email.com"
                          />
                        </motion.div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="serviceType" className="block text-sm font-medium text-[#34495E] mb-2">
                        Service Type
                      </label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E8449] focus:border-transparent transition-all duration-300 hover:border-[#1E8449]/50"
                      >
                        <option value="">Select a service</option>
                        <option value="ABG">ABG Test Starts at ₹1499</option> 
                        <option value="ECG">ECG Test Starts at ₹1499</option>
                        <option value="X-Ray">X-Ray Test Starts at ₹1499</option>
                        <option value="Multiple">Multiple Tests</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="preferredDate" className="block text-sm font-medium text-[#34495E] mb-2">
                          Preferred Date
                        </label>
                        <motion.div 
                          whileFocus={{ scale: 1.02 }}
                          className="relative"
                        >
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="date"
                            id="preferredDate"
                            name="preferredDate"
                            value={formData.preferredDate}
                            onChange={handleChange}
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E8449] focus:border-transparent transition-all duration-300 hover:border-[#1E8449]/50"
                          />
                        </motion.div>
                      </div>

                      <div>
                        <label htmlFor="preferredTime" className="block text-sm font-medium text-[#34495E] mb-2">
                          Preferred Time
                        </label>
                        <select
                          id="preferredTime"
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E8449] focus:border-transparent transition-all duration-300 hover:border-[#1E8449]/50"
                        >
                          <option value="">Select time</option>
                          <option value="Morning (6 AM - 12 PM)">Morning (6 AM - 12 PM)</option>
                          <option value="Afternoon (12 PM - 6 PM)">Afternoon (12 PM - 6 PM)</option>
                          <option value="Evening (6 PM - 10 PM)">Evening (6 PM - 10 PM)</option>
                          <option value="Emergency (Anytime)">Emergency (Anytime)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[#34495E] mb-2">
                        Additional Message
                      </label>
                      <motion.div 
                        whileFocus={{ scale: 1.02 }}
                        className="relative"
                      >
                        <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E8449] focus:border-transparent transition-all duration-300 hover:border-[#1E8449]/50"
                          placeholder="Any specific requirements or medical conditions we should know about..."
                        ></textarea>
                      </motion.div>
                    </div>

                    {/* Consent Checkbox - Uncomment if needed */}
                    {/*
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        required
                        className="mt-1 w-4 h-4 text-[#1E8449] border-gray-300 rounded focus:ring-[#1E8449] transition-all duration-300"
                      />
                      <label htmlFor="consent" className="text-sm text-gray-600">
                        I consent to Q Path Diagnostics contacting me regarding my test booking and understand that my information will be kept confidential in accordance with medical privacy standards.
                      </label>
                    </div>
                    */}

                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#1E8449] to-[#2980B9] text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-shadow duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center space-x-2">
                          <LoadingSpinner size="sm" color="white" />
                          <span>Submitting...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <span>Book Test Now</span>
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <ArrowRight className="w-5 h-5" />
                          </motion.div>
                        </div>
                      )}
                    </motion.button>
                  </form>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg"
                  >
                    <p className="text-sm text-blue-800">
                      <strong>Privacy Notice:</strong> Your personal information is secure and will only be used for scheduling your diagnostic test and providing medical services. We follow strict HIPAA compliance standards.
                    </p>
                  </motion.div>
                </motion.div>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};