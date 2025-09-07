// import React from 'react';
// import { motion } from 'framer-motion';
// import { Phone, MessageCircle } from 'lucide-react';

// /* 
//  * FLOATING ACTIONS COMPONENT
//  * Displays floating action buttons for quick contact (e.g., phone, WhatsApp)
//  * EDITABLE: Update button links, icons, and styling as needed
//  */

// export const FloatingActions: React.FC = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="fixed bottom-6 right-6 flex flex-col space-y-4 z-50"
//     >
//       {/* EDITABLE: Phone Button */}
//       <motion.a
//         whileHover={{ scale: 1.1, rotate: 360 }}
//         whileTap={{ scale: 0.9 }}
//         href="tel:+918712197228" /* EDITABLE: Phone contact link */
//         className="bg-[#2980B9] text-white p-4 rounded-full shadow-lg hover:bg-[#2980B9]/90 transition-all duration-300"
//         title="Call Us"
//       >
//         <Phone className="w-6 h-6" />
//       </motion.a>

//       {/* EDITABLE: WhatsApp Button */}
//       <motion.a
//         whileHover={{ scale: 1.1, rotate: 360 }}
//         whileTap={{ scale: 0.9 }}
//         href="https://wa.me/918712197228" /* EDITABLE: WhatsApp contact link */
//         className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#25D366]/90 transition-all duration-300"
//         title="WhatsApp Us"
//       >
//         <MessageCircle className="w-6 h-6" />
//       </motion.a>
//     </motion.div>
//   );
// };

import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

/* 
 * FLOATING ACTIONS COMPONENT
 * Displays floating action buttons for quick contact (e.g., phone, WhatsApp)
 * EDITABLE: Update button links, icons, images, or styling as needed
 */

export const FloatingActions: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-6 right-6 flex flex-col space-y-4 z-50"
    >
      {/* EDITABLE: Phone Button */}
      <motion.a
        whileHover={{ scale: 1.1, rotate: 360 }}
        whileTap={{ scale: 0.9 }}
        href="tel:+918712197228" /* EDITABLE: Phone contact link */
        className="bg-[#2980B9] text-white p-4 rounded-full shadow-lg hover:bg-[#2980B9]/90 transition-all duration-300"
        title="Call Us"
      >
        <Phone className="w-6 h-6" />
      </motion.a>

      {/* EDITABLE: WhatsApp Button - Simple image link */}
      <motion.a
        whileHover={{ scale: 1.1, rotate: 360 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/918712197228?text=Hi%20Q%20Path%20Diagnostics%20Team%2C%20I%20need%20to%20talk%20about%20your%20tests" /* EDITABLE: WhatsApp contact link with predefined message */
        title="WhatsApp Us"
      >
        <img
          src="https://cdn0.iconfinder.com/data/icons/tuts/128/whatsapp.png"
          alt="WhatsApp"
          width={52}
          height={52}
          className="w-[52px] h-[52px]"
        />
      </motion.a>
    </motion.div>
  );
};